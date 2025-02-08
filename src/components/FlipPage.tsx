import React from "react";

interface FlipPageProps {
  title?: string;
  content?: string;
  imageUrl?: string;
  backgroundColor?: string;
  decorations?: { image: string; style: React.CSSProperties }[]; // Tambahkan decorations
}

const FlipPage: React.FC<FlipPageProps> = ({
  title,
  content,
  imageUrl,
  backgroundColor = "#ffffff",
  decorations = []
}) => {
  return (
    <div
      className="page"
      style={{
        backgroundColor,
        position: "relative"
      }}
    >
      {/* Dekorasi */}
      {decorations.map((decoration, index) => (
        <img
          key={index}
          src={decoration.image}
          alt="Dekorasi"
          style={{
            position: "absolute",
            ...decoration.style
          }}
        />
      ))}

      {/* Konten Halaman */}
      {imageUrl && (
        <img src={imageUrl} alt={title || "Page"} className="page-image" />
      )}
      {title && <h2 className="page-title">{title}</h2>}
      {content && <p className="page-content">{content}</p>}
    </div>
  );
};

export default FlipPage;
