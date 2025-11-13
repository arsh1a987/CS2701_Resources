export default function Header({ img = {} }) {
  const { src = "/favicon.png", alt = "Header image" } = img;

  return (
    <header
      style={{
        textAlign: "center",
        margin: "auto",
        width: "100%",
      }}
    >
      <img
        src={src}
        alt={alt}
        style={{
          height: "200px",
          width: "100%",
          objectFit: "contain",
          objectPosition: "center",
        }}
      />
    </header>
  );
}
