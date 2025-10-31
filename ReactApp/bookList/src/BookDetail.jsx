import { useParams, Link } from "react-router-dom";

export default function BookDetail({ books }) {
  const { id } = useParams();
  const book = books.find(({ id: bookId }) => bookId === Number(id));

  if (!book) {
    return (
      <div style={{ textAlign: "center" }}>
        <h2>Book not found</h2>
        <Link to="/">Back to List</Link>
      </div>
    );
  }

  return (
    <div style={{ textAlign: "center" }}>
      <h2>{book.title}</h2>
      <p><b>Author:</b> {book.author}</p>
      <p><b>Description:</b> {book.desc}</p>
      <p><b>Rating:</b> {book.rating}</p>
      <Link to="/">Back to List</Link>
    </div>
  );
}
