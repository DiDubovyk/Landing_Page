import { CONTENT, HERO_CONTENT } from "../constants";
import profile from "../assets/profile.png";
import { motion } from "framer-motion";
import resume from "../assets/files/Diana_Dubovyk_CV.pdf"

const container = (delay) => ({
  hidden: { x: -100, opacity: 0 },
  visible: {x:0, opacity:1, transition:{duration:0.5, delay:delay}}
})

const Hero = () => {
  return (
    <div className="border-b border-neutral-700 pb-4 lg:mb-35">
      <div className="flex flex-wrap">
        <div className="w-full lg:w-1/2">
          <div className="flex flex-col items-center lg:items-start">
            <motion.h1
              variants={container(0)}
              initial="hidden"
              animate="visible"
              className="pb-16 text-6xl font-light tracking-tight lg:mt-10 lg:text-8xl"
            >
              Diana Dubovyk
            </motion.h1>
            <motion.span
              variants={container(0.5)}
              initial="hidden"
              animate="visible"
              className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent"
            >
              Front End Developer
            </motion.span>
            <motion.p
              variants={container(1)}
              initial="hidden"
              animate="visible"
              className="my-2 max-w-xl text-2xl py-6 font-light tracking-tighter"
            >
              {HERO_CONTENT}
              <motion.p
                variants={container(0.5)}
                initial="hidden"
                animate="visible"
                className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-2xl tracking-tight text-transparent pb-4"
              >
                {CONTENT}
              </motion.p>
            </motion.p>

            <a href={resume} download="Diana_Dubovyk_CV">
              <motion.button
                variants={container(1)}
                initial="hidden"
                animate="visible"
                whileTap={{ scale: 0.75 }}
                className=" text-white bg-gradient-to-br from-[#6A5975] to-black font-medium rounded-lg text-xl px-5 py-2.5 text-center me-2 mb-2"
              >
                Download CV
              </motion.button>
            </a>
          </div>
        </div>
        <div className="w-full lg:w-1/2 lg:p-1">
          <div className="flex">
            <div className="bg-[#6A5975]  rounded-full h-full">
              <motion.img
                initial={{ x: 100, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 1, delay: 1.3 }}
                src={profile}
                alt="profile photo"
                className="object-contain scale-125"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
