import {
  faGithub,
  faLinkedin,
  faWhatsapp,
} from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-regular-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function Footer({ isEnglish }: { isEnglish: boolean }) {
  return (
    <footer>
      <div className="flex flex-col gap-4 md:flex-row justify-evenly items-center p-4 bg-gray-800 text-white">
        <p className="text-xl">{isEnglish ? "© 2024 - Created by Mateus Ceci" : "© 2024 - Criado por Mateus Ceci" }</p>
        <div className="flex flex-col items-center gap-2">
          <h2 className="text-xl">{isEnglish ? "Contact" : "Contato"}</h2>
          <div className="flex gap-12">
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
      </div>
    </footer>
  );
}
