import { motion } from "motion/react";
import { ReactNode } from "react";

interface AnimatedSectionProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  style?: React.CSSProperties;
  id?: string;
}

/**
 * During the build-time prerender there is no viewport, so `whileInView` never
 * fires and the `initial` state would be baked into the static HTML as
 * opacity: 0 — content a crawler could reasonably read as hidden text. Skipping
 * `initial` on the server ships the content fully visible; the browser still
 * animates on hydration.
 */
const isServer = typeof window === "undefined";

export function AnimatedSection({ children, className, delay = 0, style, id }: AnimatedSectionProps) {
  return (
    <motion.div
      id={id}
      initial={isServer ? false : { opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.7, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}

export function StaggerChild({ children, className, delay = 0, style }: AnimatedSectionProps) {
  return (
    <motion.div
      initial={isServer ? false : { opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay, ease: "easeOut" }}
      className={className}
      style={style}
    >
      {children}
    </motion.div>
  );
}
