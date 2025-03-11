import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import "./LMCExpand.css";

const LMCExpand = () => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div className="container">
      <motion.h1 
        className="lmc"
        onClick={() => setExpanded(!expanded)}
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
      >
        LMC
      </motion.h1>

      <AnimatePresence>
        {expanded && (
          <div className="expanded-container">
            {["L", "M", "C"].map((letter, index) => (
              <motion.div
                key={letter}
                initial={{ opacity: 0, y: -20, scale: 1 }}
                animate={{ opacity: 1, y: 0, scale: 1.2 }}
                exit={{ opacity: 0, y: -20, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="letter-container"
              >
                <motion.span className="letter">{letter}</motion.span>
                <motion.span
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -10 }}
                  transition={{ duration: 0.5, delay: 0.4 + index * 0.2 }}
                  className="word"
                >
                  {letter === "L" ? "earning" : letter === "M" ? "anagement" : "enter"}
                </motion.span>
              </motion.div>
            ))}
          </div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LMCExpand;
