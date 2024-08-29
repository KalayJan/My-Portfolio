import { motion, useDeprecatedAnimatedState, useInView } from "framer-motion";
import "./Contacts.scss";
import { useRef, useState } from "react";
import emailjs from '@emailjs/browser';


const variants = {
    initial:{
        y: 500,
        opacity: 0,
    },
    animate:{
        y:0,
        opacity: 1,
        transition:{
            duration:0.5,
            staggerChildren: 0.1, 
        } 
    }
}

const Contacts = () => {

const formRef = useRef()
const [error, setError] = useState(false);
const [success, setSuccess] = useState()

const ref = useRef();

const isInView = useInView(ref,{ margin: "-100px"});

const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_iew7e92', 'template_z96s8yj', formRef.current, {
        publicKey: 'DCXtPU1Eiczr_D-4H',
      })
      .then(
        () => {
          setSuccess(true)
        },
        (error) => {
          setError(true);
        },
      );
  };
  return (
    <motion.div ref={ref} className="contacts" variants={variants} initial="initial" whileInView="animate">
        <motion.div className="textContainer"  variants={variants}>
            <motion.h1 variants={variants}>Let's Work Together</motion.h1>
            <motion.div className="item" variants={variants}>
                <h2>Mail</h2>
                <span>@clyjohn06@gmail.com</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Address</h2>
                <span>asturias,cebu,philippines</span>
            </motion.div>
            <motion.div className="item" variants={variants}>
                <h2>Phone</h2>
                <span>09618847876</span>
            </motion.div>
            </motion.div>
        <motion.div className="formContainer" >
            <motion.div className="phoneSvg" 
                initial={{opacity: 1}} 
                whileInView={{opacity: 0}} 
                transition={{delay: 3, duration: 1}}>
                    
        <svg 
            width="550px" 
            height="550px" 
            viewBox="0 0 32.666 32.666" 
           
            >
        <motion.path  fill="none" 
            strokeWidth={0.2}
            initial={{pathLength: 0}}
            animate={isInView && {pathLength: 1}}
            transition={{duration: 2}}
            opacity="1" d="M15.5562 14.5477L15.1007 15.0272C15.1007 15.0272 14.0181 16.167 11.0631 13.0559C8.10812 9.94484 9.1907 8.80507 9.1907 8.80507L9.47752 8.50311C10.1841 7.75924 10.2507 6.56497 9.63424 5.6931L8.37326 3.90961C7.61028 2.8305 6.13596 2.68795 5.26145 3.60864L3.69185 5.26114C3.25823 5.71766 2.96765 6.30945 3.00289 6.96594C3.09304 8.64546 3.81071 12.259 7.81536 16.4752C12.0621 20.9462 16.0468 21.1239 17.6763 20.9631C18.1917 20.9122 18.6399 20.6343 19.0011 20.254L20.4217 18.7584C21.3806 17.7489 21.1102 16.0182 19.8833 15.312L17.9728 14.2123C17.1672 13.7486 16.1858 13.8848 15.5562 14.5477Z" />
        <motion.path 
            fill="none"
            strokeWidth={0.2}
            initial={{pathLength: 0}}
            animate={isInView && {pathLength: 1}}
            transition={{duration: 2}}
            opacity={1}
            d="M13.2595 1.87983C13.3257 1.47094 13.7122 1.19357 14.1211 1.25976C14.1464 1.26461 14.2279 1.27983 14.2705 1.28933C14.3559 1.30834 14.4749 1.33759 14.6233 1.38082C14.9201 1.46726 15.3347 1.60967 15.8323 1.8378C16.8286 2.29456 18.1544 3.09356 19.5302 4.46936C20.906 5.84516 21.705 7.17097 22.1617 8.16725C22.3899 8.66487 22.5323 9.07947 22.6187 9.37625C22.6619 9.52466 22.6912 9.64369 22.7102 9.72901C22.7197 9.77168 22.7267 9.80594 22.7315 9.83125L22.7373 9.86245C22.8034 10.2713 22.5286 10.6739 22.1197 10.7401C21.712 10.8061 21.3279 10.53 21.2601 10.1231C21.258 10.1121 21.2522 10.0828 21.2461 10.0551C21.2337 9.9997 21.2124 9.91188 21.1786 9.79572C21.1109 9.56339 20.9934 9.21806 20.7982 8.79238C20.4084 7.94207 19.7074 6.76789 18.4695 5.53002C17.2317 4.29216 16.0575 3.59117 15.2072 3.20134C14.7815 3.00618 14.4362 2.88865 14.2038 2.82097C14.0877 2.78714 13.9417 2.75363 13.8863 2.7413C13.4793 2.67347 13.1935 2.28755 13.2595 1.87983Z" />
        <motion.path
            fill="none"
            strokeWidth={0.2}
            initial={{pathLength: 0}}
            animate={isInView && {pathLength: 1}}
            transition={{duration: 2}}
            d="M13.4857 5.3293C13.5995 4.93102 14.0146 4.7004 14.4129 4.81419C14.6802 4.91337 15.0249 5.21694 15.2695 5.21694C15.7589 5.50662 16.4271 5.9878 17.2121 6.77277C17.9971 7.55775 18.4782 8.22593 18.7679 8.7154C19.0715 9.30466 19.1413 9.48173 18.6556 10.4991C18.2607 10.6119 17.8492 10.3862 17.7313 9.99413C17.4771 9.47938 16.8514 8.53339 16.1514 7.83343C15.4515 7.13348 14.8822 6.73078 14.5055 6.50781C14.0893 6.29209 13.9907 6.25352 13.4857 5.3293Z" 
            />
            </svg>
            </motion.div>
            <motion.form  
                ref={formRef}
                onSubmit={sendEmail}
                initial={{opacity: 0}} 
                whileInView={{opacity: 1}} 
                transition={{delay: 4, duration: 1}}>
                    <input type="text" required placeholder="Name" name="name"/>
                    <input type="email" required placeholder="Email" name="email" />
                    <textarea rows={8} placeholder="Message" name="message"/>
                    <button>Submit</button>
                    {error && "Error"}
                    {success && "Success"}
            </motion.form>
        </motion.div>
       
    </motion.div>
  )
}

export default Contacts
