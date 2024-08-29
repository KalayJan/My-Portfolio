import "./Portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";
import { useRef } from "react";

const items = [
    {
        id: 1,
        title:"Monster Search",
        img:"https://i.pinimg.com/564x/34/25/1e/34251ede136ca8d71b8a8c946f53107b.jpg",
        desc:"This JavaScript project demonstrates the flexibility of a dynamic search bar, designed to enhance user experience by providing real-time filtering and results customization. The search bar is adaptable, allowing users to filter through various data types, such as text, numbers, or categories, with instant feedback and minimal loading times. The project emphasizes ease of integration into different interfaces, supporting a wide range of inputs and displaying relevant suggestions as the user types, making it a powerful tool for efficient data searching.",
        link: "https://github.com/KalayJan/MonsterSearch" 
    },
    {
        id: 2,
        title:"E-Commerce",
        img:"https://i.pinimg.com/736x/a3/35/13/a33513fdd182d12a9688325a059f5b3b.jpg",
        desc:"In developing this clothing line e-commerce website, I am leveraging JavaScript and ReactJS to build a dynamic and responsive user interface that provides a seamless shopping experience. ReactJS allows me to create reusable components, ensuring the site is both efficient and easy to maintain. For backend operations, I am using Firebase as the database, which offers real-time data synchronization, secure authentication, and robust hosting services. This combination of technologies enables me to create a fast, scalable, and secure platform where users can browse, shop, and manage their accounts with ease.",
        link: "https://github.com/KalayJan/ElijahClothing" 
    },
    {
        id: 3,
        title:"React Native App",
        img:"https://i.pinimg.com/564x/91/24/74/9124747c62bcc94451d40bb08708aaf6.jpg",
        desc:"React Native (also known as RN) is a popular JavaScript-based mobile app framework that allows you to build natively-rendered mobile apps for iOS and Android . The framework lets you create an application for various platforms by using the same codebase.",
        link: "https://example.com/react-native-app" 
    },
    {
        id: 4,
        title:"Next.js Blog",
        img:"https://i.pinimg.com/564x/0c/58/12/0c581205cadbcd07c17a784d621ad1c5.jpg",
        desc:"Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio eligendi soluta illum, magnam mollitia quibusdam maxime dicta, non error laborum, pariatur iure ratione! Necessitatibus natus quasi eius. Laborum, magnam fugit.",
        link: "https://example.com/nextjs-blog" // Add your link here
    },
];

const Single = ({item}) => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
    });

    const y = useTransform(scrollYProgress, [0,1], [-300, 300]);

    const handleClick = () => {
        window.location.href = item.link;
    };

    return (
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                        <h2>{item.title}</h2>
                        <p>{item.desc}</p>
                        <button onClick={handleClick}>Check Project</button>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}

const Portfolio = () => {
    const ref = useRef();

    const {scrollYProgress} = useScroll({
        target: ref, 
        offset: ["end end" , "start start"]
    });

    const scaleX = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30, 
    });

    return (
        <div className="portfolio" ref={ref}>
            <div className="progress">
                <h1>Featured Works</h1>
                <motion.div style={{scaleX}} className="progressBar"></motion.div>
            </div>
            {items.map(item => (
                <Single item={item} key={item.id} />
            ))}
        </div>
    );
}

export default Portfolio;
