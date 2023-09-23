import * as path from "path";
import * as fs from "fs";

export function getImgSrc(media: string) {
  const pathToMedia = path.join(__dirname, media);
  const isFileExists = fs.existsSync(pathToMedia);

  if (isFileExists) {
    const mediaFile = fs.readFileSync(pathToMedia).toString("base64");
    const imgSrc = `data:image/png;base64,${mediaFile}`;
    return imgSrc;
  }

  return null;
}
