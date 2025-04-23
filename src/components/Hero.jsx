import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { styles } from "../styles";
import { sanket } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto flex items-center justify-center overflow-hidden">
      <div className={`w-full max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center justify-center gap-5 md:gap-10`}>
        {/* Left Vertical Line - Hidden on mobile */}
        <div className='hidden md:flex flex-col justify-center items-center'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 h-40 sm:h-80 violet-gradient' />
        </div>

        {/* Text Section */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left md:pr-10">
          <h1 className={`${styles.heroHeadText} text-white font-Volkhov`}>
            Hi, I'm <span className='text-[#915EFF] font-Orbitron'>Sanket</span>
          </h1>

          <div className={`${styles.heroSubText} mt-2 text-white-100 font-Montserrat`}>
            <Typewriter
              options={{
                strings: ['Full Stack Developer', 'React Native Developer', 'Data Scientist'],
                autoStart: true,
                loop: true,
              }}
            />
          </div>

          <p className="text-[16px] sm:text-[18px] mt-2 text-white-100 whitespace-nowrap overflow-x-auto py-2 scrollbar-hide">
            Clean code. Scalable systems. Sharp logic.
          </p>
        </div>

        {/* Image Section - Fixed circular display */}
        <div className="flex-1 order-1 md:order-2 flex justify-center items-center">
          <div className="relative" style={{ width: 'min(80vw, 420px)', height: 'min(80vw, 440px)' }}>
            {/* Blur background */}
            <div className="w-full h-full overflow-hidden blur-[8px] absolute inset-0 z-0 rounded-full">
              <img
                src={sanket}
                alt="Sanket"
                className="w-full h-full object-contain"
              />
            </div>

            {/* Sharp image */}
            <div className="w-full h-full rounded-full overflow-hidden relative z-10 shadow-lg">
              <img
                src={sanket}
                alt="Sanket"
                className="w-full h-full object-contain"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className='absolute bottom-10 md:bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[54px] md:w-[35px] md:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-1 md:p-2'>
            <motion.div
              animate={{ y: [0, 16, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-2 h-2 md:w-3 md:h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;