import escape from 'escape-html';
import { Request, Response } from "express";

export function budgetDatesHandler(req: Request, res: Response) {
  const currentDate = new Date();

  const {
    month = currentDate.getDate(),
    year = currentDate.getFullYear(),
  } = req.params;

  const monthEscaped = escape(`${month}`);
  const yearEscaped = escape(`${year}`);
  let result = "";

  const lastDateOfMonth = new Date(currentDate.getFullYear(), currentDate.getMonth() + 1, 0);
  for (let i = 1; i <=  lastDateOfMonth.getDate(); i++) {
    result += `${i < 10 ? "0" + i : i}`;
    result += `.${Number(monthEscaped) < 10 ? "0" + monthEscaped : monthEscaped}`;
    result += `.${yearEscaped}\n`;
  }

  res.status(200).send(result);
}
