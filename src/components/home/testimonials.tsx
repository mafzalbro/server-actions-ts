"use client";

import { motion } from "framer-motion";

const Testimonials = () => {
  return (
    <section className="mt-16 py-12">
      <h2 className="text-3xl font-bold text-center">
        What Our Users Say
      </h2>
      <div className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-3">
        {["John Doe", "Jane Smith", "Bob Johnson"].map((name, index) => (
          <motion.div
            key={index}
            className="p-6 rounded-lg shadow-lg text-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 * index, duration: 0.5 }}
          >
            <p className="text-lg italic">
              This service has completely transformed my workflow!
            </p>
            <p className="mt-4 text-sm">- {name}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Testimonials;
