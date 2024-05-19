import { Elysia, t } from "elysia";
import {
  createCourseController,
  findManyController,
  findOneController,
  deleteCourseController,
  updateCourseController
} from "../server/dependencies";

export const courseRouter = new Elysia({ prefix: "/course" })
  .get("/:id", findOneController.run.bind(findOneController), {
    detail: {
      tags: ["Course"],
    }
  })

  .get("/mine/:ownerId", findManyController.run.bind(findManyController), {
    detail: {
      tags: ["Course"],
    }
  })

  .post("/new", createCourseController.run.bind(createCourseController), {
    detail: {
      tags: ["Course"],
    },
    body: t.Object({
      title: t.String(),
      description: t.String(),
      ownerId: t.Number(),
      section: t.String(),
      subject: t.String(),
      areaId: t.Number(),
    }),
  })

  .delete("/:id",deleteCourseController.run.bind(deleteCourseController),{
    detail:{
      tags:["Course"]
    }
  })

  .put("/update",updateCourseController.run.bind(updateCourseController),{
    detail:{
      tags:["Course"]
    },
    body: t.Object({
      id:t.Number(),
      title:t.String(),
      description:t.String(),
      section:t.String(),
      subject:t.String(),
      areaId:t.Number()
    })
  })