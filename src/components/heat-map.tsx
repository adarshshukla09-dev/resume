"use client";

import { GitHubCalendar } from "react-github-calendar";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

export function GitHubHeatmap({ username }: { username: string }) {
  const { resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  const isDark = resolvedTheme === "dark";

  return (
    <section id="contributions" className="w-full min-w-0 space-y-6">
      <div className="space-y-2">
        <h2 className="text-2xl font-semibold tracking-tight">
          GitHub Contributions
        </h2>

        <p className="max-w-xl text-base leading-7 text-muted-foreground">
          Daily commit, PR, and issue activity across the year.
        </p>
      </div>

      <div className="overflow-x-auto rounded-xl border bg-card p-4 text-card-foreground sm:p-6">
        <GitHubCalendar
          username={username}
          blockSize={12}
          blockMargin={4}
          fontSize={13}
          colorScheme={isDark ? "dark" : "light"}
          theme={{
            light: ["#ebedf0", "#9be9a8", "#40c463", "#30a14e", "#216e39"],
            dark: ["#3c3e3f", "#39d353", "#26a641", "#006d32", "#0e4429"],
          }}
        />
      </div>
    </section>
  );
}
