import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { Github, ExternalLink, Eye, Filter, Search } from 'lucide-react';

const ProjectsPage: React.FC = () => {
  const [selectedProject, setSelectedProject] = useState<number | null>(null);
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const projects = [
    {
      id: 1,
      title: 'AI-Powered Resume Builder',
      description: 'Effortlessly Craft a Standout Resume with Our AI-Powered Resume Builder',
      longDescription: 'BuilderBuddy is an intelligent resume-building platform that leverages AI to analyze user input and generate personalized, ATS-friendly resumes. Integrated with Strapi CMS for content control and Clerk for authentication, it’s deployed on Vercel for lightning-fast performance.',
      image: './projects/project1.png',
      technologies: ['React', 'Tailwind CSS', 'Shadcn UI', 'Clerk Auth', 'Gemini LLM', 'Strapi CMS', 'PostgreSQL', 'Vercel'],
      category: 'web',
      githubUrl: 'https://github.com/freebird-prod/ai-resume-builder',
      liveUrl: 'https://builderbuddy.vercel.app',
      featured: true,
    },
    {
      id: 2,
      title: 'AI-Powered Content Generator',
      description: 'Revolutionize our content creation with our Al-Powered app, delivering engaging and high-quality text in seconds.',
      longDescription: 'An AI-powered content generation platform that delivers intelligent, high-quality text outputs tailored to user needs. Features include real-time content generation tools, contextual rewriting, and seamless multi-language support, all driven by cutting-edge machine learning models.',
      image: './projects/project2.png',
      technologies: ['Next.js', 'Tailwind CSS', 'Shadcn UI', 'Clerk Auth', 'Gemini LLM', 'PostgreSQL', 'Vercel'],
      category: 'web',
      githubUrl: 'https://github.com/freebird-prod',
      liveUrl: 'https://ai-content-gen-freebird.vercel.app',
      featured: false,
    },
    {
      id: 3,
      title: 'AI-Powered Image Generator',
      description: 'Generate stunning visuals from text prompts using cutting-edge AI models.',
      longDescription: 'An intelligent image generation platform that transforms user prompts into high-quality visuals using advanced neural networks. Features include prompt-based rendering, style customization, resolution scaling, and download options. Built with a robust full-stack architecture for seamless user experience and lightning-fast generation.',
      image: './projects/project3.png',
      technologies: ['HTML 5', 'CSS 3', 'JavaScript', 'Hugging Face LLM', 'LocalStorage'],
      category: 'web',
      githubUrl: 'https://github.com/freebird-prod/ai-imagen',
      liveUrl: 'https://neuro-canvas.vercel.app',
      featured: false,
    },
    {
      id: 4,
      title: 'AI-Powered Resume Analyzer',
      description: 'Smart resume screening tool that extracts skills and analyzes job fit using AI.',
      longDescription: 'An intelligent resume analysis platform that uses advanced NLP and Gemini LLM to extract key details like name, email, and technical skills. It evaluates job-resume fit, provides match scores, suggests suitable roles, and offers a clean UI with PDF previews and email outreach without a backend database, leveraging LocalStorage and frontend APIs.',
      image: './projects/project4.png',
      technologies: ['React', 'Tailwind CSS', 'Shadcn UI', 'Python (Flask)', 'Node.js', 'NLP', 'Gemini LLM', 'LocalStorage', 'Vercel'],
      category: 'web',
      githubUrl: 'https://github.com/freebird-prod/hire-sense',
      liveUrl: 'https://hiresense-ai.vercel.app',
      featured: true,
    },
    {
      id: 5,
      title: 'Amaran Fanhub - Fan Website',
      description: 'A vibrant community portal celebrating actor Amaran’s legacy with media, news, and fan interactions.',
      longDescription: 'A dynamic fan website dedicated to the iconic actor Amaran, featuring a media gallery, latest news updates, fan forums, polls, and interactive timelines of his filmography. Built to connect fans with exclusive content, behind-the-scenes features, and event announcements, all wrapped in a visually engaging and mobile-optimized design.',
      image: './projects/project5.png',
      technologies: ['React', 'Tailwind CSS', 'Framer Motion', 'Groq LLM', 'Typescript'],
      category: 'entertainment',
      githubUrl: 'https://github.com/freebird-prod/amaran-fanhub',
      liveUrl: 'https://amaran-fan-hub.vercel.app',
      featured: true,
    },
    {
      id: 6,
      title: 'Brand Mint - Logo Maker',
      description: 'Design beautiful, custom logos with full creative control—no design experience needed.',
      longDescription: 'Brand Mint is a modern logo creation tool that empowers users to craft unique, high-quality logos manually. Featuring an intuitive interface with customizable icons, fonts, and color palettes, it makes branding accessible to everyone. Export high-resolution logos with ease using built-in canvas tools—perfect for startups, freelancers, and creators building their visual identity from scratch.',
      image: './projects/project6.png',
      technologies: ['React', 'Tailwind CSS', 'Shadcn UI', 'LocalStorage', 'HTML2Canvas'],
      category: 'web',
      githubUrl: 'https://github.com/freebird-prod',
      liveUrl: 'https://brand-mint.vercel.app',
      featured: false,
    },
    {
      id: 7,
      title: 'Popcorn Path - Movie Finder',
      description: 'Discover trending movies, browse genres, and track your watchlist with ease.',
      longDescription: 'Popcorn Path is an intuitive movie discovery platform powered by the TMDB API. Users can explore trending films, browse by genre, search for specific titles, and manage their personal watchlist. Featuring a sleek UI, real-time data fetching, and smooth interactions, it delivers a binge-worthy experience for movie buffs and casual viewers alike.',
      image: './projects/project7.png',
      technologies: ['React', 'Tailwind CSS', 'Appwrite', 'TMDB API'],
      category: 'entertainment',
      githubUrl: 'https://github.com/freebird-prod/movie-app',
      liveUrl: 'https://popcorn-path.vercel.app',
      featured: true,
    },
    {
      id: 8,
      title: 'Elev Ocean - Sea Level Rise Predictor',
      description: 'Predict sea level trends using climate data and statistical models.',
      longDescription: 'Elev Ocean is a data-driven tool that forecasts sea level rise using statistical models like Random Forest and SVM. It features interactive charts and coastal impact visuals, helping users explore potential changes based on historical climate data. Built with Streamlit and Seaborn for a clean, user-friendly interface.',
      image: './projects/project8.png',
      technologies: ['Python', 'Streamlit', 'Random Forest', 'SVM', 'Seaborn'],
      category: 'ai',
      githubUrl: 'https://github.com/freebird-prod/Elev-Ocean-',
      liveUrl: 'https://elev-oceanfinder.onrender.com',
      featured: false,
    },
    {
      id: 9,
      title: 'ForestFire - Prediction and Prevention',
      description: 'Monitor and predict forest fire risks using environmental data and machine learning.',
      longDescription: 'ForestFire is a real-time wildfire prediction and monitoring tool that uses environmental parameters like temperature, humidity, and wind speed to assess fire risk. Leveraging models like Random Forest and SVM, it provides early warnings and visual insights to support proactive forest management. Built with Streamlit for simplicity and Seaborn for rich data visualizations.',
      image: './projects/project9.jpg',
      technologies: ['React Native', 'Nativewind', 'Random Forest', 'IOT'],
      category: 'iot',
      status: true,
      githubUrl: 'https://github.com/freebird-prod/ForestFire',
      liveUrl: 'https://forestfire-predictor.onrender.com',
      featured: false,
    },
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web', label: 'Web Development' },
    { id: 'ai', label: 'AI/ML' },
    { id: 'iot', label: 'IoT' },
    { id: 'entertainment', label: 'Entertainment' },
  ];

  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'all' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h1 className="text-4xl sm:text-6xl lg:text-8xl font-bold mb-6 lg:mb-8">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                My Projects
              </span>
            </h1>
            <p className="text-xl lg:text-2xl text-gray-400 max-w-4xl mx-auto">
              Showcasing innovative solutions and cutting-edge technologies
            </p>
          </motion.div>

          {/* Search and Filter */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            className="mb-12 lg:mb-16"
          >
            {/* Search Bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
              <input
                type="text"
                placeholder="Search projects..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-12 pr-4 py-3 lg:py-4 bg-gray-800/50 border border-gray-700 rounded-full focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20 transition-colors text-white placeholder-gray-400"
              />
            </div>

            {/* Category Filter */}
            <div className="flex flex-wrap justify-center gap-3 lg:gap-4">
              {categories.map((category) => (
                <motion.button
                  key={category.id}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  onClick={() => setSelectedCategory(category.id)}
                  className={`flex items-center gap-2 px-4 lg:px-6 py-2 lg:py-3 rounded-full font-medium transition-all duration-300 ${selectedCategory === category.id
                    ? 'bg-gradient-to-r from-purple-700 via-pink-600 to-violet-600 text-white shadow-lg'
                    : 'bg-gray-800/50 text-gray-400 hover:text-pink-400 hover:bg-gray-700/50 border border-gray-700/50'
                    }`}
                >
                  <Filter size={16} />
                  {category.label}
                </motion.button>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="pb-14 lg:pb-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-6 lg:gap-8"
          >
            {filteredProjects.map((project) => (
              <motion.div
                key={project.id}
                variants={itemVariants}
                whileHover={{ y: -10, scale: 1.02 }}
                className={`relative group cursor-pointer ${project.featured ? 'col-span-1 sm:col-span-2' : ''
                  }`}
                onClick={() => setSelectedProject(project.id)}
              >
                <div className="relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300 h-[420px] sm:h-[450px] md:h-[480px] lg:h-[500px]">
                  {project.featured && (
                    <div className="absolute top-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-purple-700 via-pink-600 to-violet-600 text-white text-xs font-semibold rounded-full">
                      Featured
                    </div>
                  )}

                  {project.status && (
                    <div className="absolute bottom-4 right-4 z-10 px-3 py-1 bg-gradient-to-r from-green-700 via-gray-700 to-orange-600 text-white text-xs font-semibold rounded-full">
                      In Progress
                    </div>
                  )}

                  <div className="relative h-40 sm:h-48 md:h-52 lg:h-56 xl:h-60 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent" />

                    {/* Hover Overlay */}
                    <div className="absolute inset-0 bg-cyan-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <Eye size={32} className="text-white" />
                    </div>
                  </div>

                  <div className="p-4 sm:p-6 lg:p-8">
                    <h3 className="text-base sm:text-lg lg:text-xl font-bold text-white mb-2 sm:mb-3 lg:mb-4 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-3 sm:mb-4 lg:mb-6 line-clamp-3 text-sm lg:text-base">
                      {project.description}
                    </p>

                    <div className="flex flex-wrap gap-2 mb-3 sm:mb-4 lg:mb-6">
                      {project.technologies.slice(0, 3).map((tech) => (
                        <span
                          key={tech}
                          className="px-3 py-1 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-full text-xs lg:text-sm font-medium text-cyan-300"
                        >
                          {tech}
                        </span>
                      ))}
                      {project.technologies.length > 3 && (
                        <span className="px-3 py-1 bg-gray-700/50 rounded-full text-xs lg:text-sm font-medium text-gray-400">
                          +{project.technologies.length - 3} more
                        </span>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          {filteredProjects.length === 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-center py-16 lg:py-24"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-gray-400 mb-4">No projects found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </motion.div>
          )}
        </div>
      </section>


      {/* Project Modal */}
      {selectedProject && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 bg-black/80 backdrop-blur-md pt-[5rem] flex items-center justify-center px-10 h-screen overscroll-y-none sm:px-16"
          onClick={() => setSelectedProject(null)}
        >
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.95, opacity: 0 }}
            transition={{ duration: 0.3, ease: 'easeInOut' }}
            className="relative w-full max-w-3xl mx-auto bg-gradient-to-br from-gray-900/80 to-gray-800/90 shadow-2xl border border-gray-700 text-white rounded-xl backdrop-blur-xl"
            onClick={(e) => e.stopPropagation()}
          >

            {(() => {
              const project = projects.find((p) => p.id === selectedProject);
              if (!project) return null;

              return (
                <>
                  {/* Banner */}
                  <div className="relative h-56 sm:h-[15.2rem] overflow-hidden rounded-t-xl">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover object-center"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/30 to-transparent" />
                    <div className="absolute bottom-4 left-6 text-left">
                      <h2 className="text-2xl sm:text-3xl font-bold text-white drop-shadow-lg">
                        {project.title}
                      </h2>
                    </div>
                  </div>

                  {/* Scrollable Body */}
                  <div className="overflow-y-auto max-h-[70vh] px-6 py-6 sm:px-8 sm:py-8 space-y-6">
                    <p className="text-gray-300 text-sm sm:text-base leading-relaxed">
                      {project.longDescription}
                    </p>

                    <div>
                      <h4 className="text-cyan-400 font-semibold mb-4 text-lg">
                        🖥️ Tech Stack
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-3 py-1 text-xs sm:text-sm bg-gray-800 text-cyan-300 rounded-full border border-cyan-500/30"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Buttons */}
                    <div className="flex flex-wrap gap-4 pt-2">
                      <motion.a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gray-900 border border-gray-700 rounded-xl text-sm hover:bg-gray-800 transition"
                      >
                        <Github size={18} className="text-cyan-400" />
                        GitHub
                      </motion.a>

                      <motion.a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-purple-800 via-pink-700 to-violet-800 text-white rounded-xl text-sm shadow-lg"
                      >
                        <ExternalLink size={18} />
                        Live Demo
                      </motion.a>
                    </div>
                  </div>
                </>
              );
            })()}
          </motion.div>
        </motion.div>
      )}

    </div>
  );
};

export default ProjectsPage;