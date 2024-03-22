import { faGithub, faLinkedin, faWhatsapp } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Home({isEnglish} : {isEnglish: boolean}) {
  return (
    <div className="flex flex-col justify-center items-center gap-2 mb-10">
      <h1 className="text-5xl font-playfair font-700 dark:text-white mb-4">Mateus Ceci</h1>
      <p className="text-center dark:text-white">{isEnglish ? "Turning complex ideas into digital reality.": "Transformando ideias complexas em realidade digital."}</p>
      <img src="src/images/perfil.png" alt="perfil photo" className="rounded-full" width={200} />
      <h2 className="text-2xl text-gray-400">{isEnglish ? "Full Stack Developer" : "Desenvolvedor Full Stack"}</h2>
      <div className="grid grid-cols-4 gap-8">
        <FontAwesomeIcon className="hover:cursor-pointer" icon={faGithub} size="2xl" style={{color: "#B197FC",}} />
        <FontAwesomeIcon className="hover:cursor-pointer" icon={faEnvelope} size="2xl" style={{color: "#B197FC",}} />
        <FontAwesomeIcon className="hover:cursor-pointer" icon={faWhatsapp} size="2xl" style={{color: "#0fd712",}} />
        <FontAwesomeIcon className="hover:cursor-pointer" icon={faLinkedin} size="2xl" style={{color: "#694ac4",}} />
      </div>
    </div>
  )
}
