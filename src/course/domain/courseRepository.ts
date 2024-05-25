import { Course } from "./Course";
import { ICourse } from "./ICourse";
import { PrismaClient } from "@prisma/client";
import { nanoid } from "nanoid";
import { ICourseUpdate } from "./ICouseUpdate";
import { User } from "../../user/domain/User";

export class CourseRepository implements ICourse {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }

  async create(
    title: string,
    description: string,
    ownerId: number,
    section: string,
    subject: string,
    areaId: number
  ): Promise<Course> {
    const user = await this.db.user.findUnique({
      where: {
        id: ownerId,
      },
    });
    const course = await this.db.course.create({
      data: {
        title,
        description,
        ownerId,
        owner_name: user!.name,
        section,
        subject,
        areaId,
        token: nanoid(10),
      },
    });

    const area = await this.db.area.findUnique({
      where: {
        id: course.areaId,
      },
    });

    return new Course(
      course.id,
      course.title,
      course.description,
      course.ownerId,
      course.owner_name,
      course.section,
      course.subject,
      course.areaId,
      course.token,
      area!.area
    );
  }

  async findOne(id: number): Promise<Course | null> {
    const course = await this.db.course.findUnique({
      where: {
        id,
      },
    });

    if (!course) return null;

    const area = await this.db.area.findUnique({
      where: {
        id: course.areaId,
      },
    });
    return new Course(
      course.id,
      course.title,
      course.description,
      course.ownerId,
      course.owner_name,
      course.section,
      course.subject,
      course.areaId,
      course.token,
      area!.area
    );
  }

  async findMany(ownerId: number): Promise<Course[] | []> {
    const listCourse: Course[] = [];

    const course = await this.db.course.findMany({
      where: {
        OR: [{ ownerId }, { users: { some: { userId: ownerId } } }],
      },
      include: {
        area: {
          select: {
            area: true,
          },
        },
      },
    });

    if (!course || course.length < 1) return [];

    course.map((c) => {
      const course = new Course(
        c.id,
        c.title,
        c.description,
        c.ownerId,
        c.owner_name,
        c.section,
        c.subject,
        c.areaId,
        c.token,
        c.area.area
      );
      listCourse.push(course);
    });
    return listCourse;
  }

  async delete(id: number): Promise<Course> {
    const course = await this.db.course.delete({
      where: {
        id,
      },
    });

    const area = await this.db.area.findUnique({
      where: {
        id: course.areaId,
      },
    });

    return new Course(
      course.id,
      course.title,
      course.description,
      course.ownerId,
      course.owner_name,
      course.section,
      course.subject,
      course.areaId,
      course.token,
      area!.area
    );
  }

  async update(course: ICourseUpdate): Promise<Course> {
    const newCouse = await this.db.course.update({
      where: {
        id: course.id,
      },
      data: {
        title: course.title,
        description: course.description,
        section: course.section,
        subject: course.subject,
        areaId: course.areaId,
      },
    });

    const areaName = await this.db.area.findUnique({
      where: {
        id: newCouse.areaId,
      },
    });

    return new Course(
      newCouse.id,
      newCouse.title,
      newCouse.description,
      newCouse.ownerId,
      newCouse.owner_name,
      newCouse.section,
      newCouse.subject,
      newCouse.areaId,
      newCouse.token,
      areaName!.area
    );
  }

  async findUserOfCourse(course_id: number): Promise<Course> {
    const course = await this.db.course.findUnique({
      where: {
        id: course_id,
      },
      include: {
        users: {
          include: {
            user: true,
          },
        },
        area: {
          select: {
            area: true,
          },
        },
      },
    });

    return new Course(
      course!.id,
      course!.title,
      course!.description,
      course!.ownerId,
      course!.owner_name,
      course!.section,
      course!.subject,
      course!.areaId,
      course!.token,
      course!.area.area,
      course!.users[0] ? course!.users[0] : ([] as any)
    );
  }

  async joinToCourse(id: number, token: string): Promise<Course | number> {
    const user = await this.db.user.findUnique({
      where:{id}
    })
    if(!user) return 0

    const course = await this.db.course.findUnique({
      where: {
        token,
      },
      include: {
        area: {
          select: {
            area: true,
          },
        },
      },
    });
    if (!course) return 1;

    const jointed = await this.db.courseEnrollment.create({
      data: {
        userId: id,
        courseId: course.id,
      },
    });


    return new Course(
      course!.id,
      course!.title,
      course!.description,
      course!.ownerId,
      course!.owner_name,
      course!.section,
      course!.subject,
      course!.areaId,
      course!.token,
      course!.area.area,
    );
  }

  async delteUserOfCourse(idUser: number,idCourse:number): Promise<boolean> {
    const res = await this.db.courseEnrollment.delete({
      where:{
        userId_courseId:{
          userId:idUser,
          courseId:idCourse
        }
      }
    })
    if(!res) return false
    return true
  }
}
