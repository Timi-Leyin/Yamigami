import { motion } from "framer-motion";

const PageWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 90 }} // Starts slightly lower and invisible
      animate={{ opacity: 1, y: 0 }} // Slides up and fades in
      exit={{ opacity: 0, y: -10 }} // Fades out and slides up when leaving
      transition={{ duration: 1.5, ease: "easeOut" }}
    >
      {children}
    </motion.div>
  );
};
export default PageWrapper;