import { useState, useEffect, useRef } from "react";

export default function Learn() {
  const [books, setBooks] = useState(0);
  // const books = useRef(10);

  useEffect(() => {
    async function upgradeBooks() {
      const response = await fetch("/api/booksUpdate", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ booksNumber: books }),
      });

      const data = await response.json();

      console.log(data.message);
    }

    if (books !== 0) {
      upgradeBooks();
    }
  }, [books]);

  function upgradeBooks() {
    // setBooks(books + 1);
    setBooks((prev) => prev + 1);
    // books.current += 1;
    // console.log(books.current);
  }

  return (
    <div>
      <p>Book: {books}</p>
      <button onClick={upgradeBooks}>+1 Book</button>
    </div>
  );
}
