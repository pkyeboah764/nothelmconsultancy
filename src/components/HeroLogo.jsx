import { getImageUrl } from "../utils/imageConfig";

export default function HeroLogo() {
  return (
    <a
      href="/"
      className="block relative z-10"
      style={{
        width: "250px",
        height: "250px",
      }}
    >
      <img
        src={getImageUrl("images/logo.png")}
        alt="Nothelm Logo"
        style={{
          width: "250px",
          height: "250px",
          objectFit: "contain",
          display: "block",
        }}
      />
    </a>
  );
}
