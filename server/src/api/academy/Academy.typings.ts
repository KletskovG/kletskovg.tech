import { Request } from "express";

export type AcademyHandlerRequest = Request<any, unknown, unknown, {checkOptional: string}>;
