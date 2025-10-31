import { HashRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import BookList from "./BookList.jsx";
import BookDetail from "./BookDetail.jsx";

export default function App() {
  const [books] = useState([
    { id: 1, title: "1984", author: "George Orwell", desc: "Dystopian novel", rating: 4.8 },
    { id: 2, title: "The Alchemist", author: "Paulo Coelho", desc: "Philosophical story", rating: 4.6 },
    { id: 3, title: "Pride and Prejudice", author: "Jane Austen", desc: "Classic romance", rating: 4.7 },
  ]);

  return (
    <Router>
      <Routes>
        <Route path="/" element={<BookList books={books} />} />
        <Route path="/book/:id" element={<BookDetail books={books} />} />
      </Routes>
    </Router>
  );
}
