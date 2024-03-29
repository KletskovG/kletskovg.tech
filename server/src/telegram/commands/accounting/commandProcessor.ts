import { BUDGET_SERVICE_API_URL } from "const";
import { TAccountingCommand } from "types/accounting/Accounting";

interface ISchemaValidator {
    (args: string[]): {
        isValid: boolean;
        message?: string;
    }
}

export const validationSchema: Record<TAccountingCommand, ISchemaValidator> = {
    "add": (args) => {
        if (args.length < 2) {
            return {
                isValid: false,
                message: "not enough arguments",
            };
        }

        const amount = Number(args[0]);

        if (typeof amount !== "number" || Number.isNaN(amount)) {
            return {
                isValid: false,
                message: `Amount have to be number, got ${amount}`,
            };
        }

        const date = Date.parse(args[1]);

        if (typeof date !== "number" || Number.isNaN(date)) {
            return {
                isValid: false,
                message: "Date is invalid"
            };
        }

        return {
            isValid: true,
        };
    },
    "list": (args) => {
        const limit = Number(args[0]);
        return {
            isValid: typeof limit === "number" && !Number.isNaN(limit),
        };
    },
    "remove": () => ({isValid: true}),
    "report": (args) => {
        if (args.length === 1) {
            const days = Number(args[0]);
            return {
                isValid: typeof days === "number" && !Number.isNaN(days),
                message: "Amount of days have to be number",
            };
        }

        const start = Date.parse(args[0]);
        const end = Date.parse(args[1]);

        return {
            isValid:
                (typeof start === "number" && !Number.isNaN(start)) &&
                (typeof end === "number" && !Number.isNaN(start)),
            message: "Start and end dates have to be valid. Format - report <start> <end>",
        };
    },
    "update": (args) => {
        if (args.length < 2) {
            return {
                isValid: false,
                message: "Min 2 arguments required. Format - <transaction_id> <expense> <date?> <category?> <note?>"
            };
        }

        const amount = Number(args[1]);

        return {
            isValid: typeof amount === "number" && !Number.isNaN(amount),
            message: "Amount have to be number",
        };
    }
};

export const commandUrlBuilders: Record<TAccountingCommand, (args: string[]) => string> = {
    "list": (args) => {
        return `${BUDGET_SERVICE_API_URL}/list?limit=${args[0]}`;
    },
    "add": (args) => {
        const requestURL = new URL(`${BUDGET_SERVICE_API_URL}/add`);

        requestURL.searchParams.append("amount", args[0]);
        requestURL.searchParams.append("date", args[1]);

        if (args[2]) {
            requestURL.searchParams.append("category", args[2]);
        }

        if (args[3]) {
            requestURL.searchParams.append("note", args[3]);
        }

        return  requestURL.toString();
    },
    "remove": (args) => {
        const requestURL = new URL(`${BUDGET_SERVICE_API_URL}/remove`);
        
        if (args[0]) {
            requestURL.searchParams.append("transaction", args[0]);
        }

        return requestURL.toString();
    },
    "report": (args) => {
        const requestURL = new URL(`${BUDGET_SERVICE_API_URL}/report`);

        if (args.length === 1) {
            requestURL.searchParams.append("days", args[0]);
            return requestURL.toString();
        }

        requestURL.searchParams.append("start", args[0]);
        requestURL.searchParams.append("end", args[1]);
        return requestURL.toString();
    },
    "update": (args) => {
        const requestURL = new URL(`${BUDGET_SERVICE_API_URL}/update`);

        requestURL.searchParams.append("transaction", args[0]);
        requestURL.searchParams.append("amount", args[1]);
        requestURL.searchParams.append("date", args[2] ?? "");
        requestURL.searchParams.append("category", args[3] ?? "");
        requestURL.searchParams.append("note", args[4] ?? "");

        return requestURL.toString();
    }
};