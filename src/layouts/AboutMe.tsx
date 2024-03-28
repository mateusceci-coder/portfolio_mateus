import { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

export default function AboutMe({ isEnglish }: { isEnglish: boolean }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.5 }
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

  // Variantes de animação para o Framer Motion
  const variants = {
    visible: { opacity: 1, x: 0, transition: { type: "spring", duration: 3 } },
    hidden: { opacity: 0, x: 0 },
  };

  return (
    <section
      ref={ref}
      className="flex gap-2 flex-col p-4 text-center items-center justify-center dark:text-white max-w-[768px] mx-auto mb-20"
    >
      <h1 className="font-playfair text-3xl dark:text-white text-center mb-4">
        {isEnglish ? "About me" : "Sobre Mim"}
      </h1>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        <p className="text-xl">
          {isEnglish
            ? "Hello, I am a 27-year-old technology and innovation enthusiast, finding my true passion at the intersection of solving complex problems and creating innovative solutions through programming. My journey began at the Federal University of Santa Catarina (UFSC), where I graduated in Food Engineering in 2023. This experience taught me the importance of approaching challenges with an open mind and a creative perspective, skills that I consider crucial in the world of software development."
            : " Olá, sou um entusiasta de tecnologia e inovação com 27 anos, encontrando minha verdadeira paixão na intersecção entre resolver problemas complexos e criar soluções inovadoras através da programação. Minha jornada começou na Universidade Federal de Santa Catarina (UFSC), onde me formei em Engenharia de Alimentos em 2023. Esta experiência me ensinou a importância de abordar desafios com uma mente aberta e uma perspectiva criativa, habilidades que considero cruciais no mundo do desenvolvimento de software."}
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        <p className="text-xl">
          {isEnglish
            ? "Although my original training was not directly linked to technology, I have always been fascinated by the power of programming and the impact it can have on our lives. This led me to a bold decision: to dive headfirst into the world of software development, which led me to start programming studies in August 2023, dedicating my time to learning and enhancing my skills in various programming languages and frameworks, with the goal of becoming a competent full-stack developer. Since March 2024, I have been pursuing a degree in Systems Analysis and Development at UNESC, to have a solid foundation in computing."
            : "Embora minha formação original não estivesse diretamente ligada à tecnologia, sempre fui fascinado pelo poder da programação e pelo impacto que ela pode ter em nossas vidas. Isso me levou a uma decisão audaciosa: mergulhar de cabeça no mundo do desenvolvimento de software, o que me levou a começar os estudos de programação em agosto de 2023, dedicando meu tempo a aprender e aprimorar minhas habilidades em várias linguagens de programação e frameworks, com o objetivo de me tornar um desenvolvedor full-stack competente. Desde março de 2024, estou cursando Análise e Desenvolvimento de Sistemas pela UNESC,  para ter uma base sólida em computação."}
        </p>
      </motion.div>
      <motion.div
        initial="hidden"
        animate={isVisible ? "visible" : "hidden"}
        variants={variants}
      >
        <p className="text-xl">
          {isEnglish
            ? "If you are looking for someone dedicated, innovative, and ready to tackle the challenges of the future of technology, let's talk!"
            : "Se você está procurando alguém dedicado, inovador e pronto para enfrentar os desafios do futuro da tecnologia, vamos conversar!"}
        </p>
      </motion.div>
    </section>
  );
}
