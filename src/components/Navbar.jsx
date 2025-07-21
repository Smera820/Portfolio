import logo from '../assets/ss.png'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex items-center justify-between p-4'>

      <div className='flex flex-shrink-0 items-center '>
        <a href="/" aria-label='Home'><img src={logo} className='mx-2 w-20 h-20 ' /></a>
      </div>

      <div className='m-8 flex items-center justify-center gap-6 text-2xl '>
        <a href="http://www.linkedin.com/in/smera-sabu-5b01a9243" target='_blank' rel='noopener noreferrer' className='hover:scale-105 transition-transform duration-300'>
          <FaLinkedin /></a>

        <a href="https://github.com/Smera820" target='_blank' rel='noopener noreferrer' className='hover:scale-105 transition-transform duration-300'>
          <FaGithub /></a>

      </div>
    </nav>
  )
}

export default Navbar