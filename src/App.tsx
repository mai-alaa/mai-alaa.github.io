import React, { useState, useEffect } from 'react';
import { 
  Menu, 
  X, 
  Github, 
  Linkedin, 
  Mail, 
  MapPin, 
  Phone, 
  ExternalLink,
  ChevronDown,
  Code,
  Smartphone,
  Globe,
  Zap,
  Users,
  Award
} from 'lucide-react';

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['hero', 'about', 'projects', 'skills', 'contact'];
      const scrollPosition = window.scrollY + 100;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const height = element.offsetHeight;
          
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
    setIsMenuOpen(false);
  };

  const projects = [
    {
      title: "Maid In Egypt",
      description: "A comprehensive domestic worker booking platform featuring push notifications, enhanced UI/UX, and reliable cross-platform deployment for both iOS and Android.",
      tech: ["Flutter", "Dart", "Firebase", "Push Notifications", "Cross-Platform"],
      status: "Live on App Store & Google Play",
      highlight: "Booking Platform"
    },
    {
      title: "Moona&Ogra",
      description: "Home decoration and finishing services app with Google & Apple authentication, multi-language support, push notifications, and integrated Google Maps for location services.",
      tech: ["Flutter", "OAuth", "Google Maps", "Localization", "Push Notifications"],
      status: "Live on App Store & Google Play",
      highlight: "Home Services"
    },
    {
      title: "Tadabar",
      description: "Comprehensive Quran app featuring precise geolocation services for prayer times, push notifications for Islamic reminders, and adaptive light/dark themes for optimal reading experience.",
      tech: ["Flutter", "Quran", "Geolocation", "Dark/Light Theme", "Push Notifications"],
      status: "Live on App Store & Google Play",
      highlight: "Islamic App"
    },
    {
      title: "E-commerce App",
      description: "Comprehensive e-commerce solution with secure payment integration, social sign-ins, and modular Cubit state management architecture designed for scalability.",
      tech: ["Flutter", "Cubit", "Secure Payments", "Social Auth", "State Management"],
      status: "In Testing Phase",
      highlight: "E-commerce"
    }
  ];

  const skills = [
    { category: "Mobile Development", items: ["Flutter", "Dart", "iOS", "Android", "Cross-Platform"] },
    { category: "Backend & APIs", items: ["REST APIs", "Firebase", "OAuth", "Google Maps", "Dio"] },
    { category: "Architecture", items: ["MVVM", "SOLID Principles", "Clean Architecture", "Cubit", "State Management"] },
    { category: "DevOps & Tools", items: ["CI/CD", "Git", "Xcode", "TestFlight", "Crashlytics"] },
    { category: "Performance", items: ["App Optimization", "Automated Testing", "ASO", "Performance Monitoring"] },
    { category: "Authentication", items: ["Google Sign-in", "Apple Sign-in", "Facebook Auth", "Social Logins"] }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-white/95 backdrop-blur-sm border-b border-gray-100 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-2xl font-bold text-gray-900">
              Mai <span className="text-blue-600">Alaa</span>
            </div>
            
            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                    activeSection === item.id 
                      ? 'text-blue-600 bg-blue-50' 
                      : 'text-gray-700 hover:text-blue-600'
                  }`}
                >
                  {item.label}
                </button>
              ))}
            </div>

            {/* Mobile menu button */}
            <div className="md:hidden">
              <button
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                className="p-2 rounded-md text-gray-700 hover:text-blue-600"
              >
                {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden border-t border-gray-100 py-4">
              {[
                { id: 'hero', label: 'Home' },
                { id: 'about', label: 'About' },
                { id: 'projects', label: 'Projects' },
                { id: 'skills', label: 'Skills' },
                { id: 'contact', label: 'Contact' }
              ].map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className="block w-full text-left px-3 py-2 text-gray-700 hover:text-blue-600 hover:bg-blue-50 rounded-md"
                >
                  {item.label}
                </button>
              ))}
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="hero" className="pt-20 pb-16 bg-gradient-to-br from-blue-50 to-indigo-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="mb-8">
              <div className="w-32 h-32 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-full mx-auto mb-6 flex items-center justify-center">
                <Code size={48} className="text-white" />
              </div>
              <h1 className="text-4xl sm:text-6xl font-bold text-gray-900 mb-6">
                Mai <span className="text-blue-600">Alaa</span>
              </h1>
              <h2 className="text-2xl sm:text-3xl font-light text-gray-700 mb-8">
                Flutter Developer
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mb-8 leading-relaxed">
                Passionate about building <strong>high-performance mobile applications</strong> that deliver real business impact. 
                Specializing in cross-platform development with scalable architecture patterns.
              </p>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => scrollToSection('projects')}
                className="px-8 py-4 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transform hover:scale-105 transition-all duration-200 shadow-lg"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-8 py-4 border-2 border-blue-600 text-blue-600 rounded-lg font-semibold hover:bg-blue-600 hover:text-white transform hover:scale-105 transition-all duration-200"
              >
                Get In Touch
              </button>
            </div>

            <div className="mt-12 animate-bounce">
              <ChevronDown size={32} className="text-gray-400 mx-auto" />
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">About Me</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">
                Full-Stack Mobile Developer
              </h3>
              <p className="text-gray-600 mb-6 leading-relaxed">
                With hands-on experience in the full app lifecycle—from concept to deployment—I specialize in 
                cross-platform development using Flutter and Dart, while applying scalable architecture patterns 
                (MVVM, SOLID, Clean Architecture) to ensure maintainability and growth.
              </p>
              <p className="text-gray-600 mb-6 leading-relaxed">
                I've successfully developed and launched live apps on both Google Play and the App Store, 
                creating solutions that solve real business challenges and deliver exceptional user experiences.
              </p>
              <p className="text-gray-600 leading-relaxed">
                I thrive on solving complex technical challenges, optimizing performance, and creating apps 
                that users love. Beyond coding, I enjoy exploring emerging mobile technologies and collaborating 
                with dynamic teams to bring ideas to life.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-blue-50 rounded-lg">
                <Smartphone size={48} className="text-blue-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">4+</h4>
                <p className="text-gray-600 text-sm">Live Apps Published</p>
              </div>
              <div className="text-center p-6 bg-green-50 rounded-lg">
                <Globe size={48} className="text-green-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Cross-Platform</h4>
                <p className="text-gray-600 text-sm">iOS & Android</p>
              </div>
              <div className="text-center p-6 bg-purple-50 rounded-lg">
                <Zap size={48} className="text-purple-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Performance</h4>
                <p className="text-gray-600 text-sm">Optimized Apps</p>
              </div>
              <div className="text-center p-6 bg-orange-50 rounded-lg">
                <Users size={48} className="text-orange-600 mx-auto mb-4" />
                <h4 className="font-bold text-gray-900 mb-2">Team Player</h4>
                <p className="text-gray-600 text-sm">Collaborative</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Featured Projects</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              Here are some of the mobile applications I've successfully developed and launched
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <div key={index} className="bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 overflow-hidden group">
                <div className="p-8">
                  <div className="flex items-center justify-between mb-4">
                    <span className="px-3 py-1 bg-blue-100 text-blue-600 rounded-full text-sm font-medium">
                      {project.highlight}
                    </span>
                    <span className={`px-3 py-1 rounded-full text-sm font-medium ${
                      project.status.includes('Live') 
                        ? 'bg-green-100 text-green-600' 
                        : 'bg-yellow-100 text-yellow-600'
                    }`}>
                      {project.status}
                    </span>
                  </div>
                  
                  <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-blue-600 transition-colors">
                    {project.title}
                  </h3>
                  
                  <p className="text-gray-600 mb-6 leading-relaxed">
                    {project.description}
                  </p>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech, techIndex) => (
                      <span key={techIndex} className="px-3 py-1 bg-gray-100 text-gray-700 rounded-full text-sm">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">Technical Expertise</h2>
            <div className="w-24 h-1 bg-blue-600 mx-auto mb-6"></div>
            <p className="text-gray-600 max-w-2xl mx-auto">
              A comprehensive skill set covering the full spectrum of mobile development
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, index) => (
              <div key={index} className="bg-gray-50 rounded-xl p-6 hover:bg-blue-50 transition-colors duration-300">
                <h3 className="text-xl font-bold text-gray-900 mb-4">{skillGroup.category}</h3>
                <div className="space-y-2">
                  {skillGroup.items.map((skill, skillIndex) => (
                    <div key={skillIndex} className="flex items-center">
                      <Award size={16} className="text-blue-600 mr-3" />
                      <span className="text-gray-700">{skill}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gradient-to-br from-blue-600 to-indigo-700">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Work Together</h2>
            <div className="w-24 h-1 bg-white mx-auto mb-6"></div>
            <p className="text-blue-100 max-w-2xl mx-auto">
              Ready to bring your mobile app idea to life? Let's discuss how we can create something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
              <a
                href="tel:+201010488370"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors group"
              >
                <Phone size={32} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">Phone</p>
                <p className="text-blue-100 text-sm">+20 101 048 8370</p>
              </a>

              <a
                href="mailto:maialaa312@gmail.com"
                className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center hover:bg-white/20 transition-colors group"
              >
                <Mail size={32} className="text-white mx-auto mb-4 group-hover:scale-110 transition-transform" />
                <p className="text-white font-semibold mb-2">Email</p>
                <p className="text-blue-100 text-sm">maialaa312@gmail.com</p>
              </a>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <MapPin size={32} className="text-white mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">Location</p>
                <p className="text-blue-100 text-sm">Egypt</p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 text-center">
                <Globe size={32} className="text-white mx-auto mb-4" />
                <p className="text-white font-semibold mb-2">Available</p>
                <p className="text-blue-100 text-sm">Remote & On-site</p>
              </div>
            </div>

            <div className="text-center">
              <h3 className="text-2xl font-bold text-white mb-6">Connect With Me</h3>
              <div className="flex justify-center space-x-6">
                <a
                  href="https://linkedin.com/in/mai-alaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-colors group"
                >
                  <Linkedin size={24} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="https://github.com/mai-alaa"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-colors group"
                >
                  <Github size={24} className="text-white group-hover:scale-110 transition-transform" />
                </a>
                <a
                  href="mailto:maialaa312@gmail.com"
                  className="bg-white/10 backdrop-blur-sm p-4 rounded-full hover:bg-white/20 transition-colors group"
                >
                  <Mail size={24} className="text-white group-hover:scale-110 transition-transform" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-400">
              © 2025 Mai Alaa. Built with React & Tailwind CSS.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;