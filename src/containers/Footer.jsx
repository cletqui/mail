import { SiGithub, SiBuymeacoffee } from "react-icons/si";

export const Footer = () => {
  return (
    <footer className="Footer">
      <div>
        <a
          href="https://github.com/cletqui/mail"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiGithub />
        </a>
      </div>

      <div>
        <a
          href="https://www.buymeacoffee.com/cletqui"
          target="_blank"
          rel="noopener noreferrer"
        >
          <SiBuymeacoffee />
        </a>
      </div>
    </footer>
  );
};
