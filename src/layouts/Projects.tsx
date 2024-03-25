export default function Projects({ isEnglish }: { isEnglish: boolean }) {
  return (
    <section className="max-w-full">
      <h1 className="text-center text-3xl font-playfair dark:text-white p-4">
        {isEnglish ? "Main Projects" : "Projetos Principais"}
      </h1>
      <ul className="grid justify-center dark:text-white gap-5">
        <li className="flex flex-col gap-1 bg-gray-500 rounded-xl p-1">
          <h2 className="text-2xl text-center">Fitness App</h2>
          <img
            className="rounded-xl"
            src="src/images/fitness-app.png"
            alt="fitness app"
            width={350}
          />
          <ul className="font-bold flex flex-wrap gap-4 justify-center rounded-xl p-2">
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwindcss</li>
            <li>Cypress</li>
            <li>Django</li>
          </ul>
        </li>
        <li className="flex flex-col gap-1 bg-gray-500 rounded-xl p-1">
          <h2 className="text-2xl text-center">Todo List</h2>
          <img className="rounded-xl" src="src/images/todo-list.png" alt="Todo List" width={350} />
          <ul className="font-bold flex gap-4 justify-center rounded-xl p-2">
            <li>React</li>
            <li>Typescript</li>
            <li>Tailwindcss</li>
          </ul>
        </li>
        <li className="flex flex-col gap-1 bg-gray-500 rounded-xl p-1">
        <h2 className="text-2xl text-center">Todo List</h2>
        <img className="rounded-xl" src="src/images/disney.png" alt="Todo List" width={350} />
        <ul className="font-bold flex flex-wrap gap-4 justify-center rounded-xl p-2">
          <li>HTML</li>
          <li>SASS</li>
          <li>Javascript</li>
          <li>Gulp</li>
        </ul>
        </li>
      </ul>
    </section>
  );
}
