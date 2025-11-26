import { Product } from "@/contexts/CartContext";

export const products: Product[] = [
  {
    id: 1,
    name: "Bamboo Water Bottle",
    price: 29.99,
    image: "product-bamboo-bottle.jpg",
    description: "Eco-friendly bamboo water bottle with stainless steel interior. Keeps drinks cold for 24 hours, hot for 12 hours. BPA-free and sustainable.",
    category: "Drinkware",
  },
  {
    id: 2,
    name: "Organic Cotton Tote Bag",
    price: 19.99,
    image: "product-tote-bag.jpg",
    description: "Durable, 100% organic cotton tote bag. Perfect for shopping or daily use. Machine washable and biodegradable.",
    category: "Bags",
  },
  {
    id: 3,
    name: "Reusable Bamboo Cutlery Set",
    price: 24.99,
    image: "product-cutlery.jpg",
    description: "Complete bamboo cutlery set with fork, knife, spoon, and chopsticks. Comes in a recycled cotton carrying pouch. Perfect for on-the-go meals.",
    category: "Kitchen",
  },
  {
    id: 4,
    name: "Natural Beeswax Wraps (3-Pack)",
    price: 15.99,
    image: "product-beeswax-wraps.jpg",
    description: "Replace plastic wrap with these reusable, washable beeswax food wraps. Set includes small, medium, and large sizes. Made with organic cotton and sustainably sourced beeswax.",
    category: "Kitchen",
  },
  {
    id: 5,
    name: "Recycled Glass Planter",
    price: 34.99,
    image: "product-glass-planter.jpg",
    description: "Beautiful hand-blown planter made from 100% recycled glass. Perfect for succulents and small plants. Each piece is unique with slight variations in color.",
    category: "Home Decor",
  },
  {
    id: 6,
    name: "Sustainable Yoga Mat",
    price: 79.99,
    image: "product-yoga-mat.jpg",
    description: "Premium yoga mat made from natural rubber and cork. Non-slip surface, biodegradable, and free from harmful chemicals. Includes carrying strap.",
    category: "Fitness",
  },
];

export const reviews = [
  {
    productId: 1,
    author: "Sarah M.",
    rating: 5,
    comment: "Best water bottle I've ever owned! Keeps my drinks cold all day and looks amazing.",
    date: "2024-01-15",
  },
  {
    productId: 2,
    author: "Michael P.",
    rating: 5,
    comment: "Strong and durable. I use it for everything - groceries, gym, beach trips. Highly recommend!",
    date: "2024-01-20",
  },
  {
    productId: 3,
    author: "Emma L.",
    rating: 4,
    comment: "Great quality cutlery! The only downside is it needs to be hand-washed, but that's expected with bamboo.",
    date: "2024-01-18",
  },
  {
    productId: 4,
    author: "David K.",
    rating: 5,
    comment: "Game changer for food storage! No more plastic wrap. Easy to clean and they stick really well.",
    date: "2024-01-22",
  },
  {
    productId: 5,
    author: "Lisa R.",
    rating: 5,
    comment: "Absolutely gorgeous! The color variations make each one special. My plants love their new home.",
    date: "2024-01-25",
  },
  {
    productId: 6,
    author: "James T.",
    rating: 5,
    comment: "Perfect grip, even when sweaty. The cork surface is natural and comfortable. Worth every penny!",
    date: "2024-01-28",
  },
];
