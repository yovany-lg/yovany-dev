"use client";

import { useEffect, useState } from "react";

/**
 * Thin technical status strip with registration-mark corners and a live
 * local clock — the kind of handcrafted detail that reads "real studio,"
 * not "AI template." Clock hydrates client-side to avoid SSR mismatch.
 */
function useGuadalajaraTime() {
  const [time, setTime] = useState<string | null>(null);
  useEffect(() => {
    const fmt = new Intl.DateTimeFormat("en-US", {
      timeZone: "America/Mexico_City",
      hour: "2-digit",
      minute: "2-digit",
      hour12: false,
    });
    const tick = () => setTime(fmt.format(new Date()));
    tick();
    const id = setInterval(tick, 30_000);
    return () => clearInterval(id);
  }, []);
  return time;
}

export function StatusBar() {
  const time = useGuadalajaraTime();

  return (
    <div className="statusbar">
      <div className="container-x">
        <div className="statusbar-inner reg">
          <span className="reg-mark reg-tl" aria-hidden />
          <span className="reg-mark reg-tr" aria-hidden />
          <span className="reg-mark reg-bl" aria-hidden />
          <span className="reg-mark reg-br" aria-hidden />
          <span>
            Guadalajara, MX{" "}
            <span className="statusbar-sep">·</span>{" "}
            {time ?? "--:--"} <span className="statusbar-sep">·</span> works with US teams
          </span>
          <span className="statusbar-avail">
            <span className="dot" aria-hidden />
            Available for new work
          </span>
        </div>
      </div>
    </div>
  );
}
