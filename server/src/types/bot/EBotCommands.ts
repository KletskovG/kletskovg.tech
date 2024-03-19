import { orderBotCommand, openedCoursesNames } from "types/academy/IAcademyConfig";

export type EBotCommands =
  | "acc"
  | "chatid" 
  | "academy"
  | "ui"
  | `${orderBotCommand}_${openedCoursesNames}`
