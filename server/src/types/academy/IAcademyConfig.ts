export type orderBotCommand = "/order";
export type openedCoursesNames = "react" | "js1" | "js2" | "nodeapi" | "nest" | "js1_indiv";

export interface ICourseModel<name = string, url = string> {
  name: name;
  link: url;
  protectActive: boolean;
  optional: boolean;
  additional?: {
    order?: name extends openedCoursesNames ? `${orderBotCommand}_${name}` : string;
    projects: string;
  }
}
