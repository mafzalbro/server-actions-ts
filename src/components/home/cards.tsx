"use client";

import { motion } from "framer-motion";

const CardSection = () => {
  return (
    <section className="mt-12 text-center py-12">
      <h2 className="text-3xl font-bold">Demo Cards</h2>
      <motion.div
        className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: { opacity: 1, transition: { staggerChildren: 0.3 } },
        }}
      >
        {["Feature One", "Feature Two", "Feature Three"].map(
          (feature, index) => (
            <motion.div
              key={index}
              className="border p-6 rounded-lg shadow-lg"
              whileHover={{ scale: 1.05 }}
              variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            >
              <h3 className="text-lg font-semibold">{feature}</h3>
              <p className="mt-2">
                This is a brief description of {feature}. It highlights the key
                benefits and details.
              </p>
            </motion.div>
          )
        )}
      </motion.div>
    </section>
  );
};

export default CardSection;
