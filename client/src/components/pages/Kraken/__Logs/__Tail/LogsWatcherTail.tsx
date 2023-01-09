import React, { useEffect, useRef, useState, useCallback } from "react";
import type { LogsWatcherTailProps } from "./LogsWatcherTail.types";

export function LogsWatcherTail(props: LogsWatcherTailProps)  {
  const { fetchInterval, since } = props;

  const logsStore = useRef<Set<string>>(new Set());
  const [logs, setLogs] = useState<string[]>([...logsStore.current]);

  const pollLogs = useCallback(() => {
    fetch(`https://telegram.kletskovg.tech/logs?since=${since}`, {
      cache: "no-cache",
    })
      .then(data => {
        return data.text();
      })
      .then(text => {
        return text.replaceAll(new RegExp(/\"/g), '').split('/n');
      })
      .then((lines: string[]) => {
        lines.forEach(line => logsStore.current.add(line));
        setLogs([...logsStore.current]);
      })
      .catch(error => console.log(error));
  }, [since]);

  useEffect(() => {
    const intervalTimeout = fetchInterval * 1000;
    const pollLogsInterval = setInterval(() => {
      pollLogs();
    }, intervalTimeout);

    return () => {
      clearInterval(pollLogsInterval);
    }
  }, [fetchInterval, logs, pollLogs, since]);

  useEffect(() => {
    pollLogs();
  }, [pollLogs]);

  return (
    <div className="LogsWatcherTail">
      {[...logs].map(line => (
        <p key={line}>{line}</p>
      ))}
    </div>
  )
}
