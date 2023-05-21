import Header from "@/components/Header/Header";
import Mainn from "@/components/Main/Mainn";
import Footer from "@/components/footer/Footer";
import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>firefoamwaning</title>
      </Head>
      <header className="w-full">
        <div className="w-full flex justify-center items-center px-[7vw] fixed top-0">
          <div className="w-full">
            <Header />
          </div>
        </div>
      </header>

      <main className="flex justify-center items-center w-full">
        <div className="w-full px-[7vw]">
          <Mainn />
        </div>
      </main>

      <footer className="flex justify-center items-center w-full">
        <Footer />
      </footer>
    </>
  );
}
