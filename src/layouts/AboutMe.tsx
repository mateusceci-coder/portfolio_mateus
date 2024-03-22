
export default function AboutMe({isEnglish}: {isEnglish: boolean}) {
  return (
    <div className="flex gap-2 flex-col p-4 text-center items-center justify-center dark:text-white max-w-[768px] mx-auto">
        <h1 className="font-playfair text-2xl dark:text-white text-center mb-4">{isEnglish ? "About me": "Sobre Mim"}</h1>
        <p>
            {isEnglish ? "Hello, I am a 27-year-old technology and innovation enthusiast, finding my true passion at the intersection of solving complex problems and creating innovative solutions through programming. My journey began at the Federal University of Santa Catarina (UFSC), where I graduated in Food Engineering in 2023. This experience taught me the importance of approaching challenges with an open mind and a creative perspective, skills that I consider crucial in the world of software development." : " Olá, sou um entusiasta de tecnologia e inovação com 27 anos, encontrando minha verdadeira paixão na intersecção entre resolver problemas complexos e criar soluções inovadoras através da programação. Minha jornada começou na Universidade Federal de Santa Catarina (UFSC), onde me formei em Engenharia de Alimentos em 2023. Esta experiência me ensinou a importância de abordar desafios com uma mente aberta e uma perspectiva criativa, habilidades que considero cruciais no mundo do desenvolvimento de software."}
        </p>
        <p>
            {isEnglish ? "Although my original background was not directly linked to technology, I have always been fascinated by the power of programming and the impact it can have on our lives. This led me to a bold decision: to dive headfirst into the world of software development. Since then, I have dedicated my time to learning and enhancing my skills in various programming languages and frameworks, aiming to become a competent full-stack developer." : "Embora minha formação original não estivesse diretamente ligada à tecnologia, sempre fui fascinado pelo poder da programação e pelo impacto que ela pode ter em nossas vidas. Isso me levou a uma decisão audaciosa: mergulhar de cabeça no mundo do desenvolvimento de software. Desde então, tenho dedicado meu tempo a aprender e aprimorar minhas habilidades em várias linguagens de programação e frameworks, com o objetivo de me tornar um desenvolvedor full-stack competente."}
            
        </p>
        <p>
            {isEnglish ? "If you are looking for someone dedicated, innovative, and ready to tackle the challenges of the future of technology, let's talk!" : "Se você está procurando alguém dedicado, inovador e pronto para enfrentar os desafios do futuro da tecnologia, vamos conversar!"}
        </p>
    </div>
  )
}
