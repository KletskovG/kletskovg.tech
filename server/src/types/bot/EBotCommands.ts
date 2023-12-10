import { orderBotCommand, openedCoursesNames } from "types/academy/IAcademyConfig";

export type EBotCommands =
  | "acc"
  | "chatid" 
  | "academy"
  | `${orderBotCommand}_${openedCoursesNames}`
