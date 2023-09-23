import { orderBotCommand, openedCoursesNames } from "types/academy/IAcademyConfig";

export type EBotKrakenCommand =
  "kraken_stop" |
  "kraken_start" |
  "kraken_topup_update" |
  "kraken_topup_set" |
  "kraken_status" |
  "kraken_deal" |
  "kraken_close_deal"

export type EBotCommands =
  "chatid" |
  "academy" |
  "homeworks" |
  "tag" |
  "mir" |
  `${orderBotCommand}_${openedCoursesNames}` |
  EBotKrakenCommand
