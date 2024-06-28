import { Box, Typography } from "@mui/joy";
import { AnimatePresence, motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

const AnimationBox: React.FC<{
  children: any;
  option: number;
  styles?: any;
  motionStyle?: any;
}> = ({ children, option, styles, motionStyle }) => {
  const { ref, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  const animationList: Array<any> = [
    {
      intial: { opacity: 0, y: 30 },
      animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 30 },
      transition: 0.7,
    },
    {
      intial: { opacity: 0 },
      animate: { opacity: inView ? 1 : 0 },
      transition: { delay: 0.3, duration: 2 },
    },
    {
      intial: { rotate: 0 },
      animate: { rotate: inView ? 360 : 0 },
      transition: { duration: 0.5, ease: "linear" },
    },

    {
      intial: { opacity: 0, y: 50 },
      animate: { opacity: inView ? 1 : 0, y: inView ? 0 : 30 },
      transition: { type: "spring", stiffness: 100 },
    },
    {
      whileHover: { scale: 1.1 },
      transition: { type: "spring", stiffness: 400, damping: 10 },
    },
    {
      intial: { y: 0, scale: 1 },
      animate: { y: inView ? 200 : 0, scale: inView ? 1.05 : 1 },
      transition: { duration: 0.5, ease: "linear" },
    },
  ];

  return (
    <>
      <motion.div
        ref={ref}
        initial={animationList[option].intial}
        animate={animationList[option].animate}
        transition={animationList[option].transition}
        whileHover={animationList[option].whileHover}
        style={motionStyle}
      >
        <Box sx={styles}>{children}</Box>
      </motion.div>
    </>
  );
};

const AnimationText: React.FC<{ text: string; delay: any; style: any }> = ({
  text,
  delay = 0.5,
  style,
}) => {
  const characters = text.split("");

  const containerVariants = {
    before: {},
    after: { transition: { staggerChildren: 0.05 } },
  };

  const letterVariants = {
    before: { opacity: 0, y: 20 },
    after: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", damping: 16, stiffness: 200 },
    },
  };

  return (
    <motion.div
      initial="before"
      animate="after"
      variants={containerVariants}
      style={{ display: "flex", justifyContent: "center" }}
    >
      {characters.map((char, index) => (
        <motion.span key={index} variants={letterVariants}>
          <Typography sx={style}>{char}</Typography>
        </motion.span>
      ))}
    </motion.div>
  );
};

export default { AnimationBox, AnimationText };
