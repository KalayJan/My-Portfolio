import {motion} from 'framer-motion'
import './Navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <div className='navbar'>
        <Sidebar/>
        <div className="wrapper">
            <motion.span initial={{opacity: 0, scale: 0.5}} animate={{opacity: 1, scale: 1}} transition={{duration: 0.5}}>Cly John</motion.span>
            <div className='social'>
                <a href="https://www.facebook.com/Elijahqt06"><img src="/facebook.png" alt="" /></a>
                <a href="https://www.instagram.com/saging.tund4n/"><img src="/instagram.png" alt="" /></a>
                <a href="https://www.linkedin.com/in/cly-john-caracut-680833266/"><img src="/linkedin.png" alt="" /></a>
                
            </div>
        </div>
      
    </div>
  )
}

export default Navbar
