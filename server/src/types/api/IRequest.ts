import { Request } from "express";

export type IRequest<
    ParamsList extends Record<string, string>,
    QueryList extends Record<string, string> = Record<string, string>,
> = Request<ParamsList, any, any, QueryList>;
