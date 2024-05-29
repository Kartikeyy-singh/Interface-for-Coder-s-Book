import Banner from "@/app/(Home)/component/Banner";
import Image from "next/image";
import BookList from "./component/BookList";

export default async function Home() {


  return (
    <>
      <Banner />
      
      <BookList/>
    </>
  );
}
