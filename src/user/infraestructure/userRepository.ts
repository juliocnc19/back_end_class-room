import type { IUser } from "../domain/IUser";
import { User } from "../domain/User";
import { PrismaClient } from "@prisma/client";

export class UserRepository implements IUser {
  private db: PrismaClient;
  constructor() {
    this.db = new PrismaClient();
  }
  async create(
    email: string,
    password: string,
    user_name: string,
    genderId: number,
    phone: string,
    name: string,
    last_name: string
  ): Promise<User> {
    const user = await this.db.user.create({
      data: {
        email,
        password,
        user_name,
        genderId,
        phone,
        name,
        last_name
      },
    });

    return new User(
      user.id,
      user.email,
      user.password,
      user.user_name,
      user.create_date.toDateString(),
      user.genderId,
      user.phone,
      user.name,
      user.last_name,
    );
  }

  async find(email: string): Promise<User | null> {
    const user = await this.db.user.findUnique({
      where: {
        email: email,
      },
    });

    if (!user) {
      return null;
    }

    return new User(
      user.id,
      user.email,
      user.password,
      user.user_name,
      user.create_date.toDateString(),
      user.genderId,
      user.phone,
      user.name,
      user.last_name,
    );
  }
}
