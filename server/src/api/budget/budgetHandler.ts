import escape from "escape-html";
import { Request, Response } from "express";

export function budgetHandler(req: Request, res: Response) {
  const {
    category: _category,
    column: _column,
    start: _start,
    end: _end,
    course: _course,
    ruble: _ruble,
  } = req.params;

  const category = escape(_category);
  const column = escape(_column);
  const start = escape(_start);
  const end = escape(_end);
  const course = escape(_course);
  const ruble = escape(_ruble);

  let sum = "SUM(\n";

  for (let i = Number(start); i <= Number(end); i++) {
    sum += `\t\t\t\t\t\t(${column}${i}*${course}${i});\n`;
  }

  sum += `\t\t\t\t\t\t(SUM(${ruble}${start}:${ruble}${end}))`;
  sum += ")";

  const result = `
        CONCATENATE(
            "${category} ";
            ${sum}
        )
    `;

  res.status(200).send(`<pre>${result}</pre>`);
}
