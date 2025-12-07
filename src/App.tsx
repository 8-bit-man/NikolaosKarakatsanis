import { useEffect, useState } from 'react';

function App() {
  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set());
  const [displayedText, setDisplayedText] = useState('');
  const fullText = 'Nikolaos Karakatsanis';

  useEffect(() => {
    let index = 0;
    const timer = setInterval(() => {
      if (index <= fullText.length) {
        setDisplayedText(fullText.slice(0, index));
        index++;
      } 
      else {
        clearInterval(timer);
      }
    }, 65);
    
    return () => clearInterval(timer);
  }, []);
  
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections(prev => new Set(prev).add(entry.target.id));
          }
        });
      },
      { threshold: 0.1 }
    );

    const sections = document.querySelectorAll('section[id]');
    sections.forEach(section => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <div className="bg-gradient-to-b from-blue-950 to-blue-950 min-h-screen text-white font-sans">

      {/* Navigation Bar */}
      <nav className="fixed w-full z-10 bg-blue-950/80 backdrop-blur-3xl border-b border-blue-800">
        <div className="max-w-5xl mx-auto flex justify-center items-center px-6 py-4">
          <ul className="flex gap-6 text-lg">
            <li><a href="#about" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">About</a></li>
            <li><a href="#education" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Education</a></li>
            <li><a href="#skills" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Skills</a></li>
            <li><a href="#projects" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Projects</a></li>
            <li><a href="#contact" className="hover:text-blue-400 transition-all duration-300 hover:scale-110">Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="flex flex-col items-center justify-center min-h-[60vh] pt-32 pb-12 text-center">
        <h1 className="text-5xl md:text-6xl font-extrabold mb-4 bg-gradient-to-r from-blue-400 to-cyan-400 bg-clip-text text-transparent min-h-[1.2em]">
          {displayedText}
          <span className="animate-pulse"></span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-semibold mb-4 text-blue-300 animate-fade-in-up">Software Developer</h2>
        
        {/* Action Buttons */}
        <div className="mt-7 flex flex-wrap gap-4 justify-center animate-fade-in-up">
          <a 
            href="https://github.com/8-bit-man" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400 hover:bg-blue-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
          </a>
          
          <a 
            href="https://www.linkedin.com/in/nikolaos-karakatsanis-29b55037a/" 
            target="_blank" 
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-400 hover:bg-blue-500 rounded-lg font-semibold text-white transition-all duration-300 transform hover:scale-105 hover:shadow-lg"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/>
            </svg>
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className={`max-w-4xl mx-auto py-16 px-6 transition-all duration-1000 ${
        visibleSections.has('about') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="text-3xl font-bold mb-4 text-blue-300">About Me</h3>
        <p className="text-lg text-blue-100">
          I'm an udergraduate student at the National & Kapodistrian University of Athens, pursuing a degree in Computer Science and Telecommunications.
          My passion lies in full-stack development, where I enjoy creating modern and intuitive web applications.
        </p>
      </section>

      {/* Education Section */}
      <section id="education" className={`max-w-4xl mx-auto px-6 transition-all duration-1000 ${
        visibleSections.has('education') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="text-3xl font-bold mb-4 text-blue-300">Education</h3>

        <div className="space-y-6">
          <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors">
            <h4 className="text-xl font-semibold">Computer Science and Telecommunications</h4>
            <span className="text-blue-400">National & Kapodistrian University of Athens, 2022 - now</span>
          </div>
          
          <div className="border-l-4 border-blue-400 pl-6 hover:border-blue-300 transition-colors">
            <h4 className="text-xl font-semibold">Certificate of Proficiency in English (C2)</h4>
            <span className="text-blue-400">University of Michigan, 2021</span>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className={`max-w-4xl mx-auto py-16 px-6 transition-all duration-1000 ${
        visibleSections.has('skills') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="text-3xl font-bold mb-4 text-blue-300">Technical Skills</h3>
        
        {/* Programming Languages */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3 text-blue-200">Programming Languages</h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-blue-100">
            {['Python','C','C++','Java'].map((skill, index) => (
              <li 
                key={skill}
                className={`bg-blue-800/40 p-3 rounded-lg transition-all duration-700 hover:bg-blue-700/60 ${
                  visibleSections.has('skills')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: visibleSections.has('skills') ? `${(index + 7) * 100}ms` : '0ms'
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Web Development */}
        <div className="mb-8">
          <h4 className="text-xl font-semibold mb-3 text-blue-200">Web Development</h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-blue-100">
            {['TypeScript','React', 'Tailwind CSS','Material UI', 'Spring Boot', 'MySQL'].map((skill, index) => (
              <li 
                key={skill}
                className={`bg-blue-800/40 p-3 rounded-lg transition-all duration-700 hover:bg-blue-700/60 ${
                  visibleSections.has('skills')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: visibleSections.has('skills') ? `${(index + 7) * 100}ms` : '0ms'
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>

        {/* Tools & Technologies */}
        <div>
          <h4 className="text-xl font-semibold mb-3 text-blue-200">Tools & Technologies</h4>
          <ul className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 text-blue-100">
            {['Git','Linux', 'VS Code', 'Google Colab', 'Microsoft Office','MatLab', 'LaTeX'].map((skill, index) => (
              <li
                key={skill}
                className={`bg-blue-800/40 p-3 rounded-lg transition-all duration-700 hover:bg-blue-700/60 ${
                  visibleSections.has('skills')
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-5'
                }`}
                style={{
                  transitionDelay: visibleSections.has('skills') ? `${(index + 11) * 100}ms` : '0ms'
                }}
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className={`max-w-4xl mx-auto py-4 px-6 transition-all duration-1000 ${
        visibleSections.has('projects') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="text-3xl font-bold mb-4 text-blue-300">Projects</h3>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-blue-800/60 rounded-lg p-6 shadow hover:scale-105 hover:shadow-2xl transition-all duration-300 hover:bg-blue-800/80">
            <h4 className="text-xl font-semibold mb-2">MegaBid</h4>
            <p className="text-blue-100 mb-2">
              A full-stack auction platform, developed with React, Spring Boot, and MySQL, leveraging REST APIs.
            </p>
            <a href="https://github.com/BasilisMilesis/MegaBid" className="text-blue-400 hover:underline hover:text-blue-300 transition-colors">Soon on GitHub</a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className={`max-w-4xl mx-auto py-16 px-6 transition-all duration-1000 ${
        visibleSections.has('contact') 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-10'
      }`}>
        <h3 className="text-3xl font-bold mb-4 text-blue-300">Contact</h3>
          <div className="flex items-center justify-center md:justify-start gap-3 mb-4">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
            </svg>
            <span className="text-lg text-blue-100">nikoskar19@hotmail.com</span>
          </div>
          
          <div className="flex items-center justify-center md:justify-start gap-3">
            <svg className="w-6 h-6 text-blue-400" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
            </svg>
            <span className="text-lg text-blue-100">Athens, Greece</span>
          </div>
      </section>

      {/* Footer */}
      <footer className="text-center py-8 border-t border-blue-800 text-blue-400 mt-8">
        <span className="animate-pulse">&copy; {new Date().getFullYear()} Nikolaos Karakatsanis. All rights reserved.</span>
      </footer>
    </div>
  );
}

export default App
