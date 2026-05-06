import { Booking } from "./components/booking";
import { Footer } from "./components/footer";
import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { Packages } from "./components/packages";
import { Process } from "./components/process";
import { Services } from "./components/services";
import { Shop } from "./components/shop";

export default function Home() {
  return (
    <>
      <Header />
      <main id="home">
        <Hero />
        <Services />
        <Packages />
        <Process />
        <Shop />
        <Booking />
      </main>
      <Footer />
    </>
  );
}
