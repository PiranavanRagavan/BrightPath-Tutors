import { Product } from "@/contexts/CartContext";

interface ServiceProduct extends Product {
  relatedServices?: number[];
}

export const services: ServiceProduct[] = [
  {
    id: 1,
    name: "Math Help (60 min)",
    price: 40,
    image: "",
    description: "Covers algebra, geometry, and problem-solving techniques. (Quantity is the number of classes)",
    category: "Tutoring",
    relatedServices: [3, 4]
  },
  {
    id: 2,
    name: "English Help",
    price: 40,
    image: "",
    description: "Reading comprehension, writing skills, essay feedback. (Quantity is the number of classes)",
    category: "Tutoring",
    relatedServices: [4, 5]
  },
  {
    id: 3,
    name: "Science Help",
    price: 40,
    image: "",
    description: "Chemistry, biology, physics fundamentals with clear examples. (Quantity is the number of classes)",
    category: "Tutoring",
    relatedServices: [1, 4]
  },
  {
    id: 4,
    name: "1-on-1 (60 min)",
    price: 45,
    image: "",
    description: "Personalized session, all subjects, customized to the student's needs. (Quantity is the number of classes)",
    category: "Tutoring",
    relatedServices: [1, 2, 3]
  },
  {
    id: 5,
    name: "Group Studying (120 min)",
    price: 25,
    image: "",
    description: "Collaborative learning + guided practice. (Quantity is the number of classes)",
    category: "Tutoring",
    relatedServices: [2, 4]
  },
];

export const reviews = [
  {
    id: 1,
    productId: 1,
    author: "Sarah M.",
    rating: 5,
    comment: "Amazing tutor! Really helped me understand calculus.",
    date: "2024-01-15",
  },
  {
    id: 2,
    productId: 2,
    author: "James L.",
    rating: 5,
    comment: "My essay writing has improved so much. Highly recommend!",
    date: "2024-01-20",
  },
  {
    id: 3,
    productId: 3,
    author: "Emily R.",
    rating: 5,
    comment: "Chemistry finally makes sense. Great explanations!",
    date: "2024-01-18",
  },
  {
    id: 4,
    productId: 4,
    author: "Michael K.",
    rating: 5,
    comment: "The personalized attention made all the difference.",
    date: "2024-01-22",
  },
  {
    id: 5,
    productId: 5,
    author: "David P.",
    rating: 5,
    comment: "Love the group sessions. Learning together is so effective!",
    date: "2024-01-25",
  },
];

// Track service views for "Most Popular" recommendations
export const getMostPopularServices = () => {
  return [4, 1, 2]; // IDs of most popular services
};

export const getRelatedServices = (serviceId: number) => {
  const service = services.find(s => s.id === serviceId);
  if (!service || !service.relatedServices) return [];
  return services.filter(s => service.relatedServices?.includes(s.id));
};
