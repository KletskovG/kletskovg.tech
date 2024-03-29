export type EEnvVariable =
  | "BOT_TOKEN"
  | "CHAT_NUMBER"
  | "PORT"
  | "ACADEMY_EMAIL"
  | "ACADEMY_PWD"
  | "ACADEMY_CHAT"
  | "ACADEMY_SECOND"
  | "ACADEMY_CONFIG_PASS"
  | "KRAKEN_DB_CONNECT"
  | "KRAKEN_API_KEY"
  | "KRAKEN_API_SIGN"
  | "LOGFILE_PATH"
  | "KRAKEN_OHLC_DB_CONNECT"
  | "BINANCE_API_KEY"
  | "BINANCE_SECRET"
  | "TINKOFF_API_KEY"
  | "ACCOUNTING_UI_URL"


export const enum EArgvVariable {
  BOT_TOKEN = 2,
  CHAT_NUMBER,
  PORT,
  LOGFILE_PATH,

  ACADEMY_EMAIL,
  ACADEMY_PWD,
  ACADEMY_CHAT,
  ACADEMY_SECOND,
  ACADEMY_CONFIG_PASS,

  KRAKEN_DB_CONNECT,
  KRAKEN_API_KEY,
  KRAKEN_API_SIGN,
  KRAKEN_OHLC_DB_CONNECT,
  BINANCE_API_KEY,
  BINANCE_SECRET,

  TINKOFF_API_KEY,

  ACCOUNTING_UI_URL
}

export const ArgvMap: Record<EEnvVariable, EArgvVariable> = {
  BOT_TOKEN: 2,
  CHAT_NUMBER: 3,
  PORT: 4,
  LOGFILE_PATH: 5,

  ACADEMY_EMAIL: 6,
  ACADEMY_PWD: 7,
  ACADEMY_CHAT: 8,
  ACADEMY_SECOND: 9,
  ACADEMY_CONFIG_PASS: 10,

  KRAKEN_DB_CONNECT: 11,
  KRAKEN_API_KEY: 12,
  KRAKEN_API_SIGN: 13,
  KRAKEN_OHLC_DB_CONNECT: 14,

  BINANCE_API_KEY: 15,
  BINANCE_SECRET: 16,

  TINKOFF_API_KEY: 17,

  ACCOUNTING_UI_URL: 18,
};
