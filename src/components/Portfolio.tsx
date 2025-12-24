import React, { useState, useEffect, useRef } from 'react';
import { Github, Linkedin, Mail, Phone, ExternalLink, Code, Database, Server, Award, Trophy, Users, Target, Download, MapPin, Calendar, Menu, X, ChevronDown, ChevronLeft, ChevronRight } from 'lucide-react';

// Type declarations for Vanta.js
declare global {
  interface Window {
    VANTA: any;
    THREE: any;
  }
}

const Portfolio = () => {
  const [activeSection, setActiveSection] = useState('about');
  const [isVisible, setIsVisible] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const [currentFontIndex, setCurrentFontIndex] = useState(0);
  const vantaRef = useRef<HTMLElement>(null);

  const fonts = [
    'font-mono',
    'font-serif',
    'font-sans',
    'font-bold',
    'font-light',
    'tracking-widest',
    'tracking-tight font-bold',
    'italic font-serif',
    'font-mono tracking-wide',
    'font-sans font-black'
  ];

  useEffect(() => {
    setIsVisible(true);

    // Font cycling effect
    const fontInterval = setInterval(() => {
      setCurrentFontIndex((prev) => (prev + 1) % fonts.length);
    }, 2500); // Change font every 2.5 seconds

    // Load Vanta.js scripts
    const loadVanta = () => {
      if (window.VANTA && window.THREE) {
        const vantaEffect = window.VANTA.DOTS({
          el: vantaRef.current,
          mouseControls: true,
          touchControls: true,
          gyroControls: false,
          minHeight: 200.00,
          minWidth: 200.00,
          scale: 1.00,
          scaleMobile: 1.00,
          backgroundColor: 0x222222,
          color: 0xff8820,
          color2: 0xff8820,
          size: 3,
          spacing: 35,
          showLines: true
        });

        return () => {
          if (vantaEffect) vantaEffect.destroy();
        };
      }
    };

    // Load Three.js first
    if (!window.THREE) {
      const threeScript = document.createElement('script');
      threeScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r134/three.min.js';
      threeScript.onload = () => {
        // Load Vanta.js after Three.js
        if (!window.VANTA) {
          const vantaScript = document.createElement('script');
          vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js';
          vantaScript.onload = loadVanta;
          document.head.appendChild(vantaScript);
        } else {
          loadVanta();
        }
      };
      document.head.appendChild(threeScript);
    } else if (!window.VANTA) {
      const vantaScript = document.createElement('script');
      vantaScript.src = 'https://cdnjs.cloudflare.com/ajax/libs/vanta/0.5.24/vanta.dots.min.js';
      vantaScript.onload = loadVanta;
      document.head.appendChild(vantaScript);
    } else {
      loadVanta();
    }

    // Cleanup font interval
    return () => {
      clearInterval(fontInterval);
    };
  }, []);

  const skills = [
    "c++", "SQL", "JavaScript", "TypeScript", "C", "HTML", "CSS",
    "ReactJS", "Bootstrap", "RestAPIs", "Tailwind CSS",
    "MongoDB", "MySQL", "Git", "GitHub", "VS Code",
    "Node.js", "Express.js"
  ];

  const projects = [
    {
      name: "QualityBot – AI-powered Quality Management Assistant",
      description: "An AI-powered assistant developed during the AI for Quality Hackathon by IFQM, helping MSMEs, engineers, and students automate quality tasks, generate error-free reports, and gain real-time insights.",
      longDescription: "QualityBot integrates Google Gemini LLM for intelligent responses, FastAPI backend, and React + TypeScript + Tailwind CSS frontend to deliver a seamless multi-platform experience. It supports Excel/CSV and ERP data integration, providing dashboards, SPC charts, Six Sigma, RCA, and FMEA insights for quality improvement and decision-making.",
      tech: ["React", "TypeScript", "Vite", "Tailwind CSS", "FastAPI", "JWT Authentication", "Google Gemini LLM", "Excel/CSV Integration", "ERP Integration", "REST APIs"],
      features: [
        "AI-driven defect detection and classification",
        "Real-time dashboards with SPC, Six Sigma, RCA, and FMEA insights",
        "Predictive analytics for process optimization",
        "Automated report generation from Excel/ERP data",
        "Interactive, role-based guidance for MSMEs, engineers, and students"
      ],
      github: "https://github.com/Harshita-HKumawat/QualityBot",
      demo: "#"
    },
    {
      name: "MedLock – AI-Powered Medicine Authenticity Platform",
      description: "A secure Flask-based platform developed to help pharmaceutical manufacturers manage medicine batches, generate cryptographic QR codes, and prevent counterfeiting with AI-powered monitoring.",
      longDescription: "MedLock is designed to ensure medicine authenticity and safety. The system provides manufacturers with secure registration, automated batch management, cryptographic QR code generation, and AI-powered scan behavior analysis. Admins can monitor suspicious activity in real time, while the public can verify medicines via QR codes. Frontend is built with Jinja2 templates, Bootstrap, and Font Awesome; backend uses Flask, FastAPI-style session management, and robust security features.",
      tech: ["Flask", "Python", "Bootstrap", "Jinja2", "Font Awesome", "qrcode", "Werkzeug", "Pillow", "REST APIs", "JWT Authentication"],
      features: [
        "Secure manufacturer registration with email verification and semi-automatic approval",
        "Advanced batch management with cryptographic QR codes and license validation",
        "AI-powered scan monitoring for suspicious activity detection",
        "Comprehensive admin dashboard with real-time statistics and logs",
        "Support for Excel/CSV and ERP integration for batch data",
        "Tamper detection and alert system to prevent counterfeit medicines"
      ],
      github: "https://github.com/Harshita-HKumawat/MedLock-FakeMedicinePrevention",
      demo: "#"
    },
    {
      name: "WhisperLens – Real-Time AI Subtitle Generator",
      description: "A web application that converts live voice into intelligent subtitles with emotion detection, tone analysis, and contextual understanding, built with a magical Harry Potter theme for immersive accessibility.",
      longDescription: "WhisperLens leverages Next.js, TypeScript, Tailwind CSS, and React to provide real-time voice-to-text conversion, emotion-based subtitle coloring, and speaker identification. The system supports multiple languages (EN/HI/ES), offers customizable UI/UX with magical animations, and allows exporting subtitles in TXT/SRT formats. Designed for accessibility, education, gaming, streaming, and professional communication, WhisperLens provides an engaging, interactive, and immersive experience for all users.",
      tech: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Radix UI", "Lucide React", "CSS Animations", "Google Fonts", "Node.js", "npm/yarn"],
      features: [
        "Live voice-to-text subtitle generation with word-by-word animation",
        "Emotion-based dynamic coloring and tone analysis with emoji tags",
        "Speaker identification for multi-speaker scenarios",
        "Multi-language support (English, Hindi, Spanish)",
        "Customizable interface with font size, theme, and magical effects",
        "Export subtitles in TXT and SRT formats with emotion and speaker tags",
        "Harry Potter themed magical UI/UX with floating candles, sparkles, and animations"
      ],
      github: "https://github.com/Harshita-HKumawat/WhisperLens",
      demo: "#"
    }
  ];

  const experiences = [
    {
      role: "Frontend Web Developer Trainee",
      company: "SouthFuego",
      location: "Jaipur",
      duration: "June 2025 - July 2025",
      description: "Completed a 45-day Frontend Web Developer Training Program, gaining hands-on experience in HTML, CSS, JavaScript, and responsive web design. Developed interactive, user-friendly applications while strengthening debugging, UI/UX optimization, and problem-solving skills.",
      achievements: [
        "Built responsive and interactive web applications using HTML, CSS, and JavaScript",
        "Enhanced debugging and problem-solving skills through practical exercises",
        "Optimized UI/UX for better user experience and accessibility",
        "Gained practical experience in front-end development workflows and best practices"
      ],
      skills: ["HTML", "CSS", "JavaScript", "Responsive Design", "UI/UX Optimization", "Debugging", "Front-end Development"]
    },

    {
      role: "Intern – Control and Instrumentation",
      company: "Rajasthan Rajya Vidyut Utpadan Nigam Ltd. (RRVUNL)",
      location: "Suratgarh Super Thermal Power Plant, Rajasthan",
      duration: "June 2023",
      description: "Completed a 15-day training at the 2x660MW Super Critical Thermal Power Project, gaining hands-on experience with SCADA, DCS, and industrial automation systems. Learned real-time monitoring, PLC-based control, and integration of sensors and actuators for automation.",
      achievements: [
        "Gained practical experience with SCADA and DCS systems for power plant operations",
        "Worked on PLC-based control and integration of sensors and actuators",
        "Understood real-time monitoring and automation workflows in a thermal power plant",
        "Enhanced technical knowledge of industrial control and instrumentation systems"
      ],
      skills: ["SCADA", "DCS", "PLC Programming", "Industrial Automation", "Sensors & Actuators", "Real-time Monitoring", "Instrumentation"]
    }
  ];

  const achievements = [
    {
      title: "1st Runner-Up, AI for Quality Hackathon",
      description: "Achieved 1st Runner-Up position at the ‘AI for Quality’ Hackathon organized by IFQM and BMU Gurgaon. Selected among 1,700+ teams through quiz and prototype rounds to reach the Grand Finale.",
      icon: <Award className="w-6 h-6" />,
      year: "2025"
    },
    {
      title: "Finalist, Codefiesta 2.0 Hackathon",
      description: "Selected as a Finalist in CODEFIESTA 2.0, a 24-hour national-level hackathon organized by the Global Institute of Technology, Jaipur. Our team was shortlisted among the Top 12 finalists after multiple competitive rounds focused on problem-solving, coding, and innovative solution design under time constraints.",
      icon: <Trophy className="w-6 h-6" />,
      year: "2023"
    },
    {
      title: "2nd place, CodingQuest",
      description: "Cleared Round 1 – AlgoQuiz (DSA MCQ Faceoff) and advanced to the CodingQuest – DSA Problem Solving Round. Secured 2nd place in Round 2, which tested practical problem-solving skills with optimized coding solutions focusing on edge cases, time & space efficiency, and clean code.",
      icon: <Users className="w-6 h-6" />,
      year: "2025"
    }
  ];

  const scrollToSection = (sectionId: string) => {
    setActiveSection(sectionId);
    setIsMobileMenuOpen(false);
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
  };

  const nextProject = () => {
    setCurrentProjectIndex((prev) => (prev + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const navItems = [
    { id: 'about', name: 'About' },
    { id: 'experience', name: 'Experience' },
    { id: 'projects', name: 'Projects' },
    { id: 'skills', name: 'Skills' },
    { id: 'achievements', name: 'Achievements' },
    { id: 'contact', name: 'Contact' }
  ];

  return (
    <div className="min-h-screen w-full bg-background font-sk-pro overflow-x-hidden">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-lg border-b border-border shadow-soft">
        <div className="section-container">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-3">
              {/* Logo or brand space - currently empty */}
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => scrollToSection(item.id)}
                  className={`hover:text-orange-500 transition-colors relative font-medium ${activeSection === item.id ? 'text-orange-500' : 'text-foreground'
                    }`}
                >
                  {item.name}
                  {activeSection === item.id && (
                    <div className="absolute -bottom-1 left-0 w-full h-0.5 bg-gradient-to-r from-orange-500 to-amber-500 rounded-full"></div>
                  )}
                </button>
              ))}
            </div>

            {/* Social Links */}
            <div className="hidden md:flex items-center space-x-4">
              <a href="https://github.com/Harshita-HKumawat" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-500 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="http://www.linkedin.com/in/harshita-kumawat-b19119263" target="_blank" rel="noopener noreferrer" className="text-foreground hover:text-orange-500 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="md:hidden text-foreground hover:text-orange-500 transition-colors"
            >
              {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMobileMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="space-y-4">
                {navItems.map((item) => (
                  <button
                    key={item.id}
                    onClick={() => scrollToSection(item.id)}
                    className="block w-full text-left font-medium text-foreground hover:text-orange-500 transition-colors"
                  >
                    {item.name}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={vantaRef} id="about" className="pt-20 md:pt-24 pb-20 relative overflow-hidden" style={{ minHeight: '100vh' }}>
        <div className="section-container relative z-10">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center min-h-[80vh]">
            {/* Left Content */}
            <div className={`transform transition-all duration-1000 ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0'
              }`}>
              <div className="space-y-4 md:space-y-6">

                <h1 className={`text-3xl md:text-4xl lg:text-5xl xl:text-6xl text-white leading-tight drop-shadow-2xl transition-all duration-500 ${fonts[currentFontIndex]}`}>
                  Harshita Kumawat
                </h1>

                <div className="space-y-2 md:space-y-4">
                  <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-normal">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">Developer from</span>
                  </h2>
                  <h2 className="text-xl md:text-3xl lg:text-3xl xl:text-4xl font-normal">
                    <span className="bg-gradient-to-r from-orange-400 via-orange-500 to-amber-400 bg-clip-text text-transparent">Rajasthan, India</span>
                  </h2>
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-4 md:pt-6">
                  <a
                    href="/Harshita Kumawat.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-2 border border-orange-400/30"
                  >
                    <span>VIEW RESUME</span>
                    <ExternalLink className="w-5 h-5" />
                  </a>
                  <button
                    onClick={() => scrollToSection('contact')}
                    className="bg-white/10 backdrop-blur-sm border border-orange-400/30 text-white px-6 py-3 rounded-2xl font-semibold transition-all duration-300 transform hover:scale-105 hover:bg-orange-500/20 hover:shadow-2xl"
                  >
                    Get In Touch
                  </button>
                </div>

                <div className="pt-4 md:pt-6 flex items-center space-x-1 text-orange-200">
                  <span>Scroll Down</span>
                  <ChevronDown className="w-4 h-4 animate-bounce" />
                </div>
              </div>
            </div>

            {/* Right - Hero Illustration */}
            <div className="lg:col-span-1 order-first lg:order-last">
              <div className="relative">
                <div className="floating-element">
                  <div className="w-full max-w-sm md:max-w-lg mx-auto h-64 md:h-80 lg:h-96 bg-gradient-to-br from-orange-500/10 to-amber-500/10 backdrop-blur-sm rounded-3xl flex items-center justify-center shadow-2xl overflow-hidden border border-orange-400/30">
                    <img
                      src="/prof.jpg"
                      alt="Harshita Kumawat"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>

                {/* Enhanced Floating Elements */}
                <div className="absolute top-10 left-10 w-12 h-12 md:w-16 md:h-16 bg-orange-400/25 rounded-full blur-xl floating-element animate-pulse" style={{ animationDelay: '1s' }}></div>
                <div className="absolute bottom-20 right-10 w-16 h-16 md:w-20 md:h-20 bg-amber-400/20 rounded-full blur-xl floating-element animate-pulse" style={{ animationDelay: '2s' }}></div>
                <div className="absolute top-1/2 -left-8 w-8 h-8 md:w-12 md:h-12 bg-orange-300/30 rounded-full blur-xl floating-element animate-pulse" style={{ animationDelay: '0.5s' }}></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="section-container">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-foreground mb-6 md:mb-8">About Me</h2>
              <div className="space-y-4 md:space-y-6">
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  A tireless developer that works against the clock to squeeze as much learning into a day.
                </p>
                <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                  I am passionate about software and web development, driven by a curiosity to build, experiment, and innovate. Currently pursuing Computer Science and Engineering at Mahila Engineering College, Ajmer.I enjoy exploring new technologies, mastering diverse tools, and transforming ideas into impactful projects.
                </p>
                <div className="grid grid-cols-2 gap-4 md:gap-6 pt-4 md:pt-6">
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">2026</div>
                    <div className="text-sm md:text-base text-muted-foreground">Graduation</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">2+</div>
                    <div className="text-sm md:text-base text-muted-foreground">Internships</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">5+</div>
                    <div className="text-sm md:text-base text-muted-foreground">Projects</div>
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-orange-500 to-amber-500 bg-clip-text text-transparent">10+</div>
                    <div className="text-sm md:text-base text-muted-foreground">Hackathons</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="flex justify-center order-first lg:order-last">
              <div className="relative">
                <div className="w-64 h-64 md:w-80 md:h-80 rounded-3xl overflow-hidden shadow-strong">
                  <img
                    src="/me.jpg"
                    alt="Harshita Kumawat - About Me"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 bg-white px-3 md:px-4 py-2 rounded-2xl shadow-medium">
                  <div className="flex items-center space-x-2">
                    <MapPin className="w-3 h-3 md:w-4 md:h-4 text-orange-500" />
                    <span className="font-semibold text-foreground text-sm md:text-base">Rajsamand, India</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20" style={{ backgroundColor: '#222222' }}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Professional Experience</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              A journey through impactful internships and technical contributions across leading technology companies
            </p>
          </div>

          <div className="space-y-8">
            {experiences.map((exp, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-soft card-hover border border-orange-400/20">
                <div className="grid lg:grid-cols-4 gap-8">
                  <div className="lg:col-span-1">
                    <div className="text-orange-400 font-semibold text-sm mb-2">{exp.duration}</div>
                    <h3 className="text-2xl font-bold text-white mb-2">{exp.role}</h3>
                    <p className="text-orange-400 font-semibold text-lg mb-1">{exp.company}</p>
                    <p className="text-gray-300 text-sm">{exp.location}</p>
                  </div>

                  <div className="lg:col-span-3">
                    <p className="text-gray-300 mb-6 leading-relaxed">{exp.description}</p>

                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-4">Key Achievements</h4>
                      <ul className="grid md:grid-cols-2 gap-3">
                        {exp.achievements.map((achievement, i) => (
                          <li key={i} className="flex items-start space-x-3">
                            <div className="w-2 h-2 bg-orange-400 rounded-full mt-2 flex-shrink-0"></div>
                            <span className="text-gray-300 text-sm">{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h4 className="text-white font-semibold mb-3">Technologies Used</h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.skills.map((skill, i) => (
                          <span key={i} className="px-3 py-1 bg-orange-500/20 text-orange-300 rounded-lg text-sm border border-orange-400/30">
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Featured Projects</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Innovative solutions combining cutting-edge technologies to solve real-world problems
            </p>
          </div>

          <div className="relative">
            {/* Navigation Arrows */}
            <button
              onClick={prevProject}
              className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-orange-500 hover:text-white group"
              style={{ marginLeft: '-20px' }}
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            <button
              onClick={nextProject}
              className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white rounded-full p-3 shadow-soft hover:shadow-medium transition-all duration-300 hover:bg-orange-500 hover:text-white group"
              style={{ marginRight: '-20px' }}
            >
              <ChevronRight className="w-6 h-6" />
            </button>

            {/* Project Display */}
            <div className="bg-gradient-card rounded-3xl p-8 shadow-soft card-hover transition-all duration-500">
              <div className="grid lg:grid-cols-3 gap-8">
                <div className="lg:col-span-2">
                  <h3 className="text-3xl font-bold text-foreground mb-4">{projects[currentProjectIndex].name}</h3>
                  <p className="text-muted-foreground mb-6 leading-relaxed text-lg">{projects[currentProjectIndex].description}</p>
                  <p className="text-muted-foreground/80 mb-8 leading-relaxed">{projects[currentProjectIndex].longDescription}</p>

                  <div className="mb-8">
                    <h4 className="text-foreground font-semibold mb-4 text-lg">Key Features</h4>
                    <ul className="grid md:grid-cols-2 gap-3">
                      {projects[currentProjectIndex].features.map((feature, i) => (
                        <li key={i} className="flex items-start space-x-3">
                          <div className="w-2 h-2 bg-orange-500 rounded-full mt-2 flex-shrink-0"></div>
                          <span className="text-muted-foreground text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="flex space-x-4">
                    <a href={projects[currentProjectIndex].github} className="bg-foreground text-white px-6 py-3 rounded-2xl font-semibold transition-all hover:bg-foreground/90 flex items-center space-x-2">
                      <Github className="w-5 h-5" />
                      <span>View Code</span>
                    </a>
                  </div>
                </div>

                <div className="lg:col-span-1">
                  <div className="bg-muted/50 rounded-2xl p-6 h-full">
                    <h4 className="text-foreground font-semibold mb-4">Tech Stack</h4>
                    <div className="flex flex-wrap gap-2">
                      {projects[currentProjectIndex].tech.map((tech, i) => (
                        <span key={i} className="px-3 py-2 bg-orange-100 text-orange-600 rounded-lg text-sm border border-orange-200">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Project Indicators */}
            <div className="flex justify-center space-x-3 mt-8">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentProjectIndex(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentProjectIndex
                      ? 'bg-orange-500 scale-125'
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                    }`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="py-20" style={{ backgroundColor: '#222222' }}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Technical Skills</h2>
            <p className="text-gray-300 text-lg">
              A comprehensive toolkit spanning multiple programming languages, frameworks, and technologies
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-4">
            {skills.map((skill, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 shadow-soft card-hover text-center group border border-orange-400/20">
                <span className="text-white group-hover:text-orange-400 transition-colors font-medium">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section id="achievements" className="py-20 bg-white">
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-4">Achievements & Recognition</h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Academic excellence and competitive programming achievements that demonstrate consistent performance
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {achievements.map((achievement, index) => (
              <div key={index} className="bg-gradient-to-br from-orange-50 to-amber-50 rounded-3xl p-8 shadow-soft card-hover group border border-orange-100">
                <div className="text-orange-500 mb-4 group-hover:scale-110 transition-transform">
                  {achievement.icon}
                </div>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="text-xl font-bold text-foreground group-hover:text-orange-600 transition-colors">{achievement.title}</h3>
                  <span className="text-orange-500 text-sm font-semibold">{achievement.year}</span>
                </div>
                <p className="text-muted-foreground leading-relaxed">{achievement.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20" style={{ backgroundColor: '#222222' }}>
        <div className="section-container">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-white mb-4">Let's Connect</h2>
            <p className="text-gray-300 text-lg max-w-2xl mx-auto">
              Ready to collaborate on exciting projects? Let's discuss how we can build something amazing together.
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Mail className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">Email</p>
                    <p className="text-white font-semibold">sbn.harshitak@gmail.com</p>
                  </div>
                </div>


                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Linkedin className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">LinkedIn</p>
                    <a href="http://www.linkedin.com/in/harshita-kumawat-b19119263" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-400 transition-colors">
                      Connect with me
                    </a>
                  </div>
                </div>

                <div className="flex items-center space-x-4 p-6 bg-white/10 backdrop-blur-sm rounded-2xl shadow-soft border border-orange-400/20">
                  <div className="w-12 h-12 bg-orange-500/20 rounded-xl flex items-center justify-center border border-orange-400/30">
                    <Github className="w-6 h-6 text-orange-400" />
                  </div>
                  <div>
                    <p className="text-gray-300 text-sm">GitHub</p>
                    <a href="https://github.com/Harshita-HKumawat" target="_blank" rel="noopener noreferrer" className="text-white font-semibold hover:text-orange-400 transition-colors">
                      View my repositories
                    </a>
                  </div>
                </div>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 shadow-soft border border-orange-400/20">
                <h3 className="text-2xl font-bold text-white mb-6">Current Status</h3>
                <div className="space-y-4">
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full animate-pulse"></div>
                    <span className="text-gray-300">Available for internships</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Open to collaboration</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <div className="w-3 h-3 bg-amber-400 rounded-full"></div>
                    <span className="text-gray-300">Learning new technologies</span>
                  </div>
                </div>

                <div className="mt-8 p-6 bg-orange-500/10 rounded-2xl border border-orange-400/30">
                  <p className="text-gray-300 text-sm leading-relaxed">
                    "I'm passionate about creating innovative solutions that bridge the gap between technology and human needs.
                    Let's build something extraordinary together!"
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 border-t border-orange-400/30" style={{ backgroundColor: '#222222' }}>
        <div className="section-container">
          <div className="flex flex-col md:flex-row justify-center items-center">
            <div className="flex space-x-6">
              <a href="https://github.com/Harshita-HKumawat" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Github className="w-5 h-5" />
              </a>
              <a href="http://www.linkedin.com/in/harshita-kumawat-b19119263" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Linkedin className="w-5 h-5" />
              </a>
              <a href="#" className="text-gray-400 hover:text-orange-400 transition-colors">
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Portfolio;