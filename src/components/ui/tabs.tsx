"use client";

import { useState } from "react";
import { motion } from "motion/react";
import { cn } from "@/utils/cn";

type Tab = {
  title: string;
  value: string;
  content?: string | React.ReactNode;
};

export const Tabs = ({
  tabs: propTabs,
  containerClassName,
  activeTabClassName,
  tabClassName,
  contentClassName,
}: {
  tabs: Tab[];
  containerClassName?: string;
  activeTabClassName?: string;
  tabClassName?: string;
  contentClassName?: string;
}) => {
  const [active, setActive] = useState<Tab>(propTabs[0]);
  const [tabs, setTabs] = useState<Tab[]>(propTabs);

  const moveSelectedTabToTop = (idx: number) => {
    const newTabs = [...propTabs];
    const [selected] = newTabs.splice(idx, 1);
    newTabs.unshift(selected);
    setTabs(newTabs);
    setActive(newTabs[0]);
  };

  const [hovering, setHovering] = useState(false);

  return (
    <>
      <div
        className={cn(
          "flex flex-row items-center justify-start md:justify-center [perspective:1000px] relative overflow-x-auto sm:overflow-visible no-visible-scrollbar max-w-full w-full px-2 sm:px-0",
          containerClassName
        )}
      >
        {propTabs.map((tab, idx) => (
          <button
            key={tab.title}
            onClick={() => moveSelectedTabToTop(idx)}
            onMouseEnter={() => setHovering(true)}
            onMouseLeave={() => setHovering(false)}
            className={cn("relative px-4 py-2 rounded-xl group", tabClassName)}
            style={{ transformStyle: "preserve-3d" }}
          >
            {active.value === tab.value && (
              <motion.div
                layoutId="clickedbutton"
                transition={{ type: "spring", bounce: 0.3, duration: 0.6 }}
                className={cn(
                  "absolute inset-0 bg-white dark:bg-[#18162a] rounded-xl",
                  activeTabClassName
                )}
              />
            )}

            <span className="relative block text-black dark:text-white">
              {tab.title}
            </span>

            {/* Underline lamp hover effect */}
            <span
              className={cn(
                "absolute bottom-0 left-0 right-0 mx-auto h-px w-1/2",
                "bg-gradient-to-r from-transparent via-[#9e4ae5] to-transparent",
                "origin-center transform transition-transform duration-300",
                // Si es el tab activo, permanece desplegada
                active.value === tab.value ? "scale-x-100" : "scale-x-0",
                // También aparece al hover
                "group-hover:scale-x-100"
              )}
            />
          </button>
        ))}
      </div>

      <div className="mt-20 w-full max-w-full sm:max-w-[600px] px-2 mx-auto">
        <FadeInDiv
          tabs={tabs}
          active={active}
          key={active.value}
          hovering={hovering}
          className={cn("relative w-full min-h-[120px]", contentClassName)}
        />
      </div>
    </>
  );
};

export const FadeInDiv = ({
  className,
  tabs,
  hovering,
}: {
  className?: string;
  key?: string;
  tabs: Tab[];
  active: Tab;
  hovering?: boolean;
}) => {
  const isActive = (tab: Tab) => tab.value === tabs[0].value;
  return (
    <div className={cn(className)}>
      {tabs.map((tab, idx) => (
        <motion.div
          key={tab.value}
          layoutId={tab.value}
          style={{
            scale: 1 - idx * 0.1,
            top: hovering ? idx * -50 : 0,
            zIndex: -idx,
            opacity: idx < 3 ? 1 - idx * 0.1 : 0,
          }}
          animate={{ y: isActive(tab) ? [0, 40, 0] : 0 }}
          className="absolute inset-0"
        >
          {tab.content}
        </motion.div>
      ))}
    </div>
  );
};
