// WhatsAppButton.jsx
import React, { useContext } from "react";
import { LangContext } from "../../context/LangContext";

const WhatsAppButton = () => {
  const {lang} = useContext(LangContext)
  const link = `https://wa.me/5581986236056?text=${lang === 'us'?'Hello, I want a website.':'Olá, eu quero um site'}`;

  const style = {
    position: "fixed",
    bottom: "20px",
    right: "20px",
    backgroundColor: "#25D366",
    borderRadius: "50%",
    width: "60px",
    height: "60px",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    boxShadow: "0 2px 5px rgba(0,0,0,0.3)",
    cursor: "pointer",
    zIndex: 1000,
    textDecoration: "none"
  };

  const svgStyle = {
    width: "32px",
    height: "32px",
    fill: "white"
  };

  return (
    <a
      href={link}
      style={style}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Chat on WhatsApp"
    >
      <svg
        style={svgStyle}
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 32 32"
      >
        <path d="M16 0C7.163 0 0 7.163 0 16c0 2.828.739 5.47 2.016 7.797L0 32l8.398-2.016A15.93 15.93 0 0016 32c8.837 0 16-7.163 16-16S24.837 0 16 0zm0 29.333c-2.699 0-5.244-.719-7.474-1.968l-.533-.312-4.982 1.195 1.218-4.895-.312-.529A13.283 13.283 0 012.667 16c0-7.357 5.976-13.333 13.333-13.333S29.333 8.643 29.333 16 23.357 29.333 16 29.333zm7.381-9.916c-.206-.103-1.218-.604-1.406-.672-.188-.072-.325-.103-.462.103-.138.206-.533.672-.653.809-.12.138-.241.155-.447.052-.206-.103-.869-.32-1.655-1.017-.612-.544-1.024-1.217-1.145-1.423-.12-.206-.013-.317.092-.419.094-.094.206-.241.309-.361.103-.12.138-.206.206-.345.069-.138.034-.258-.017-.361-.052-.103-.462-1.111-.632-1.519-.166-.403-.337-.348-.462-.354l-.395-.007c-.138 0-.361.052-.551.258s-.721.704-.721 1.718.738 1.991.841 2.127c.103.138 1.454 2.223 3.52 3.114.492.212.874.338 1.172.433.492.155.941.133 1.295.081.396-.055 1.218-.498 1.391-.977.172-.479.172-.891.12-.977-.052-.086-.188-.138-.394-.241z" />
      </svg>
    </a>
  );
};

export default WhatsAppButton;
