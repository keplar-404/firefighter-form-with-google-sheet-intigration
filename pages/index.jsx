import Header from "@/components/Header/Header";
import Mainn from "@/components/Main/Mainn";
import Footer from "@/components/footer/Footer";

export default function Home() {
  return (
    <>
      <header>
        <div className="w-full px-[7vw] fixed top-0">
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
