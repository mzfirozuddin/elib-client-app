import Banner from "@/app/(home)/components/Banner";
import BookList from "./components/BookList";
import { Suspense } from "react";
import Loading from "@/components/Loading";

//: In next js 14 page.tsx and layout.tsx are by default server component
export default async function Home() {
  return (
    <>
      <Banner />
      {/* here we use component streaming */}
      <Suspense fallback={<Loading />}>
        <BookList />
      </Suspense>
    </>
  );
}
