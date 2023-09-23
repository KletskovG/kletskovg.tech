import { Request, Response } from "express";

export function budgetDatesHandler(req: Request, res: Response) {
  const currentDate = new Date();

  const {
    month = currentDate.getDate(),
    year = currentDate.getFullYear(),
  } = req.params;

  let result = "";

  const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  for (let i = 1; i <=  lastDateOfMonth.getDate(); i++) {
    result += `${i < 10 ? "0" + i : i}`;
    result += `.${Number(month) < 10 ? "0" + month : month}`;
    result += `.${year}\n`;
  }

  res.status(200).send(result);
}
