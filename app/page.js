import Image from 'next/image'
import Hero from './Pages/Hero'
import Product from './Pages/productSection'

export default function Home() {
  return (
    <main>
      <Hero  />
      <Product />
    </main>
  )
}
