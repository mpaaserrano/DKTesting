import "./Socials.css";

/* icons */
const Instagram = "/assets/socials/instagram.png";
const Facebook = "/assets/socials/facebook.png";
const Linkedin = "/assets/socials/linkedin.png";

const Socials = () => {
  return (
    <div className="socials">
      <a href="https://instagram.com" target="_blank" rel="noreferrer">
        <img src={Instagram} alt="Instagram" />
      </a>

      <a href="https://facebook.com" target="_blank" rel="noreferrer">
        <img src={Facebook} alt="Facebook" />
      </a>

      <a href="https://linkedin.com" target="_blank" rel="noreferrer">
        <img src={Linkedin} alt="LinkedIn" />
      </a>
    </div>
  );
};

export default Socials;
