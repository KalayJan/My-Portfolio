import './Services.scss';
import {animate, motion} from 'framer-motion';



const variant= {
    initial: {
        x:-500,
        y:100,
        opacity: 0
    },
    animate: {
        x: 0,
        opacity: 1, 
        y: 0,
        transition:{
            duration: 1,
            staggerChildren: 0.1,

        }
    }
}


const Services = () => {
  return (
    <motion.div 
    className='services' 
    variants={variant} 
    initial='initial' 
    whileInView="animate">
        <motion.div className="textContainer" variants={variant}>
            <motion.p>I focus on helping your company
                <br /> grow and be extraordinary</motion.p>
            <hr />
        </motion.div>
        <motion.div className="titleContainer" variants={variant}>
            <div className="title">
            <img src="/title.png" alt="" />
            <h1>
                <motion.b whileHover={{color: "rgb(212, 91, 21)"}}>Unique</motion.b>  Ideas
            </h1>
            </div>
            <div className="title">
            <h1>
                <motion.b whileHover={{color: "rgb(212, 91, 21)"}}>For Your</motion.b>  Business.
            </h1>
            <button>WHAT I DO?</button>
            </div>
            
        </motion.div>
        <motion.div className="listContainer" variants={variant}>
            <motion.div className="box" whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in dolore cumque 
                sequi repellendus quas molestias quaerat nobis consectetur quibusdam ad doloribus velit facere 
                tempore voluptatem possimus officia? Reprehenderit, quidem.
                </p>
                    <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in dolore cumque 
                sequi repellendus quas molestias quaerat nobis consectetur quibusdam ad doloribus velit facere 
                tempore voluptatem possimus officia? Reprehenderit, quidem.
                </p>
                    <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in dolore cumque 
                sequi repellendus quas molestias quaerat nobis consectetur quibusdam ad doloribus velit facere 
                tempore voluptatem possimus officia? Reprehenderit, quidem.
                </p>
                    <button>Go</button>
            </motion.div>
            <motion.div className="box" whileHover={{background: 'lightgray', color: 'black'}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, in dolore cumque 
                sequi repellendus quas molestias quaerat nobis consectetur quibusdam ad doloribus velit facere 
                tempore voluptatem possimus officia? Reprehenderit, quidem.
                </p>
                    <button>Go</button>
            </motion.div>
        </motion.div>
      
    </motion.div>
  )
}

export default Services
