import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

export default function Projects({ isEnglish }: { isEnglish: boolean }) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !hasAnimated) {
          setIsVisible(true);
          setHasAnimated(true); // Atualiza para garantir que a animação aconteça apenas uma vez
        }
      },
      {
        threshold: 0.2,
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
  }, [hasAnimated]);

  const containerVariants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        when: "beforeChildren",
        staggerChildren: 0.7,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 0 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <section ref={ref} className="mb-10">
      <h1 className="text-center text-3xl font-playfair dark:text-white p-4">
        {isEnglish ? "Main Projects" : "Projetos Principais"}
      </h1>
      <motion.ul
        variants={containerVariants}
        initial="hidden"
        // Usa isVisible somente se hasAnimated for falso
        animate={hasAnimated ? "visible" : isVisible ? "visible" : "hidden"}
        className="grid lg:grid-cols-2 justify-center gap-5 max-w-5xl mx-auto"
      >
        <motion.li
          className="flex flex-col gap-1 items-center bg-gray-200 rounded-xl p-2"
          variants={itemVariants}
        >
          <h2 className="text-2xl text-center text-yellow-500 font-bold">
            {isEnglish
              ? "Motorhome [DEVELOPING]"
              : "Motorhome [EM DESENVOLVIMENTO]"}
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {isEnglish ? "Description" : "Descrição"}
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <p className="text-base">
                  {isEnglish
                    ? "Website under development, being created for the rental and sale of motorhomes. Each motorhome will have a detailed description, photos, and information about the vehicle. Login can be done through social networks or by creating an account on the website."
                    : "Site em desenvolvimento, sendo criado para aluguel e venda de motorhomes. Cada motorhome terá uma descrição detalhada, fotos e informações sobre o veículo. O login poderá ser feito por meio de redes sociais ou criação da conta no site."}
                </p>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <img
            className="rounded-xl"
            src="/motorhome.png"
            alt="motorhome"
            width={450}
          />
          <ul className="font-bold flex flex-wrap gap-4 justify-center rounded-xl p-2">
            <li className="text-blue-500">React</li>
            <li className="text-blue-800">Typescript</li>
            <li className="text-blue-300">Tailwindcss</li>
            <li className="text-green-500">Django</li>
            <li className="text-sky-600">PostgreSQL</li>
            <li className="text-cyan-950">Docker</li>
          </ul>
        </motion.li>
        <motion.li
          className="flex flex-col items-center gap-1 bg-gray-200 rounded-xl p-2"
          variants={itemVariants}
        >
          <h2 className="text-2xl text-center text-yellow-500 font-bold">
            Fitness App
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {isEnglish ? "Description" : "Descrição"}
              </AccordionTrigger>
              <AccordionContent className="p-2">
                <p className="text-base mb-2">
                  {isEnglish
                    ? "This fitness app has been specially designed to track workouts and record achievements in exercises geared towards bodybuilding and crossfit. During the user profile creation, the app provides the basal metabolic rate and the body mass index. "
                    : "Este aplicativo de fitness foi especialmente projetado para    acompanhar treinamentos e registrar recordes em exercícios voltados ao bodybuilding e ao crossfit. Durante a criação do perfil do usuário, o app fornece a taxa metabólica basal e o índice de massa corporal."}
                </p>

                <a
                  className="text-blue-500 hover:underline text-base"
                  href="https://github.com/mateusceci-coder/fitness_app"
                >
                  GitHub
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a href="https://fitness-app-1.onrender.com">
            <img
              className="rounded-xl"
              src="/fitness.png"
              alt="fitness app"
              width={450}
            />
          </a>
          <ul className="font-bold flex flex-wrap gap-4 justify-center rounded-xl p-2">
            <li className="text-blue-500">React</li>
            <li className="text-blue-800">Typescript</li>
            <li className="text-blue-300">Tailwindcss</li>
            <li className="text-gray-600">Cypress</li>
            <li className="text-green-500">Django</li>
            <li className="text-sky-600">PostgreSQL</li>
          </ul>
        </motion.li>
        <motion.li
          className="flex flex-col gap-1 items-center bg-gray-200 rounded-xl p-2"
          variants={itemVariants}
        >
          <h2 className="text-2xl text-center font-bold text-yellow-500">
            Todo List
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {isEnglish ? "Description" : "Descrição"}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base mb-2">
                  {isEnglish
                    ? "This is an advanced todo list, designed to allow you to easily add titles, task descriptions, and their respective statuses. It offers intuitive functionalities, including the ability to search for tasks by title, the option to delete individual tasks, mark tasks as completed, and the capability to remove all completed tasks at once."
                    : "Esta é uma lista de tarefas avançada, projetada para permitir que você adicione facilmente títulos, descrições de tarefas e seus respectivos status. Ela oferece funcionalidades intuitivas, incluindo a busca de tarefas por título, a opção de deletar tarefas individuais, marcar tarefas como concluídas e a capacidade de remover todas as tarefas já finalizadas de uma só vez."}
                </p>
                <a
                  className="text-blue-500 hover:underline"
                  href="https://github.com/mateusceci-coder/my-todo-list"
                >
                  GitHub
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a href="https://my-todo-list-phi-nine.vercel.app/">
            <img
              className="rounded-xl"
              src="/todo-list.png"
              alt="Todo List"
              width={450}
            />
          </a>
          <ul className="font-bold flex gap-4 justify-center rounded-xl p-2">
            <li className="text-blue-500">React</li>
            <li className="text-blue-800">Typescript</li>
            <li className="text-blue-300">Tailwindcss</li>
          </ul>
        </motion.li>
        <motion.li
          className="flex flex-col gap-1 items-center bg-gray-200 rounded-xl p-1"
          variants={itemVariants}
        >
          <h2 className="text-2xl text-center text-yellow-500 font-bold">
            Disney Plus Clone
          </h2>
          <Accordion type="single" collapsible>
            <AccordionItem value="item-1">
              <AccordionTrigger>
                {isEnglish ? "Description" : "Descrição"}
              </AccordionTrigger>
              <AccordionContent>
                <p className="text-base mb-2">
                  {isEnglish
                    ? "This project is a clone of the Disney Plus website, meticulously developed using HTML, SASS, and JavaScript. It stands out for its responsive nature, ensuring a smooth and adaptable user experience across any screen size."
                    : "Este projeto é um clone do site Disney Plus, meticulosamente desenvolvido utilizando HTML, SASS e JavaScript. Destaca-se por sua natureza responsiva, assegurando uma experiência de usuário fluida e adaptável a qualquer tamanho de tela."}
                </p>
                <a
                  className="text-blue-500 hover:underline text-base"
                  href="https://github.com/mateusceci-coder/clone-disneyplus"
                >
                  GitHub
                </a>
              </AccordionContent>
            </AccordionItem>
          </Accordion>
          <a href="https://clone-disneyplus-psi-rouge.vercel.app">
            <img
              className="rounded-xl"
              src="/disney.png"
              alt="Disney"
              width={450}
            />
          </a>

          <ul className="font-bold flex flex-wrap gap-4 justify-center rounded-xl p-2">
            <li className="text-red-500">HTML</li>
            <li className="text-fuchsia-400">SASS</li>
            <li className="text-yellow-600">Javascript</li>
            <li className="text-red-600">Gulp</li>
          </ul>
        </motion.li>
      </motion.ul>
    </section>
  );
}
