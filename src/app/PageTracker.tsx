"use client"
import { useEffect } from "react";
import { trackPageView } from "@/lib/mixpanel";

interface PageTrackerProps {
  eventName: string;
  properties?: Record<string, any>;
}

export default function PageTracker({ eventName, properties = {} }: PageTrackerProps) {
  useEffect(() => {
    trackPageView(eventName, properties);
  }, [eventName, properties]);

  return null; // No UI, only for tracking
}
