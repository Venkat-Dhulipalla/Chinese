// menuData.ts

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

export const menuItems: MenuItem[] = [
  {
    id: 1,
    name: "Dim Sum Platter",
    description:
      "Assorted steamed dumplings including shrimp, pork, and vegetable",
    price: 16.99,
    image: "https://placeholder.pics/svg/400x300",
    category: "Appetizers",
  },
  {
    id: 2,
    name: "Spring Rolls",
    description:
      "Crispy spring rolls filled with vegetables and served with sweet chili sauce",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Appetizers",
  },
  {
    id: 3,
    name: "Chicken Satay",
    description:
      "Grilled marinated chicken skewers served with peanut sauce and cucumber salad",
    price: 12.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Appetizers",
  },
  {
    id: 4,
    name: "Tom Yum Soup",
    description:
      "Spicy and sour Thai soup with shrimp, mushrooms, lemongrass, and lime",
    price: 9.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Soups",
  },
  {
    id: 5,
    name: "Miso Soup",
    description:
      "Traditional Japanese soup with tofu, seaweed, and green onions",
    price: 4.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Soups",
  },
  {
    id: 6,
    name: "Caesar Salad",
    description:
      "Classic Caesar salad with romaine lettuce, croutons, Parmesan, and Caesar dressing",
    price: 10.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Salads",
  },
  {
    id: 7,
    name: "Grilled Salmon",
    description:
      "Grilled salmon fillet served with seasonal vegetables and mashed potatoes",
    price: 22.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Main Course",
  },
  {
    id: 8,
    name: "Beef Bulgogi",
    description:
      "Korean marinated beef, grilled and served with rice and kimchi",
    price: 19.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Main Course",
  },
  {
    id: 9,
    name: "Chicken Pad Thai",
    description:
      "Stir-fried rice noodles with chicken, eggs, peanuts, and tamarind sauce",
    price: 14.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Main Course",
  },
  {
    id: 10,
    name: "Margherita Pizza",
    description:
      "Classic pizza topped with fresh mozzarella, tomatoes, and basil",
    price: 13.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Main Course",
  },
  {
    id: 11,
    name: "Tiramisu",
    description:
      "Italian dessert made with layers of coffee-soaked ladyfingers and mascarpone cream",
    price: 7.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Desserts",
  },
  {
    id: 12,
    name: "Chocolate Lava Cake",
    description:
      "Warm chocolate cake with a gooey molten center, served with vanilla ice cream",
    price: 8.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Desserts",
  },
  {
    id: 13,
    name: "Green Tea Mochi",
    description: "Japanese rice cake filled with green tea ice cream",
    price: 5.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Desserts",
  },
  {
    id: 14,
    name: "Iced Matcha Latte",
    description:
      "Refreshing green tea latte with matcha, milk, and a hint of sweetness",
    price: 4.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Beverages",
  },
  {
    id: 15,
    name: "Lemonade",
    description:
      "Freshly squeezed lemonade with a perfect balance of sweet and tart flavors",
    price: 3.99,
    image: "/images/landscape-placeholder.svg?height=300&width=400",
    category: "Beverages",
  },
  {
    id: 16,
    name: "Espresso",
    description: "Rich and bold Italian-style coffee",
    price: 2.99,
    image: "/placeholder.svg?height=300&width=400",
    category: "Beverages",
  },
];
