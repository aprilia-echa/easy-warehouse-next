import {
  Navbar,
  Hero,
  Feature,
  Product,  
  Brand,
  Comparison,
  About,
  Faq,
  Footer,
} from '@/app/components'

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <Feature />
      <Product />
      <Brand />
      <Comparison />
      <About />
      <Faq />
      <Footer />
    </>
  )
}