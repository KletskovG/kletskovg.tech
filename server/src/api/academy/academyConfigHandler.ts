import { Request, Response } from "express";
import { AcademyConfigModel } from "db/models/academyScrape";
import { getEnvVariable } from "utils/getEnvVariable";
import { ICourseModel } from "types/academy/IAcademyConfig";
import { log } from "logger/logger";

export function getAcademyConfigHandler(_: unknown, res: Response) {
  AcademyConfigModel.find({})
    .then(data => {
      res.status(200).send(JSON.stringify(data));
    })
    .catch(err => {
      res.status(500).send("Error while retrieving data from DB");
      log("Error", err);
    });
}

type SetAcademyConfigRequest = Request<unknown, unknown, {courses: ICourseModel[], pwd: string}, unknown>;

export function setAcademyConfigHandler(req: SetAcademyConfigRequest, res: Response) {
  const {courses, pwd} = req.body;
  const configPass = getEnvVariable("ACADEMY_CONFIG_PASS");
  console.log("SET REQUEST courses");
  console.log(courses);

  if (pwd !== configPass) {
    res.status(401).send();
    log("Error", "Wrong creds for bot config update");
    return;
  }

  res.status(200).send("OK");

  for (const course of courses) {
    AcademyConfigModel.findOneAndUpdate({name: course.name}, course, { upsert: true })
      .then(res => {
        console.log("UPDATE RESULT");
        console.log(res);
        log("Important", `Academy config: ${course.name} is updated`);
      })
      .catch(err => {
        log("Error", `Set academy config error ${JSON.stringify(err)}`);
      });
  }
}
