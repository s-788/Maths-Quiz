import { motion } from "framer-motion";
import { FaApple, FaLemon, FaStar, FaChild } from "react-icons/fa";
import { GiBanana, GiWatermelon, GiBalloons, GiWrappedSweet } from "react-icons/gi";

// Map icon names to React components
const iconMap = {
  apple: <FaApple color="red" size={50} />,
  lemon: <FaLemon color="yellow" size={50} />,
  banana: <GiBanana color="orange" size={50} />,
  watermelon: <GiWatermelon color="green" size={50} />,
  balloon: <GiBalloons color="purple" size={50} />,
  star: <FaStar color="gold" size={50} />,
  candy: <GiWrappedSweet color="pink" size={50} />,
  child: <FaChild color="blue" size={50} />,
};

const AnimatedCounter = ({ count, iconList }) => {
  return (
    <div style={{ display: "inline-block", margin: "0.5rem" }}>
      {Array.from({ length: count }, (_, i) => {
        const randomIcon = iconMap[iconList[Math.floor(Math.random() * iconList.length)]];
        return (
          <motion.span
            key={i}
            style={{ margin: "0.3rem", display: "inline-block" }}
            initial={{ scale: 0, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.3, delay: i * 0.1 }}
          >
            {randomIcon}
          </motion.span>
        );
      })}
    </div>
  );
};

export default AnimatedCounter;
