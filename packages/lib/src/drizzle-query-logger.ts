import type { Logger } from "drizzle-orm";

interface QueryStats {
    startTime: number;
    queryType: string;
    tableTitle: string | null;
}

const colors = {
    reset: "\x1b[0m",
    bright: "\x1b[1m",
    dim: "\x1b[2m",
    red: "\x1b[31m",
    green: "\x1b[32m",
    yellow: "\x1b[33m",
    blue: "\x1b[34m",
    magenta: "\x1b[35m",
    cyan: "\x1b[36m",
    white: "\x1b[37m",
    gray: "\x1b[90m",
    bgBlue: "\x1b[44m",
    bgGreen: "\x1b[42m",
    bgYellow: "\x1b[43m",
    bgRed: "\x1b[41m",
    bgMagenta: "\x1b[45m",
} as const;

export class DrizzleQueryLogger implements Logger {
    private queryCount: number = 0;
    private activeQueries: Map<string, QueryStats> = new Map<string, QueryStats>;

    constructor(private readonly options = {
        log: console.log,
    }) {}

    private fetchQueryType(query: string): string {
        let upperQuery: string = query.trim().toUpperCase()

        if (upperQuery.startsWith("SELECT")) return "SELECT";
        if (upperQuery.startsWith("INSERT")) return "INSERT";
        if (upperQuery.startsWith("UPDATE")) return "UPDATE";
        if (upperQuery.startsWith("DELETE")) return "DELETE";
        if (upperQuery.startsWith("CREATE")) return "CREATE";
        if (upperQuery.startsWith("DROP")) return "DROP";
        if (upperQuery.startsWith("ALTER")) return "ALTER";

        return "OTHER";
    }

    private fetchTableTitle(query: string): string | null {
        let patterns: RegExp[] = [
            /(?:FROM|INTO|UPDATE|JOIN)\s+["`]?(\w+)["`]?/i,
            /(?:CREATE|DROP)\s+TABLE\s+["`]?(\w+)["`]?/i,
        ];

        for (let pattern of patterns) {
            let [match] = query.match(pattern) ?? [];

            return match ?? null;
        }

        return null;
    }

    private fetchQueryTypeColor(queryType: string): string {
        switch (queryType) {
            case "SELECT":
                return colors.green;
            case "INSERT":
                return colors.blue;
            case "UPDATE":
                return colors.yellow;
            case "DELETE":
                return colors.red;
            case "CREATE":
                return colors.magenta;
            case "DROP":
                return colors.red;
            case "ALTER":
                return colors.cyan;
            default:
                return colors.white;
        }
    }

    fetchQueryTypeIcon(queryType: string): string {
        switch (queryType) {
            case "SELECT":
                return "magnifying icon";
            case "INSERT":
                return "memo icon";
            case "UPDATE":
                return "pencil icon";
            case "DELETE":
                return "waste bucket icon";
            case "CREATE":
                return "construction crane icon";
            case "DROP":
                return "boom icon";
            case "ALTER":
                return "wrench icon";
            default:
                return "high voltage icon";
        }
    }

    private formatParams(params: unknown[]): string {
        if (!params.length) return "\x1b[m";

        let formattedParams = params.map((param, index) => {
            let value: string;

            try {
                if (param === null) {
                    value = `${colors}null${colors.reset}`;
                }
                else if (typeof param === "string") {
                    value = `${colors}${params}${colors.reset}`;
                }
                else if (typeof param === "number") {
                    value = `${colors}${params}${colors.reset}`;
                }
                else if (typeof param === "boolean") {
                    value = `${colors}${params}${colors.reset}`;
                }
                else {
                    value = `${colors}${JSON.stringify(params)}${colors.reset}`;
                }
            } catch {
                value = `${colors}${String(params)}${colors.reset}`;
            }

            return `${colors}${index + 1}${colors.reset} ${value}`;
        });

        return `${colors}|- Parameters: ${colors.reset} ${formattedParams.join(", ")}`;
    }

    private formatQuery(query: string): string {
        return query
            .replace(
                /\b(SELECT|FROM|WHERE|JOIN|INSERT|INTO|UPDATE|SET|DELETE|CREATE|DROP|ALTER|TABLE|INDEX|PRIMARY|KEY|FOREIGN|REFERENCES|NOT|NULL|DEFAULT|UNIQUE|AUTO_INCREMENT|IF|EXISTS|ON|DUPLICATE|KEY|UPDATE|VALUES|ORDER|BY|GROUP|HAVING|LIMIT|OFFSET|INNER|LEFT|RIGHT|OUTER|UNION|CASE|WHEN|THEN|ELSE|END|AS|DISTINCT|COUNT|SUM|AVG|MAX|MIN|AND|OR|IN|LIKE|BETWEEN|IS)\b/gi,
                (match) => `${colors}${match.toUpperCase()}${colors.reset}`
            )
            .replace(/('[^']*'|"[^"]*")/g, `${colors}1${colors.reset}`)
            .replace(/\b(\d+)\b/g, `${colors}1${colors.reset}`);
    }

    logQuery(query: string, params: unknown[]): void {
        this.queryCount++;

        let queryId: string = `q${this.queryCount}`;
        let startTime: number = Date.now();
        let queryType: string = this.fetchQueryType(query);
        let tableTitle: string | null = this.fetchTableTitle(query);
        let timestamp: string = new Date().toLocaleTimeString();

        this.activeQueries.set(queryId, {
            startTime,
            queryType,
            tableTitle,
        });

        let typeColor: string = this.fetchQueryTypeColor(queryType);
        let icon: string = this.fetchQueryTypeIcon(queryType);
        let paramsStr: string = this.formatParams(params);
        let formattedQuery: string = this.formatQuery(
            `\n${query}`
                .replaceAll("\n", `\n${colors.gray}|\t`)
        );

        let header: string = `${colors}${colors.cyan}/ Database Query ${colors}#${this.queryCount}${colors.reset}`;
        let timeInfo: string = `${colors}| ${colors}Time: ${timestamp}${colors.reset}`;
        let queryInfo: string = `${colors}| ${icon} ${typeColor}${colors}${queryType}${colors.reset}${tableTitle ? `${colors}on${colors.reset} ${colors}${tableTitle}${colors.reset}` : "\x1b[m"}`;
        let queryLine: string = `${colors}| ${colors}SQL: ${colors.reset}${formattedQuery}`;
        let footer: string = `${colors}${colors.dim}${"-".repeat(50)}${colors.reset}`;

        this.options.log("\n", header);
        this.options.log(timeInfo);
        this.options.log(queryInfo);
        this.options.log(queryLine);
        if (paramsStr) this.options.log(paramsStr);
        this.options.log(footer);

        setTimeout(() => {
            this.activeQueries.delete(queryId);
        }, 5000);
    }
}
