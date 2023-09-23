import React from "react";
import { motion } from "framer-motion";

const Register = () => {
  return (
    <a href="/register">
      <motion.div
        className="py-4 px-12 bg-primary-button rounded-md"
        whileHover={{
          scale: 1.05,
          transition: { duration: 0.3 },
        }}
        whileTap={{ scale: 0.9 }}
      >
        Register
      </motion.div>
    </a>
  );
};

export default Register;
