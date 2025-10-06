import React, { useState } from "react";
import { motion, Variants } from "framer-motion";
import { GraduationCap, Target, Code, Zap, Brain, Rocket, Star, Sparkles, Globe } from "lucide-react";
import SkillModal from "../components/SkillModal";
import TechStackRadar from "../components/TechStackRadar";

const AboutPage: React.FC = () => {
  const [selectedSkill, setSelectedSkill] = useState<any>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const skillsData = [
    {
      name: "HTML5",
      proficiency: 90,
      experience: "4+ years",
      category: "Frontend",
      image: "/html.png",
      description:
        "The backbone of every web page I’ve ever built — from semantic layout to responsive structure. HTML5 is where it all began, and where clean code still lives. It’s not just tags — it’s how the story is told.",
      projects: [
        { name: "Portfolio Website", url: "#" },
        { name: "Responsive Resume Builder", url: "#" },
        { name: "Event Landing Page", url: "#" },
      ],
    },
    {
      name: "CSS3",
      proficiency: 90,
      experience: "4+ years",
      category: "Frontend",
      image: "/css-3.png",
      description:
        "From Flexbox finesse to Grid mastery, CSS3 is my design playground. I sculpt pixels, craft layouts, and animate user dreams into reality — all with style and structure.",
      projects: [
        { name: "Responsive Portfolio", url: "#" },
        { name: "CSS Art Gallery", url: "#" },
        { name: "Themed Blog UI", url: "#" },
      ],
    },
    {
      name: "JavaScript",
      proficiency: 70,
      experience: "3+ years",
      category: "Frontend",
      image: "/js.png",
      description:
        "My first love in web development — the language that powers interactivity and breathes life into the browser. From ES6 tricks to async wizardry, JavaScript is where the magic begins.",
      projects: [
        { name: "Interactive Dashboard", url: "#" },
        { name: "Quiz Web App", url: "#" },
        { name: "Dynamic Form Builder", url: "#" },
      ],
    },
    {
      name: "React",
      proficiency: 95,
      experience: "2+ years",
      category: "Frontend",
      image: "/react.png",
      description:
        "Building sleek, reactive user interfaces with hooks, context, and the virtual DOM. React is where my frontend ideas turn into powerful, performant, pixel-perfect realities.",
      projects: [
        {
          name: "AI-Powered Resume Builder",
          url: "https://builderbuddy.vercel.app",
        },
        { name: "Interactive Portfolio", url: "#" },
        { name: "Voice-to-Text Summarizer", url: "#" },
      ],
    },
    {
      name: "Next.js",
      proficiency: 85,
      experience: "1+ years",
      category: "Fullstack",
      image: "/next.png",
      description:
        "The framework where frontend meets backend in perfect harmony. From blazing-fast SSR to API routes, I use Next.js to ship full-stack experiences that feel instant and seamless.",
      projects: [
        { name: "Dev Portfolio v2", url: "#" },
        { name: "AI-Powered Blog Platform", url: "#" },
      ],
    },
    {
      name: "Framer Motion",
      proficiency: 80,
      experience: "2+ years",
      category: "Frontend",
      image: "/framer.svg",
      description:
        "Framer Motion brings fluidity to the frontend. From smooth transitions to dazzling micro-interactions, I use it to breathe life into static UIs.",
      projects: [
        { name: "Animated Portfolio", url: "#" },
        { name: "Interactive Dashboard", url: "#" },
      ],
    },
    {
      name: "Python",
      proficiency: 60,
      experience: "4+ years",
      category: "Backend",
      image: "/python.png", // Be sure this path points to your actual asset
      description:
        "Clean, elegant, and wildly powerful — Python is my go-to for everything from backend APIs to automation and AI. When readability meets capability, magic happens.",
      projects: [
        { name: "Enterprise Dashboard", url: "#" },
        { name: "Data Cleaning Scripts", url: "#" },
        { name: "FastAPI Backend", url: "#" },
      ],
    },
    {
      name: "Node.js",
      proficiency: 50,
      experience: "1+ years",
      category: "Backend",
      image: "/nodejs.svg",
      description:
        "My go-to for building scalable server-side apps with JavaScript. From REST APIs to real-time systems, Node.js keeps things fast, event-driven, and efficient.",
      projects: [
        { name: "Realtime Chat App", url: "#" },
        { name: "Auth-Enabled Dashboard", url: "#" },
      ],
    },
    {
      name: "PostgreSQL",
      proficiency: 90,
      experience: "2+ years",
      category: "Database",
      image: "/postgre.png",
      description:
        "Reliable, relational, and robust — PostgreSQL is my go-to for structured data. From complex joins to ACID-compliant transactions, it never lets me down.",
      projects: [
        { name: "User Management System", url: "#" },
        { name: "Analytics Dashboard", url: "#" },
      ],
    },
    {
      name: "Firebase",
      proficiency: 75,
      experience: "1+ years",
      category: "Backend",
      image: "/firebase.svg",
      description:
        "From real-time databases to blazing-fast hosting and authentication, Firebase is my go-to for rapid app development and seamless user experiences.",
      projects: [
        { name: "Realtime Chat App", url: "#" },
        { name: "Auth-Enabled Dashboard", url: "#" },
      ],
    },
    {
      name: "Supabase",
      proficiency: 60,
      experience: "1+ years",
      category: "Backend",
      image: "/supabase.svg",
      description:
        "The open-source Firebase alternative — Postgres-powered, real-time, and developer-friendly. I use Supabase to build full-stack apps without the backend headaches.",
      projects: [
        { name: "Realtime Chat App", url: "#" },
        { name: "Auth-Enabled Dashboard", url: "#" },
      ],
    },
    {
      name: "Strapi CMS",
      proficiency: 65,
      experience: "1+ years",
      category: "Backend",
      image: "/strapi.png",
      description:
        "Headless CMS that gives me full control over content and APIs. Perfect for JAMstack sites, blogs, and custom dashboards — all backed by powerful admin features.",
      projects: [
        {
          name: "AI-Powered Resume Builder",
          url: "https://builderbuddy.vercel.app",
        },
        { name: "Blog API with Roles", url: "#" },
      ],
    },
    {
      name: "Figma",
      proficiency: 90,
      experience: "1+ years",
      category: "Frontend",
      image: "/figma.png",
      description:
        "Collaborative interface design tool I use to prototype, wireframe, and create pixel-perfect UI designs. Ideal for frontend collaboration and handoff to developers.",
    },
  ];

  const timeline = [
    {
      id: 1,
      year: "2023",
      title: "Started Engineering",
      description:
        "Began B.Tech. IT at Meenakshi Sundararajan Engineering College",
      icon: GraduationCap,
    },
    {
      id: 2,
      year: "2024",
      title: "First Hackathon",
      description: "Won third place in SA Engineering College Hackathon",
      icon: Zap,
    },
    {
      id: 3,
      year: "2025",
      title: "Internship",
      description:
        "Full Stack Web Development Intern at Triplet Software Solutions",
      icon: Code,
    },
    {
      id: 4,
      year: "2026",
      title: "Future Goals",
      description:
        "Aspiring to become a leading React developer, contribute to impactful open-source projects, and secure a role at a top-tier tech company where innovation meets scale.",
      icon: Target,
    },
    {
      id: 5,
      year: "2027",
      title: "Graduation & Career Launch",
      description:
        "Completed Bachelor of Information Technology with a strong focus on front-end technologies. Dedicated to advancing as a React Developer, contributing to open-source innovations, and joining a visionary tech company where scalability, performance, and design intersect.",
      icon: Rocket,
    },
  ];

  const handleSkillClick = (skill: any) => {
    setSelectedSkill(skill);
    setIsModalOpen(true);

    if (skill.url) {
      window.location.href = skill.url;
    }
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.8,
        ease: "easeOut",
      },
    },
  };

  // New variants for image animations
  const imageVariants: Variants = {
    hidden: { 
      opacity: 0, 
      scale: 0.5, 
      rotateY: -180,
      z: -100 
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 1.2,
        ease: "easeOut",
        delay: 0.3,
      },
    },
  };

  const floatingVariants: Variants = {
    animate: {
      y: [-10, 10, -10],
      rotateZ: [-2, 2, -2],
      transition: {
        duration: 4,
        repeat: Infinity,
        ease: "easeInOut",
      },
    },
  };

  const orbitalVariants: Variants = {
    animate: {
      rotate: 360,
      transition: {
        duration: 20,
        repeat: Infinity,
        ease: "linear",
      },
    },
  };

  return (
    <div className="min-h-screen pt-16 lg:pt-20">
      {/* Hero Section with Profile Image */}
      <section className="py-16 lg:py-24 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-gray-900" />
        
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-cyan-400 rounded-full opacity-30"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                opacity: [0.3, 0.8, 0.3],
                scale: [1, 1.5, 1],
              }}
              transition={{
                duration: 2 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16 lg:mb-24"
          >
            {/* Left Side - Profile Image with Massive Animations */}
            <motion.div
              variants={itemVariants}
              className="relative flex justify-center lg:justify-start"
            >
              {/* Orbital rings */}
              <motion.div
                variants={orbitalVariants}
                animate="animate"
                className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 mx-auto"
              >
                <div className="absolute inset-4 rounded-full border border-cyan-500/20 border-dashed"></div>
              </motion.div>
              
              <motion.div
                variants={orbitalVariants}
                animate="animate"
                style={{ animationDirection: 'reverse' }}
                className="absolute inset-0 w-80 h-80 lg:w-96 lg:h-96 mx-auto"
              >
                <div className="absolute inset-8 rounded-full border border-violet-500/20 border-dotted"></div>
              </motion.div>

              {/* Floating orbs */}
              {[...Array(6)].map((_, i) => (
                <motion.div
                  key={i}
                  className="absolute w-3 h-3 rounded-full bg-gradient-to-r from-cyan-400 to-violet-400 opacity-60"
                  style={{
                    left: `${50 + 40 * Math.cos((i * Math.PI * 2) / 6)}%`,
                    top: `${50 + 40 * Math.sin((i * Math.PI * 2) / 6)}%`,
                  }}
                  animate={{
                    scale: [1, 1.5, 1],
                    opacity: [0.6, 1, 0.6],
                    rotate: 360,
                  }}
                  transition={{
                    duration: 3 + i * 0.5,
                    repeat: Infinity,
                    delay: i * 0.2,
                  }}
                />
              ))}

              {/* Main profile image container */}
              <motion.div
                variants={imageVariants}
                className="relative z-10 w-64 h-64 lg:w-80 lg:h-80"
              >
                <motion.div
                  variants={floatingVariants}
                  animate="animate"
                  className="relative w-full h-full"
                >
                  {/* Gradient border */}
                  <div className="absolute inset-0 rounded-full bg-gradient-to-r from-cyan-500 via-violet-500 to-cyan-500 p-1 bg-size-200 animate-gradient">
                    <div className="w-full h-full rounded-full bg-gray-900 p-2">
                      <div className="w-full h-full rounded-full bg-gradient-to-br from-cyan-400/20 to-violet-400/20 flex items-center justify-center overflow-hidden border-4 border-transparent bg-clip-padding">
                        {/* Profile Image */}
                        <img 
                          src="/creator.png" 
                          alt="Dharun Kumar S H - Portfolio Creator" 
                          className="w-full h-full object-cover rounded-full scale-[1.153]"
                          onError={(e) => {
                            // Fallback to initials if image fails to load
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                            target.parentElement!.innerHTML = `
                              <div class="w-full h-full bg-gradient-to-br from-cyan-400 to-violet-600 rounded-full flex items-center justify-center text-white text-6xl lg:text-8xl font-bold shadow-2xl">
                                DK
                              </div>
                            `;
                          }}
                        />
                      </div>
                    </div>
                  </div>

                  {/* Decorative elements */}
                  <motion.div
                    className="absolute -top-4 -right-4 w-8 h-8 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.2, 1],
                      rotate: [0, 180, 360],
                    }}
                    transition={{
                      duration: 3,
                      repeat: Infinity,
                    }}
                  >
                    <Sparkles size={16} className="text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute -bottom-4 -left-4 w-6 h-6 bg-gradient-to-r from-violet-400 to-cyan-400 rounded-full flex items-center justify-center"
                    animate={{
                      scale: [1, 1.3, 1],
                      rotate: [360, 180, 0],
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: 0.5,
                    }}
                  >
                    <Star size={12} className="text-white" />
                  </motion.div>

                  <motion.div
                    className="absolute top-1/2 -right-8 w-4 h-4 bg-gradient-to-r from-cyan-400 to-violet-400 rounded-full flex items-center justify-center"
                    animate={{
                      x: [0, 10, 0],
                      scale: [1, 1.1, 1],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: 1,
                    }}
                  >
                    <Globe size={8} className="text-white" />
                  </motion.div>
                </motion.div>
              </motion.div>

              {/* Glowing effect */}
              <motion.div
                className="absolute inset-0 w-64 h-64 lg:w-80 lg:h-80 mx-auto rounded-full bg-gradient-to-r from-cyan-500/20 to-violet-500/20 blur-xl"
                animate={{
                  scale: [1, 1.1, 1],
                  opacity: [0.3, 0.6, 0.3],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
              />
            </motion.div>

            {/* Right Side - Hero Content */}
            <motion.div
              variants={containerVariants}
              className="text-center lg:text-left space-y-6 lg:space-y-8"
            >
              <motion.h1
                variants={itemVariants}
                className="text-4xl sm:text-6xl lg:text-7xl font-bold"
              >
                <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  About Me
                </span>
              </motion.h1>
              
              <motion.div
                variants={itemVariants}
                className="space-y-4"
              >
                <h2 className="text-2xl lg:text-3xl font-semibold text-white">
                  Dharun Kumar S H
                </h2>
                <p className="text-xl lg:text-xl text-gray-400 leading-relaxed">
                  Passionate React Developer & UI/UX Enthusiast
                </p>
              </motion.div>

              <motion.p
                variants={itemVariants}
                className="text-lg lg:text-base text-gray-300 leading-relaxed max-w-2xl"
              >
                Passionate about crafting seamless React interfaces and pushing
                the boundaries of modern web development. I transform ideas into
                interactive digital experiences.
              </motion.p>

              <motion.div
                variants={itemVariants}
                className="flex flex-wrap gap-4 justify-center lg:justify-start"
              >
                {[
                  { icon: Code, label: "React Developer", color: "from-cyan-600 to-blue-700" },
                  { icon: Brain, label: "Problem Solver", color: "from-violet-600 to-purple-700" },
                  { icon: Rocket, label: "Innovation Driven", color: "from-pink-600 to-red-700" },
                ].map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    className={`flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r ${badge.color} bg-opacity-20 border border-white/10 backdrop-blur-sm`}
                    whileHover={{ scale: 1.05, y: -2 }}
                    whileTap={{ scale: 0.95 }}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.1 + 1 }}
                  >
                    <badge.icon size={16} className="text-white" />
                    <span className="text-sm font-medium text-white">{badge.label}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>
          </motion.div>

          {/* Main Content Grid */}
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Left Side - About Content */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 lg:space-y-12"
            >
              <motion.div
                variants={itemVariants}
                className="relative p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full flex items-center justify-center">
                  <Brain size={16} className="text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-cyan-400 mb-4 lg:mb-6">
                  My Journey
                </h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  I'm a third-year Information Technology student at Meenakshi
                  Sundararajan Engineering College, passionate about front-end
                  development and constantly honing my skills as an aspiring
                  React developer. I thrive on turning ideas into interactive
                  web experiences and love exploring the latest in modern UI
                  frameworks.
                </p>
              </motion.div>

              <motion.div
                variants={itemVariants}
                className="relative p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-violet-500/50 transition-all duration-300"
              >
                <div className="absolute -top-4 -left-4 w-8 h-8 bg-gradient-to-br from-violet-500 to-cyan-500 rounded-full flex items-center justify-center">
                  <Rocket size={16} className="text-white" />
                </div>
                <h3 className="text-2xl lg:text-3xl font-bold text-violet-400 mb-4 lg:mb-6">
                  What Drives Me
                </h3>
                <p className="text-gray-300 leading-relaxed text-base lg:text-lg">
                  I'm driven by a passion to build web experiences that make a
                  real difference. Whether it’s crafting clean, user-focused
                  React applications, exploring the frontiers of emerging tech,
                  or contributing to open-source projects, I’m constantly
                  seeking ways to turn ideas into impactful solutions.
                </p>
              </motion.div>

              {/* Interactive Skills */}
              <motion.div
                variants={itemVariants}
                className="space-y-4 lg:space-y-6"
              >
                <h3 className="text-2xl lg:text-3xl font-bold text-gray-200 mb-4 lg:mb-6">
                  Interactive Skills
                  <span className="text-sm text-gray-400 ml-2">
                    (Click to explore!)
                  </span>
                </h3>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
                  {skillsData?.map((skill, index) => (
                    <motion.button
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.1 }}
                      whileHover={{ scale: 1.05, y: -2 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => handleSkillClick(skill)}
                      className="p-4 bg-gradient-to-r from-cyan-500/20 to-violet-500/20 border border-cyan-500/30 rounded-xl text-center hover:from-cyan-500/30 hover:to-violet-500/30 transition-all duration-300 group"
                    >
                      <div className="flex justify-center items-center w-full h-16 mb-2">
                        <img
                          src={skill.image}
                          alt={skill.name}
                          className="w-12 h-12 object-contain transition-transform duration-300 group-hover:scale-110"
                          onError={(e) => {
                            (e.target as HTMLImageElement).src =
                              "/fallback.png";
                          }}
                        />
                      </div>
                      <div className="text-sm font-medium text-white truncate">
                        {skill.name}
                      </div>
                      <div className="text-xs text-gray-400 mt-1">
                        {skill.proficiency}%
                      </div>
                    </motion.button>
                  ))}
                </div>
              </motion.div>
            </motion.div>

            {/* Right Side - Timeline */}
            <motion.div
              variants={containerVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="space-y-8 lg:space-y-12"
            >
              <motion.h3
                variants={itemVariants}
                className="text-3xl lg:text-4xl font-bold text-center mb-8 lg:mb-12"
              >
                <span className="bg-gradient-to-r from-violet-400 to-cyan-400 bg-clip-text text-transparent">
                  My Timeline
                </span>
              </motion.h3>

              <div className="relative">
                {/* Timeline Line */}
                <div className="absolute left-6 lg:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 to-violet-500 rounded-full" />

                {timeline.map((item, index) => (
                  <motion.div
                    key={`${item.id}-${index}`}
                    variants={itemVariants}
                    className="relative flex items-start space-x-6 lg:space-x-8 mb-8 lg:mb-12"
                  >
                    {/* Timeline Icon */}
                    <div className="relative z-10 w-12 h-12 lg:w-16 lg:h-16 bg-gradient-to-br from-cyan-500 to-violet-500 rounded-full flex items-center justify-center">
                      <item.icon
                        size={20}
                        className="text-white lg:w-6 lg:h-6"
                      />
                    </div>

                    {/* Timeline Content */}
                    <div className="flex-1 p-4 lg:p-6 rounded-xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300">
                      <div className="flex items-center gap-3 mb-2 lg:mb-3">
                        <span className="text-sm lg:text-base font-semibold text-cyan-400 bg-cyan-400/10 px-3 py-1 rounded-full">
                          {item.year}
                        </span>
                      </div>
                      <h4 className="text-lg lg:text-xl font-bold text-white mb-2 lg:mb-3">
                        {item.title}
                      </h4>
                      <p className="text-gray-400 text-sm lg:text-base">
                        {item.description}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Tech Stack Radar Chart */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Tech Stack Visualization
              </span>
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
            <TechStackRadar />

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="space-y-6"
            >
              <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">
                My Technical Expertise
              </h3>
              <div className="space-y-4">
                {[
                  {
                    area: "Frontend Development",
                    percentage: 95,
                    description:
                      "React, Next.js, Tailwind CSS, Framer Motion, Figma, GSAP",
                  },
                  {
                    area: "Backend Development",
                    percentage: 60,
                    description: "Node.js, Python (Flask), APIs, JWT Token",
                  },
                  {
                    area: "Database Management",
                    percentage: 70,
                    description: "PostgreSQL, Firebase, Supabase, Strapi CMS",
                  },
                  {
                    area: "DevOps & Cloud",
                    percentage: 50,
                    description: "AWS, Azure, Docker",
                  },
                ].map((item, index) => (
                  <motion.div
                    key={item.area}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="p-4 bg-gray-800/30 rounded-lg"
                  >
                    <div className="flex justify-between items-center mb-2">
                      <span className="font-semibold text-white">
                        {item.area}
                      </span>
                      <span className="text-cyan-400 font-bold">
                        {item.percentage}%
                      </span>
                    </div>
                    <p className="text-gray-400 text-sm mb-3">
                      {item.description}
                    </p>
                    <div className="w-full bg-gray-700 rounded-full h-2">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${item.percentage}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: index * 0.2 }}
                        className="bg-gradient-to-r from-cyan-500 to-violet-500 h-2 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Additional Stats Section */}
      <section className="py-16 lg:py-24 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-violet-500/5" />

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-center mb-12 lg:mb-16"
          >
            <h2 className="text-3xl lg:text-5xl font-bold mb-4 lg:mb-6">
              <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                Quick Facts
              </span>
            </h2>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
            {[
              { label: "Current Year", value: "3rd Year" },
              { label: "CGPA", value: "8.35" },
              { label: "Programming Languages", value: "4" },
              { label: "Open Source Contributions", value: "10+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.6 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="text-center p-6 lg:p-8 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-gray-700/50 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="text-2xl lg:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-2 lg:mb-4">
                  {stat.value}
                </div>
                <div className="text-sm lg:text-base text-gray-400 font-medium">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Skill Modal */}
      <SkillModal
        skill={selectedSkill}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedSkill(null);
        }}
      />
    </div>
  );
};

export default AboutPage;
