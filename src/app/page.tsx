import Navbar from "@/app/components/navbar";
import Hero from "@/app/components/hero";
import Feature from "@/app/components/feature";
import Product from "@/app/components/product";
import About from "@/app/components/about";
import Faq from "@/app/components/faq";
import Footer from "@/app/components/footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <About />
      <Faq />
      <Footer />
    </>
  );
}