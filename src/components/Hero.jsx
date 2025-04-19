import { motion } from "framer-motion";
import Typewriter from 'typewriter-effect';
import { styles } from "../styles";
import { sanket } from "../assets"

const Hero = () => {
  return (
    <section className={`relative w-full h-screen mx-auto`}>
      <div
        className={`absolute inset-0 top-[34vh] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-10`}
      >
        {/* Left Vertical Line */}
        <div className='flex flex-col justify-center items-center mt-5'>
          <div className='w-5 h-5 rounded-full bg-[#915EFF]' />
          <div className='w-1 sm:h-80 h-40 violet-gradient' />
        </div>

        {/* Text Section */}
        <div className="flex-1">
          <h1 className={`${styles.heroHeadText} text-white font-Volkhov`}>
            Hi, I'm <span className='text-[#915EFF] font-Orbitron'>Sanket</span>
          </h1>
          <p className={`${styles.heroSubText} mt-2 text-white-100`}>
            <div className="font-Montserrat">
              <Typewriter
                options={{
                  strings: ['Full Stack Developer', 'React Native Developer', 'Data Scientist'],
                  autoStart: true,
                  loop: true,
                }}
              />
            </div>
            <p>Clean code. Scalable systems. Sharp logic.</p>
          </p>
        </div>

        {/* Right Side Image */}
        <div className="hidden md:flex justify-center items-center flex-1">
          <div className="relative">
            {/* Blur container with overflow hidden */}
            <div className="w-[440px] h-[440px] rounded-full overflow-hidden blur-[8px] absolute inset-0 z-0">
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
              className="w-[440px] h-[440px] object-cover rounded-full relative z-10 shadow-lg"
            />
          </div>
        </div>
      </div>

      {/* Scroll-down indicator */}
      <div className='absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;