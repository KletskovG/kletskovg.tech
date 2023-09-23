import { Request, Response } from "express";

export function budgetHandler(req: Request, res: Response) {
  const {
    category,
    column,
    start,
    end,
    course,
    ruble
  } = req.params;

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
