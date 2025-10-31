import BookCard from "./BookCard.jsx";

export default function BookList({ books }) {
  return (
    <div style={{ textAlign: "center", padding: 20 }}>
      <h2 style={{ marginBottom: 12 }}>Book Explorer</h2>
      <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap" }}>
        {books.map((book) => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
}
