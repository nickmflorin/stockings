"use client";
import { motion, AnimatePresence } from "framer-motion";

export interface LayoutDrawerProps {
  readonly children?: JSX.Element | null;
}

export const LayoutDrawer = ({ children }: LayoutDrawerProps) => (
  <AnimatePresence>
    {children && (
      <motion.div
        transition={{ type: "spring", bounce: 0 }}
        className="drawer-wrapper"
        initial={{ x: "100%" }}
        animate={{ x: 0 }}
        exit={{ x: "100%" }}
      >
        {children}
      </motion.div>
    )}
  </AnimatePresence>
);

export default LayoutDrawer;
