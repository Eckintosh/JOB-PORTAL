import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { useNavigate } from "react-router-dom";

const CareerBanner = () => {
  const navigate = useNavigate();

  return (
    <section className="bg-secondary py-20 text-tertiary md:py-24 lg:py-28">
      <div className="container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="mx-auto max-w-5xl"
        >
          <h2 className="text-4xl font-bold tracking-normal md:text-5xl lg:text-6xl">
            Ready to transform your career?
          </h2>
          <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-tertiary/85 md:text-2xl">
            Join thousands of others who found their professional homes through our
            platform.
          </p>

          <motion.button
            type="button"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            onClick={() => navigate("/signup")}
            className="mx-auto mt-12 inline-flex min-h-16 items-center justify-center gap-3 rounded-lg bg-tertiary px-10 text-xl font-bold text-primary shadow-sm transition-colors hover:bg-primary hover:text-tertiary"
          >
            <span>Get Started Now</span>
            <ArrowRight className="h-6 w-6" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
};

export default CareerBanner;
