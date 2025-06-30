import logo from '../assets/logo.webp'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

function Navbar() {
  return (
    <nav className='flex items-center justify-between p-6'>

      <div className='flex flex-shrink-0 items-center'>
        <a href="/" aria-label='Home'><img src={logo} className='mx-2' width={50} height={33} /></a>
      </div>

      <div className='m-8 flex items-center justify-center gap-6 text-2xl'>
        <a href="http://www.linkedin.com/in/smera-sabu-5b01a9243" target='_blank' rel='noopener noreferrer'>
          <FaLinkedin /></a>

        <a href="https://github.com/Smera820" target='_blank' rel='noopener noreferrer'><FaGithub /></a>

      </div>
    </nav>
  )
}

export default Navbar