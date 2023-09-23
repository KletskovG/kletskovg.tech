import {Schema, model} from "mongoose";
import type { ICourseModel } from "types/academy/IAcademyConfig";

const schema = new Schema<ICourseModel>({
  name: String,
  link: String,
  protectActive: Boolean,
  optional: Boolean,
  additional: {
    order: String,
    projects: String,
  }
});

export const AcademyConfigModel = model("academy", schema);
