import Header from "@/components/Header/Header";
import Mainn from "@/components/Main/Mainn";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <div className="w-full px-[7vw] fixed top-0">
          {/* <div className="w-full h-5 sm:bg-green-400 md:bg-amber-300 lg:bg-gray-500 xl:bg-orange-600 2xl:bg-purple-700"></div> */}
          <Header />
        </div>
      </header>

      <main>
        <div className="w-full px-[7vw]">
            <Mainn />
        </div>
      </main>

      <footer>
        <Footer />
      </footer>
    </>
  );
}
