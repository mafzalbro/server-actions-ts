"use client";

import { motion } from "framer-motion";
import { Button } from "../ui/button";
const BlogSection = () => {
  return (
    <section className="mt-16 py-12">
      <h2 className="text-3xl font-bold text-center">
        Latest Blog Posts
      </h2>
      <motion.div
        className="mt-8 grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0 },
          visible: {
            opacity: 1,
            transition: { staggerChildren: 0.4, delayChildren: 0.2 },
          },
        }}
      >
        {[1, 2, 3].map((post, index) => (
          <motion.div
            key={index}
            className="border p-4 rounded-lg shadow-lg"
            whileHover={{ scale: 1.1 }}
            variants={{ hidden: { opacity: 0 }, visible: { opacity: 1 } }}
            transition={{ duration: 0.5 }}
          >
            <h3 className="text-xl font-semibold">Blog Post {post}</h3>
            <p className="mt-2">
              This is a short excerpt of blog post {post}. It introduces the
              topic and invites the user to read more.
            </p>
            <Button className="mt-4">Read More</Button>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};

export default BlogSection;
