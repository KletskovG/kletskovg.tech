import { Router } from "express";
import { registerHandler } from "api/registerHandler";
import {
  academyHandler,
  getAcademyConfigHandler,
  setAcademyConfigHandler,
} from "api";

const academyRouter = Router();

registerHandler(
  academyRouter,
  "/academy",
  "get",
  academyHandler
);
registerHandler(
  academyRouter,
  "/academy/config",
  "get",
  getAcademyConfigHandler
);
registerHandler(
  academyRouter,
  "/academy/config",
  "post",
  setAcademyConfigHandler
);
export default academyRouter;
