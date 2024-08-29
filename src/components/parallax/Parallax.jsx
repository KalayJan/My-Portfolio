import { useRef } from "react";
import "./Parallax.scss";
import {motion, useScroll, useTransform} from "framer-motion";

const Parallax = ({type}) => {

  const ref = useRef()

  const {scrollYProgress} = useScroll({
    target:ref,
    offset:["start start", "end start"]
  })

  const yText=useTransform(scrollYProgress, [0, 1], ["0%", "500%"])
  const yBg=useTransform(scrollYProgress, [0, 1], ["0%", "100%"])

  return (
    <div className="parallax" 
    ref={ref}
    style={{
      background:type==="services"
        ? "linear-gradient(180deg, rgba(12, 3, 1, 0.914), rgba(81, 38, 28, 0.914))" 
        : "linear-gradient(180deg, rgba(12, 3, 1, 0.914), rgba(50, 18, 8, 0.914))", }}>
        <motion.h1 style={{y:yText}}>
          {type==="services" ? "What I do?" : "What I did?"}
          </motion.h1>
            <motion.div className="mountains">
            <motion.img 
              src={`${process.env.PUBLIC_URL}/mountains.png`} 
              alt="Mountains"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                width: '100%',
                height: '100vh',
                position: 'absolute',
                zIndex:3, 
              }}
          />    
              </motion.div>
    <motion.div className="planets" style={{y:yBg}}>
      <motion.img 
              src={`${process.env.PUBLIC_URL}/planets.png`} 
              alt="Planets"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                width: '100%',
                height: '100%',
                position: 'absolute'
              }}
          />  
    </motion.div>
        <motion.div className="stars" style={{x:yBg}}>
        <motion.img 
              src={`${process.env.PUBLIC_URL}/stars.png`} 
              alt="Stars"
              style={{
                backgroundSize: 'cover',
                backgroundPosition: 'bottom',
                width: '100%',
                height: '100%',
                position: 'absolute'
              }}
          />  
        </motion.div>
    </div>
  );
};

export default Parallax
