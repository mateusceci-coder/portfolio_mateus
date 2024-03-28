import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function Home({ isEnglish }: { isEnglish: boolean }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      {
        threshold: 0.3, // Ajuste conforme necessário para disparar a animação mais cedo ou mais tarde
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  const variantsTop = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 2 },
    },
    hidden: { x: 0, opacity: 0 },
  };

  const variantsBottom = {
    visible: {
      x: 0,
      opacity: 1,
      transition: { duration: 2, delay: 0.7 },
    },
    hidden: { x: 0, opacity: 0 },
  };

  return (
    <section ref={ref} className="flex flex-col items-center gap-10 h-screen">
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variantsTop}
      >
        <div className="text-center">
          <h1 className="text-5xl font-playfair font-700 dark:text-white mb-4">
            Mateus Ceci
          </h1>
          <p className="dark:text-white text-xl mb-10">
            {isEnglish
              ? "Turning complex ideas into digital reality."
              : "Transformando ideias complexas em realidade digital."}
          </p>
        </div>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variantsBottom}
      >
        <div className="flex flex-col gap-4 items-center">
          <img
            src="/perfil.png"
            alt="perfil photo"
            className="rounded-full w-9/12 md:w-full"
            width={350}
          />
          <h2 className="text-2xl text-gray-400 text-center">
            {isEnglish ? "Full Stack Developer" : "Desenvolvedor Full Stack"}
          </h2>
          <div className="grid grid-cols-4 gap-8">
            <a href="https://github.com/mateusceci-coder">
              <FontAwesomeIcon
                className="hover:cursor-pointer"
                icon={faGithub}
                size="2xl"
                style={{ color: "#B197FC" }}
              />
            </a>
            <a
              href="mailto:mateusceci@gmail.com"
              aria-label="E-mail"
              target="_blank"
            >
              <FontAwesomeIcon
                className="hover:cursor-pointer"
                icon={faEnvelope}
                size="2xl"
                style={{ color: "#B197FC" }}
              />
            </a>
            <a
              href="https://wa.me/5548991820135"
              aria-label="WhatsApp"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon
                className="hover:cursor-pointer"
                icon={faWhatsapp}
                size="2xl"
                style={{ color: "#0fd712" }}
              />
            </a>
            <a href="https://www.linkedin.com/in/mateusceci-coder/">
              <FontAwesomeIcon
                className="hover:cursor-pointer"
                icon={faLinkedin}
                size="2xl"
                style={{ color: "#694ac4" }}
              />
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
