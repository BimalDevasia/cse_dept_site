// /app/activity/events/eventsData.js
const upcomingEvents = [
  {
    id: 1,
    title: "ML WORKSHOP",
    mode: "Online",
    date: "August 22, 2024",
    time: "7:00 PM IST",
    platform: "Google Meet",
    topics: [
      "Introduction to Machine Learning",
      "Supervised vs Unsupervised Learning",
      "Neural Networks and Deep Learning",
      "Model Evaluation and Tuning",
    ],
    speakers: [
      { name: "Dr. Jane Doe", title: "ML Expert, Tech Institute" },
      { name: "John Smith", title: "Data Scientist, AI Labs" },
    ],
    location: "Online - Google Meet",
    image: "/activity2.png",
    registrationLink: "https://example.com/register",
    descriptions:
      "Are you ready to dive into the world of machine learning and unlock its powerful capabilities? Join us for an engaging and interactive learning session where we'll explore the essentials of machine learning, from fundamentals to advanced concepts. Event Details: 📆 Date: 22nd August 2024🕒 Time: 7PM IST 📍 Platform: Google Meet🎯 What to Expect:🤖 Introduction to Machine Learning:Gain insights into the importance of machine learning, understanding its role in transforming data into actionable insights.📊 Key Machine Learning Concepts:Learn about supervised and unsupervised learning, feature engineering, and model evaluation techniques. 🛠️ Building ML Models: Discover best practices for building machine learning models, including data preprocessing, algorithm selection, and hyperparameter tuning.🔍 Monitoring and Model Management: Explore tools and techniques for monitoring ML models, evaluating their performance, and managing model lifecycle effectively.🚀 Advanced Machine Learning Practices: Get an overview of advanced machine learning techniques, such as deep learning, reinforcement learning, and integrating ML into production systems. Register now to embark on a journey filled with machine learning insights and skills! 🌐🤖 #CSEDepartment #MachineLearning #TechLearning #MLWorkshop 4o",
  },
  {
    id: 2,
    title: "AI in Healthcare",
    description:
      "Explore how artificial intelligence is revolutionizing healthcare with real-world applications and case studies.",
    mode: "Hybrid",
    date: "September 10, 2024",
    time: "5:00 PM IST",
    platform: "Zoom & Onsite",
    topics: [
      "AI in Diagnostics",
      "Predictive Analytics in Healthcare",
      "AI-Powered Treatment Plans",
      "Ethics in AI for Healthcare",
    ],
    speakers: [
      { name: "Dr. Alan Turing", title: "Professor, AI and Medicine" },
      { name: "Emily Watson", title: "Clinical Data Analyst, HealthTech" },
    ],
    location: "Tech Convention Center, Room 101 & Online",
    image: "/activity_healthcare.png",
    registrationLink: "https://example.com/register",
  },
  {
    id: 3,
    title: "Data Science Bootcamp",
    description:
      "A comprehensive bootcamp covering everything from data preprocessing to advanced machine learning techniques.",
    mode: "Onsite",
    date: "October 5, 2024",
    time: "10:00 AM IST",
    platform: "Onsite Only",
    topics: [
      "Data Wrangling and Preprocessing",
      "Exploratory Data Analysis",
      "Machine Learning Algorithms",
      "Deployment of ML Models",
    ],
    speakers: [
      { name: "Samantha Carter", title: "Lead Data Scientist, DataCorp" },
      { name: "Dr. Mike Ross", title: "Senior Researcher, BigData Labs" },
    ],
    location: "Tech Convention Center, Room 205",
    image: "/activity_datascience.png",
    registrationLink: "https://example.com/register",
  },
  {
    id: 4,
    title: "Natural Language Processing",
    description:
      "Dive deep into the world of NLP with hands-on sessions and case studies on real-world applications.",
    mode: "Online",
    date: "November 15, 2024",
    time: "6:00 PM IST",
    platform: "Microsoft Teams",
    topics: [
      "Text Processing Techniques",
      "Sentiment Analysis",
      "Language Models and Transformers",
      "Speech Recognition",
    ],
    speakers: [
      { name: "Dr. Amy Farrah Fowler", title: "NLP Specialist, AI University" },
      { name: "Raj Patel", title: "AI Researcher, NLP Labs" },
    ],
    location: "Online - Microsoft Teams",
    image: "/activity_nlp.png",
    registrationLink: "https://example.com/register",
  },
];

const pastEvents = [
  {
    id: 1,
    title: "Big Data Analytics Conference",
    description:
      "A deep dive into big data technologies, tools, and strategies for turning data into actionable insights.",
    mode: "Onsite",
    date: "May 20, 2024",
    time: "9:00 AM IST",
    platform: "Onsite Only",
    topics: [
      "Introduction to Big Data",
      "Data Warehousing",
      "Real-time Data Processing",
      "Big Data in Cloud",
    ],
    speakers: [
      { name: "George R.R. Data", title: "Data Architect, BigDataCo" },
      { name: "Sara Connor", title: "Data Engineer, FutureTech" },
    ],
    location: "Tech Convention Center, Main Hall",
    image: "/activity_bigdata.png",
    registrationLink: null, // Past event, no registration
  },
  {
    id: 2,
    title: "AI for Business Leaders",
    description:
      "A strategic look at how AI can drive business innovation and create competitive advantages.",
    mode: "Hybrid",
    date: "June 12, 2024",
    time: "3:00 PM IST",
    platform: "Webex & Onsite",
    topics: [
      "AI in Business Strategy",
      "Operationalizing AI",
      "Case Studies in AI Deployment",
      "Ethical AI in Business",
    ],
    speakers: [
      { name: "Michael Stevens", title: "AI Consultant, InnovateAI" },
      { name: "Nancy Drew", title: "COO, BusinessAI Solutions" },
    ],
    location: "Business Convention Center, Room 203 & Online",
    image: "/activity_aibusiness.png",
    registrationLink: null, // Past event, no registration
  },
  {
    id: 3,
    title: "Robotics and AI",
    description:
      "Explore the intersection of robotics and AI, with demonstrations and insights from industry experts.",
    mode: "Onsite",
    date: "July 15, 2024",
    time: "11:00 AM IST",
    platform: "Onsite Only",
    topics: [
      "Robotics Fundamentals",
      "AI in Robotics",
      "Autonomous Systems",
      "Human-Robot Interaction",
    ],
    speakers: [
      {
        name: "Isaac Asimov",
        title: "Professor of Robotics, SciTech University",
      },
      { name: "Robo Cop", title: "Head of Robotics, RoboTech" },
    ],
    location: "Robotics Institute, Auditorium",
    image: "/activity_robotics.png",
    registrationLink: null, // Past event, no registration
  },
  {
    id: 4,
    title: "AI Ethics Symposium",
    description:
      "A forum to discuss the ethical implications of AI and how to ensure responsible AI development.",
    mode: "Online",
    date: "August 10, 2024",
    time: "2:00 PM IST",
    platform: "Google Meet",
    topics: [
      "Introduction to AI Ethics",
      "Bias in AI",
      "Transparency and Explainability",
      "Future of AI Ethics",
    ],
    speakers: [
      { name: "Dr. Eliza Doolittle", title: "Ethics Researcher, AI Society" },
      { name: "Mark Twain", title: "Philosopher and AI Ethicist" },
    ],
    location: "Online - Google Meet",
    image: "/activity_aiethics.png",
    registrationLink: null, // Past event, no registration
  },
];

export { upcomingEvents, pastEvents };
