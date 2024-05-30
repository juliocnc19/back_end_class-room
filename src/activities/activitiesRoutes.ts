import { Elysia, t } from "elysia";
import {
  createActivityController,
  deleteActivityController,
  findManyActivityController,
  findOneActivityController,
  updateActivityController,
  myActivitiesController
} from "../server/dependencies";

export const activityRouter = new Elysia({ prefix: "/activity" })
  .post("/new", createActivityController.run.bind(createActivityController), {
    detail: {
      tags: ["Activity"],
    },
    body: t.Object({
      course_id: t.Number(),
      title: t.String(),
      description: t.String(),
      grade: t.Number(),
      start_date: t.String(),
      end_date: t.String(),
      email: t.String(),
      status_id: t.Number(),
    }),
  })

  .delete("/:id", deleteActivityController.run.bind(deleteActivityController), {
    detail: {
      tags: ["Activity"],
    },
  })
  .get(
    "/:course_id",
    findManyActivityController.run.bind(findManyActivityController),
    {
      detail: {
        tags: ["Activity"],
      },
    }
  )
  .get(
    "/activity/:id",
    findOneActivityController.run.bind(findOneActivityController),
    {
      detail: {
        tags: ["Activity"],
      },
    }
  )
  .put("/update", updateActivityController.run.bind(updateActivityController), {
    detail: {
      tags: ["Activity"],
    },
    body: t.Object({
      id: t.Number(),
      title: t.String(),
      description: t.String(),
      grade: t.Number(),
      start_date: t.String(),
      end_date: t.String(),
      email: t.String(),
      status_id: t.Number(),
    }),
  })
  .get("/mine/:idUser",myActivitiesController.run.bind(myActivitiesController),{
    detail:{
        tags:["Activity"]
    }
  })
  