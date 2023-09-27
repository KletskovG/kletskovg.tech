import { useEffect } from 'react';
import { Loader } from '@components/Loader/Loader';
import { useTimeline } from './Timeline.hooks/useTimeline';

export function Timeline() {
  const {
    isLoading,
    loadLogs,
  } = useTimeline();

  useEffect(() => {
    loadLogs();
  }, []);

  if (isLoading) {
    return (
      <Loader />
    )
  }

  return (
    <div className="DashboardTimeline">
    </div>
  )
}