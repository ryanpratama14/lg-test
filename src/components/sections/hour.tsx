"use client";

import { useEffect, useState } from "react";

export default function Hour() {
  const [time, setTime] = useState(getCurrentTime());

  useEffect(() => {
    const updateTime = () => {
      setTime(getCurrentTime());
    };

    const now = new Date();
    const nextMinute = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), now.getMinutes() + 1, 0);
    const timeout = nextMinute.getTime() - now.getTime();

    const timerId = setTimeout(() => {
      updateTime();
      const intervalId = setInterval(updateTime, 60000);

      return () => clearInterval(intervalId);
    }, timeout);
    return () => clearTimeout(timerId);
  }, []);

  function getCurrentTime() {
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, "0");
    const minutes = String(now.getMinutes()).padStart(2, "0");
    return `${hours}:${minutes}`;
  }

  return time;
}
