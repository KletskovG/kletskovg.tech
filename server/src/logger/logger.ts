import { getEnvVariable } from "utils/getEnvVariable";
import fs from "fs/promises";
import { createReadStream, existsSync, createWriteStream, mkdirSync } from "fs";
import { sendNotification } from "telegram";

type TLogLevel = "Error" | "Info" | "Notify" | "Important";
const LOGFILE_DIR = getEnvVariable("LOGFILE_PATH") || "logs";

export function log (level: TLogLevel, message: string, skipLogFile = false) {
  const currentTime = new Date().toISOString();
  const logMessage = `\n[${currentTime}] |\t [${level}] | \t ${message}`;

  if (!existsSync(LOGFILE_DIR)) {
    mkdirSync(LOGFILE_DIR, {recursive: true});
  }

  if (LOGFILE_DIR && !skipLogFile) {
    const logFilePath = `${LOGFILE_DIR}/logs.log`;

    fs.writeFile(logFilePath, logMessage, {
      encoding: "utf8",
      flag: "as+",
    });
  }

  if (level === "Error") {
    sendNotification(`ERROR \n ${message}`);
  }

  if (level === "Notify") {
    sendNotification(`${message}`);
  }

  if (level === "Important") {
    sendNotification(`!!! ${message}`);
  }

  console.log(logMessage);
}

export function readLogs(sinceMinutes?: number): Promise<string[]> {
  const logFilePath = `${LOGFILE_DIR}/logs.log`;
  const readStream = createReadStream(logFilePath);
  const logs: string[] = [];
  const currentTime = new Date().getTime();

  readStream.on("data", (data ) => {
    const lines = data.toString().split("\n");
    lines.forEach(line => {
      if (sinceMinutes) {
        const startTime = currentTime - sinceMinutes * 60 * 1000;
        const logTime = getLogTime(line);

        if (logTime >= startTime) {
          logs.push(line);
        }

        return;
      }

      logs.push(line);
    });
  });

  return new Promise((resolve, reject) => {
    readStream.on("close", () => resolve(logs));
    readStream.on("error", (error) => reject(error));
  });
}

export function flushLogs() {
  const FLUSH_TIMEOUT = 60 * 8;
  readLogs(FLUSH_TIMEOUT)
    .then(logs => {
      if (!LOGFILE_DIR) {
        log("Error", "FLUSH LOGS: LOGFILE_DIR not set");
        return;
      }

      const logFilePath = `${LOGFILE_DIR}/logs.log`;

      if (!existsSync(logFilePath)) {
        log("Error", "FLUSH LOGS: log file not exists");
        return;
      }
      const writeStream = createWriteStream(logFilePath);
      const freshLogs = logs.join("\n");
      writeStream.write(freshLogs);
      setTimeout(() => {
        writeStream.close(() => log("Notify", "LOGS FLUSHED"));
      }, 10_000);
    })
    .catch(err => {
      log("Error", `FLUSH LOGS: ${err}`);
    });
}

function getLogTime(line: string) {
  const startTimeIndex = line.indexOf("[");
  const endTimeIndex = line.indexOf("]");

  if (startTimeIndex !== -1 && endTimeIndex !== -1) {
    const time = line.slice(startTimeIndex + 1, endTimeIndex);

    return new Date(Date.parse(time)).getTime();
  }

  return line;
}
