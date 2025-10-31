import { Link } from "react-router-dom";

export default function BookCard({ book }) {
  const { id, title, author } = book;
  return (
    <div style={{
      border: "1px solid #e5e7eb",
      borderRadius: 8,
      padding: 16,
      margin: 12,
      maxWidth: 420,
      boxShadow: "0 1px 2px rgba(0,0,0,0.06)",
      transition: "transform 120ms ease, box-shadow 120ms ease"
    }}
      onMouseEnter={e => { e.currentTarget.style.transform = "translateY(-2px)"; e.currentTarget.style.boxShadow = "0 6px 12px rgba(0,0,0,0.08)"; }}
      onMouseLeave={e => { e.currentTarget.style.transform = "translateY(0)"; e.currentTarget.style.boxShadow = "0 1px 2px rgba(0,0,0,0.06)"; }}
    >
      <h3 style={{ margin: "0 0 6px" }}>
        <Link to={`/book/${id}`}>{title}</Link>
      </h3>
      <p style={{ margin: 0, color: "#374151" }}>
        by <Link to={`/book/${id}`}>{author}</Link>
      </p>
    </div>
  );
}


