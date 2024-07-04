import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "./skills.css";
import logo1 from "../../assets/logo1.png";
import logo2 from "../../assets/logo2.png";
import logo3 from "../../assets/logo3.png";
import logo4 from "../../assets/logo4.png";
import logo5 from "../../assets/logo5.png";
import logo6 from "../../assets/logo6.png";
import logo7 from "../../assets/logo7.png";
import logo8 from "../../assets/logo8.png";
import logo9 from "../../assets/logo9.png";
import logo10 from "../../assets/logo10.png";
import logo11 from "../../assets/logo11.png";
import logo12 from "../../assets/logo12.png";
import logo13 from "../../assets/logo13.png";
import logo14 from "../../assets/logo14.png";

const Skills = () => {
  const items = [
    {
      id: 1,
      logo: logo1,
      description: `
        <div class="description-container">
          <span class="description-line description-left">I utilize HTML as the backbone of my web development</span> 
          <span class="description-line description-right">projects creating the structure and layout of web pages.</span>
        </div>
      `,
    },
    {
      id: 2,
      logo: logo2,
      description: `
        <div class="description-container">
          <span class="description-line description-left">CSS is used to create visually appealing</span>
          <span class="description-line description-right">layouts, responsive designs, and animations.</span>
        </div>
      `,
    },
    {
      id: 3,
      logo: logo3,
      description: `
        <div class="description-container">
          <span class="description-line description-left">I used JavaScript to create client-side validations,</span>
          <span class="description-line description-right">interactive forms, and real-time data updates.</span>
        </div>
      `,
    },
    {
      id: 4,
      logo: logo4,
      description: `
        <div class="description-container">
          <span class="description-line description-left">React is utilized to build modern, efficient, and</span>
          <span class="description-line description-right">scalable user interfaces across web applications</span>
        </div>
      `,
    },
    {
      id: 5,
      logo: logo5,
      description: `
        <div class="description-container">
          <span class="description-line description-left">Node.js is used for developing server-side applications and APIs.</span>
          <span class="description-line description-right">I built RESTful APIs and real-time web applications using Node.js</span>
        </div>
      `,
    },
    {
      id: 6,
      logo: logo6,
      description: `
        <div class="description-container">
          <span class="description-line description-left">Git is utilized for version control, allowing me to manage</span>
          <span class="description-line description-right">and track changes in my codebase efficiently.</span>
        </div>
      `,
    },
    {
      id: 7,
      logo: logo7,
      description: `
        <div class="description-container">
          <span class="description-line description-left">I utilize Tailwind CSS to create consistent,</span>
          <span class="description-line description-right">responsive designs with minimal custom CSS</span>
        </div>
      `,
    },
    {
      id: 8,
      logo: logo8,
      description: `
        <div class="description-container">
          <span class="description-line description-left">I use Python for a variety of tasks, including</span>
          <span class="description-line description-right">web development, data analysis, and automation.</span>
        </div>
      `,
    },
    {
      id: 9,
      logo: logo9,
      description: `
        <div class="description-container">
          <span class="description-line description-left">C and C++ are used for system-level programming,</span>
          <span class="description-line description-right">performance-critical applications, and competitive programming.</span>
        </div>
      `,
    },
    {
      id: 10,
      logo: logo10,
      description: `
        <div class="description-container">
          <span class="description-line description-left">I use MySQL to design and manage relational</span>
          <span class="description-line description-right">databases for various web applications.</span>
        </div>
      `,
    },
    {
      id: 11,
      logo: logo11,
      description: `
        <div class="description-container">
          <span class="description-line description-left">I use Docker to create,</span>
          <span class="description-line description-right">deploy, and run applications in containers.</span>
        </div>
      `,
    },
    {
      id: 12,
      logo: logo12,
      description: `
        <div class="description-container">
          <span class="description-line description-left">ExpressJs is used to simplify the creation of server-side</span>
          <span class="description-line description-right">applications by handling HTTP requests, routing, and middleware.</span>
        </div>
      `,
    },
    {
      id: 13,
      logo: logo13,
      description: `
        <div class="description-container">
          <span class="description-line description-left">TypeScript is a strongly typed superset of 
          </span>
          <span class="description-line description-right">JavaScript that adds static types to the language.</span>
        </div>
      `,
    },
    {
      id: 14,
      logo: logo14,
      description: `
        <div class="description-container">
          <span class="description-line description-left">API development and testing tool that simplifies</span>
          <span class="description-line description-right">the process of designing, testing, and documenting APIs.</span>
        </div>
      `,
    },
  ];

  return (
    <div className="skills-container">
      <section id="skills" className="skills">
        <Swiper
          modules={[Navigation, Autoplay]}
          slidesPerView={1}
          spaceBetween={30}
          loop={true}
          navigation
          autoplay={{ delay: 3000 }}
          className="swiper-container"
        >
          {items.map((item) => (
            <SwiperSlide key={item.id} className="swiper-slide">
              <div className="flex flex-col items-center justify-center h-[42.5rem] text-center">
                <img
                  src={item.logo}
                  alt={`Logo ${item.id}`}
                  className="w-20 mb-4"
                />
                <div
                  className="text-white max-w-[80rem] mx-5 sm:mx-10 md:mx-12 lg:mx-16 xl:mx-20 my-5 sm:my-6 md:my-8 lg:my-10 xl:my-12 px-4 sm:px-8 md:px-12 lg:px-16 xl:px-20 whitespace-pre-wrap text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl italic font-black leading-tight text-center"
                  dangerouslySetInnerHTML={{ __html: item.description }}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </section>
    </div>
  );
};

export default Skills;
