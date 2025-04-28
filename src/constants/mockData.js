export const predefinedResponses = [
  {
    keyword: "sunlight",
    answer: "Your plant needs at least 6 hours of sunlight daily.",
    product: {
      id: "001",
      isExists: 1, // 1: exist, 0 not exist
      name: "Grow Light Lamp",
      link: "https://reurl.cc/yR7kgy",
      description: "Helps your plant get sunlight indoors.",
    },
  },
  {
    keyword: "water",
    answer: "Water the plant twice a week to avoid dehydration.",
    product: {
      id: "002",
      isExists: 0, // 1: exist, 0 not exist
      name: "Water Bottle",
      link: "https://reurl.cc/Z4WX7Q",
      description: "Helps your plant get sunlight indoors.",
    },
  },
  {
    keyword: "soil",
    answer: "Use soil with pH between 6.0 and 6.5 for optimal growth.",
    product: {
      id: "003",
      isExists: 1, // 1: exist, 0 not exist
      name: "Orchid Care Repotting Bark Fine grade",
      link: "https://reurl.cc/Z4WX7Q",
      description: "Helps your plant get sunlight indoors.",
    },
  },
  {
    keyword: "temperature",
    answer: "Keep temperature between 18-25°C for healthy growth.",
    product: {
      id: "004",
      isExists: 1, // 1: exist, 0 not exist
      name: "Digital Max Min Greenhouse Thermometer",
      link: "https://reurl.cc/Z4WX7Q",
      description: "Helps your plant get sunlight indoors.",
    },
  },
];
export const defaultPosts = [
  {
    id: "default-1",
    title: "Welcome to UrbanGrow!",
    content: `
            <p>UrbanGrow is an innovative web-based platform that combines artificial intelligence 
            and plant care to help urban gardeners take better care of their plants. 
            The system allows users to upload images of their plants for automatic recognition 
            using AI technology. Once identified, the platform provides detailed plant care tips, 
            such as optimal sunlight, watering schedules, and soil recommendations. Users can also 
            track their plants’ growth and share their experiences with a community of plant 
            enthusiasts.</p>
            <p>Designed for both novice and experienced gardeners, UrbanGrow empowers users 
            to create thriving green spaces in urban environments. With the integration of 
            advanced AI and a user-friendly interface, this project aims to make plant care 
            accessible to everyone, regardless of their gardening expertise.</p>`,
    bgImg: "/urbanGrow/images/bg2.jpg",
    person: {
      name: "Raj",
      title: "Community Manager",
      image: "/images/bg2.jpg",
    },
  },
  {
    id: "default-2",
    title: "Tips for New Gardeners",
    content: "Start with easy plants like mint or basil!",
    bgImg: "/urbanGrow/images/bg2.jpg",
    person: {
      name: "Lisa",
      title: "Urban Gardener",
      image: "/urbanGrow/images/bg2.jpg",
    },
  },
  {
    id: "default-3",
    title: "How Often Should You Water?",
    content: "For most plants, watering once a week is enough.",
    bgImg: "/urbanGrow/images/bg2.jpg",
    person: {
      name: "Alice",
      title: "Plant Enthusiast",
      image: "/urbanGrow/images/bg2.jpg",
    },
  },
  {
    id: "default-4",
    title: "Choosing the Right Soil",
    content: "Good soil makes strong roots. Choose light, breathable types!",
    bgImg: "/urbanGrow/images/bg2.jpg",
    person: {
      name: "Bob",
      title: "Nature Explorer",
      image: "/urbanGrow/images/bg2.jpg",
    },
  },
  {
    id: "default-5",
    title: "Best Indoor Plants",
    content: "Snake plants and pothos are perfect for beginners indoors!",
    bgImg: "/urbanGrow/images/bg2.jpg",
    person: {
      name: "Coco",
      title: "Home Gardener",
      image: "/urbanGrow/images/bg2.jpg",
    },
  },
  {
    id: "default-6",
    title: "Sunlight Needs Explained",
    content: "Most herbs need 4-6 hours of sunlight daily to thrive.",
    bgImg: "/urbanGrow/images/bg2.jpg",
    person: {
      name: "Daisy",
      title: "Botany Lover",
      image: "/urbanGrow/images/bg2.jpg",
    },
  },
];

// src/constants/mockProducts.js

export const mockProducts = [
  {
    id: "001",
    name: "Grow Light Lamp",
    description: "Helps your plant get sunlight indoors.",
    link: "https://reurl.cc/yR7kgy",
  },
  {
    id: "002",
    name: "Water Bottle",
    description: "Perfect for watering delicate plants.",
    link: "https://reurl.cc/Z4WX7Q",
  },
  {
    id: "003",
    name: "Plant Soil Mix",
    description: "Nutrient-rich soil for healthy growth.",
    link: "https://reurl.cc/Z4WX7Q",
  },
  {
    id: "004",
    name: "Humidity Tray",
    description: "Helps maintain humidity for tropical plants.",
    link: "https://reurl.cc/Z4WX7Q",
  },
];
