import { motion } from 'framer-motion';
import { ArrowDownTrayIcon } from '@heroicons/react/24/outline';

const About = () => {
  return (
    <section id="about" className="section-padding bg-gray-50 dark:bg-gray-800">
      <div className="container-custom">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <div className="relative">
              <div className="absolute -left-6 -top-6 w-24 h-24 bg-primary/20 rounded-full -z-10"></div>
              <img 
                src="/about-image.jpg" 
                alt="John Smith working" 
                className="rounded-lg shadow-lg w-full max-w-md mx-auto"
              />
              <div className="absolute -bottom-6 -right-6 p-4 bg-primary text-white rounded-lg shadow-lg text-center">
                <span className="block text-2xl font-bold">5+</span>
                <span className="text-sm">Years Professional Experience</span>
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            className="w-full lg:w-1/2"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="text-3xl font-bold mb-6">About Me</h2>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I'm a passionate software developer with over 5 years of experience building web applications 
              and digital solutions. My journey in technology began with a curiosity about how things work, 
              which evolved into a career creating elegant, efficient code.
            </p>
            <p className="text-gray-700 dark:text-gray-300 mb-6">
              I specialize in full-stack development, with particular expertise in React, Node.js, and cloud 
              technologies. I'm dedicated to writing clean, maintainable code and creating intuitive user 
              experiences that solve real problems.
            </p>
            
            <div className="mb-8">
              <h3 className="text-lg font-semibold mb-4">Education</h3>
              <div className="space-y-3">
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold">Master of Science in Computer Science</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">Stanford University | 2018 - 2020</p>
                </div>
                <div className="bg-white dark:bg-gray-700 rounded-lg p-4 shadow-sm">
                  <h4 className="font-semibold">Bachelor of Science in Software Engineering</h4>
                  <p className="text-sm text-gray-600 dark:text-gray-300">MIT | 2014 - 2018</p>
                </div>
              </div>
            </div>
            
            <button className="btn-primary">
              Download Full Resume
              <ArrowDownTrayIcon className="ml-2 h-5 w-5" />
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
