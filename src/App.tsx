import { DarkModeProvider } from './context/DarkModeContext';
import Header from './components/Header';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Projects from './components/Projects';
import About from './components/About';
import Contact from './components/Contact';
import Footer from './components/Footer';

// Import your main CSS file
import './index.css';
import { useDarkMode } from './context/useDarkMode';

const AppContent = () => {
  const { isDarkMode } = useDarkMode();

  return (
    <div className={`min-h-screen transition-colors duration-300 ${
      isDarkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-800'
    }`}>
      <Header />
      <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <Hero />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

const App = () => (
  <DarkModeProvider>
    <AppContent />
  </DarkModeProvider>
);

export default App;