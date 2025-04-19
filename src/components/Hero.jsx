import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { styles } from "../styles";
import { sanket } from "../assets";

const Hero = () => {
  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className={`absolute inset-0 top-[20vh] md:top-[34vh] max-w-7xl mx-auto ${styles.paddingX} flex flex-col md:flex-row items-center md:items-start gap-5 md:gap-10`}>
        {/* Left Vertical Line - Hidden on mobile */}
        <div className='hidden md:flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text Section */}
        <div className="flex-1 order-2 md:order-1 text-center md:text-left mt-8 md:mt-0">
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

        {/* Right Side Image - Shown on mobile but smaller */}
        <div className="flex-1 order-1 md:order-2 flex justify-center items-center md:mt-0 mt-[-50px]">
          <div className="relative w-[280px] h-[280px] md:w-[440px] md:h-[440px]">
            {/* Blur container with overflow hidden */}
            <div className="w-full h-full rounded-full overflow-hidden blur-[8px] absolute inset-0 z-0">
              <img
                src={sanket}
                alt="Sanket"
                className="w-full h-full object-cover"
              />
            </div>

            {/* Sharp image */}
            <img
              src={sanket}
              alt="Sanket"
              className="w-full h-full object-cover rounded-full relative z-10 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className='absolute xs:bottom-10 bottom-20 md:bottom-32 w-full flex justify-center items-center'>
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