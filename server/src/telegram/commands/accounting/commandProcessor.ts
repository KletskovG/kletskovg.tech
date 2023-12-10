import { BUDGET_SERVICE_API_URL } from "const";
import { TAccountingCommand } from "types/accounting/Accounting"

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

        if (typeof amount !== 'number' || Number.isNaN(amount)) {
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
        const limit = Number(args[0])
        return {
            isValid: typeof limit === 'number' && !Number.isNaN(limit),
        }
    },
    "remove": () => ({isValid: true}),
}

export const commandUrlBuilders: Record<TAccountingCommand, (args: string[]) => string> = {
    "list": (args) => {
        return `${BUDGET_SERVICE_API_URL}/list?limit=${args[0]}`
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

        return  requestURL.toString()
    },
    "remove": (args) => {
        const requestURL = new URL(`${BUDGET_SERVICE_API_URL}/remove`);
        
        if (args[0]) {
            requestURL.searchParams.append("transaction", args[0]);
        }

        return requestURL.toString();
    }
}