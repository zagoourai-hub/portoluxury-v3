"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { useEffect, useState } from "react";

export function OpeningLoader() {
  const [loading, setLoading] = useState(true);
  const [ready, setReady] = useState(false);
  const reducedMotion = useReducedMotion();

  useEffect(() => {
    const startedAt = performance.now();
    let finishTimer: ReturnType<typeof setTimeout>;
    let closingTimer: ReturnType<typeof setTimeout>;
    let finished = false;
    const finish = () => {
      if (finished) return;
      finished = true;
      finishTimer = setTimeout(() => {
        setReady(true);
        closingTimer = setTimeout(() => setLoading(false), 600);
      }, Math.max(0, 3000 - (performance.now() - startedAt)));
    };
    const fallbackTimer = setTimeout(finish, 8000);

    if (document.readyState === "complete") finish();
    else window.addEventListener("load", finish, { once: true });

    return () => {
      window.removeEventListener("load", finish);
      clearTimeout(finishTimer);
      clearTimeout(closingTimer);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return (
    <AnimatePresence>
      {loading && (
        <motion.div
          className="opening-loader fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[#0d0b09] px-6 text-[#E5C5A3]"
          exit={{ opacity: 0 }}
          transition={{ duration: reducedMotion ? 0 : 0.4 }}
          role="status"
          aria-live="polite"
        >
          <div aria-hidden="true" className="mt-8 size-6 animate-spin rounded-full border-2 border-[#E5C5A3]/20 border-t-[#EB9900] motion-reduce:animate-none" />
          <p className="mt-5 font-mono text-xs tracking-[0.2em] text-[#E5C5A3]/70 uppercase">Loading portfolio</p>
          <div aria-hidden="true" className="mt-4 h-px w-40 overflow-hidden bg-[#E5C5A3]/15">
            <motion.div
              className="h-full bg-[#EB9900]"
              initial={{ width: reducedMotion ? "100%" : "0%" }}
              animate={{ width: reducedMotion || ready ? "100%" : "90%" }}
              transition={{ duration: reducedMotion ? 0 : ready ? 0.5 : 8, ease: "easeOut" }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
