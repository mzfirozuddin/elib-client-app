import { Book } from "@/types";
import React from "react";
import BookCard from "./BookCard";

const BookList = async () => {
  // Data fetching //: here we use component streaming
  const response = await fetch(`${process.env.BACKEND_URL}/books`, {
    cache: "no-store",
  });
  if (!response.ok) {
    throw new Error("An error occurred while fetching the books!");
  }

  const books = await response.json();
  // console.log(books);
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-1 gap-8 md:grid-cols-3">
      {books.map((book: Book) => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
