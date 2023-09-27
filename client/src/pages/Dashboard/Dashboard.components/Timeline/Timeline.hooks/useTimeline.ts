import { useCallback, useState } from "react";
import { LOGS_API_URL } from '../../../Dashboard.const';

export function useTimeline() {
  const [isLoading, setIsLoading] = useState(true);
  const [logs, setLogs] = useState<string[]>([]);

  const loadLogs = useCallback(() => {
    setIsLoading(true);

    fetch(LOGS_API_URL)
      .then((res) => res.json())
      .then(data => {
        setIsLoading(false);
        setLogs(data.split('/n'));
      })
      .catch((err) => {
        console.log(err);
      })
  }, [])


  return {
    loadLogs,
    isLoading,
    logs,
  }
}