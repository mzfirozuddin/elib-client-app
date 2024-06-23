import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";

//: In next js 14 page.tsx and layout.tsx are by default server component
export default async function Home() {
  // Data fetching
  const response = await fetch(`${process.env.BACKEND_URL}/books`)
  if (!response.ok) {
    throw new Error("An error occurred while fetching the books!")
  }

  const books = await response.json()
  // console.log(books);

  return (
    <>
      <Banner />
      <BookList books={books} />
    </>
  );
}
