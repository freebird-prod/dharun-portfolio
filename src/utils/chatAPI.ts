// Client-side chat API utility
export async function sendChatMessage(message: string, conversationHistory: any[] = []) {
  // For demo purposes, we'll use a mock response
  // In production, replace this with actual API call to your backend
  
  const mockResponses = {
    skills: "I'm skilled in JavaScript (95%), React (90%), Python (85%), Node.js (80%), and many other technologies! I love working with modern frameworks and am always learning new ones. Currently diving into Three.js for 3D web experiences! 🚀",
    projects: "I've built some exciting projects! My favorites include an AI-Powered Task Manager using React + Python + TensorFlow, a Blockchain Voting System, and an IoT Smart Home System. Each project taught me something new! Want to know more about any specific one? 💻",
    experience: "I have 2+ years of programming experience and I'm currently in my 3rd year of CSE. I've won hackathons like Smart India Hackathon 2024, completed internships, and earned certifications from AWS and Google Cloud. Always growing! 📈",
    contact: "You can reach me at dharunkumar@example.com or connect with me on GitHub, LinkedIn, and Instagram! I'm always open to collaboration and new opportunities. Feel free to download my resume too! 📧",
    technologies: "I work with a full stack of technologies: Frontend (React, Vue.js, TypeScript), Backend (Python, Node.js), Databases (MongoDB, PostgreSQL), Cloud (AWS, Docker), and I'm exploring AI/ML with TensorFlow! 🛠️",
    default: "That's a great question! I'm passionate about technology and always excited to chat about development, projects, or anything tech-related. What specifically would you like to know about my journey? 🤔"
  };

  // Simple keyword matching for demo
  const lowerMessage = message.toLowerCase();
  let response = mockResponses.default;

  if (lowerMessage.includes('skill') || lowerMessage.includes('technology') || lowerMessage.includes('tech stack')) {
    response = mockResponses.skills;
  } else if (lowerMessage.includes('project') || lowerMessage.includes('work') || lowerMessage.includes('built')) {
    response = mockResponses.projects;
  } else if (lowerMessage.includes('experience') || lowerMessage.includes('background') || lowerMessage.includes('journey')) {
    response = mockResponses.experience;
  } else if (lowerMessage.includes('contact') || lowerMessage.includes('reach') || lowerMessage.includes('email')) {
    response = mockResponses.contact;
  } else if (lowerMessage.includes('hello') || lowerMessage.includes('hi') || lowerMessage.includes('hey')) {
    response = "Hey there! 👋 I'm Dharun's AI assistant. I'm here to tell you all about his skills, projects, and experience. What would you like to know?";
  } else if (lowerMessage.includes('who') || lowerMessage.includes('about')) {
    response = "I represent Dharun Kumar S H, a passionate 3rd-year CSE student and full-stack developer from Chennai! He's all about creating innovative solutions with cutting-edge tech. Want to know about his projects or skills? 🌟";
  }

  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 1000 + Math.random() * 1000));
  
  return response;
}