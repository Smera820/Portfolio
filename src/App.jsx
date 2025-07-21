import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Technology from './components/Technology';
import Projects from './components/Projects';
import Contact from './components/Contact';


function App() {
  return (
    <div className=' overflow-x-hidden text-white antialiased'>
      <div className='relative'>

        <div className="relative min-h-screen w-full bg-cover bg-center bg-no-repeat bg-[url('assets/bg.jpg')]">
          {/* <div className="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]">
            </div> */}
              <div className="absolute inset-0 bg-black/60"></div>
          
        <div className=' mx-auto px-4 relative z-10'>
          <Navbar />
          <Hero />
          <Technology />
          <Projects />
          <Contact />
        </div>
</div>
      </div>
    </div>
  )
}

export default App