import { useEffect } from 'react';
import { Loader } from '@components/Loader/Loader';
import { ITimelineProps } from './Timeline.typings';
import { useTimeline } from './Timeline.hooks/useTimeline';

export function Timeline(props: ITimelineProps) {
  const {
    logs,
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