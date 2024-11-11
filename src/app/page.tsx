"use client";

import { useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { ShoppingCart, Minus, Plus } from "lucide-react";
import confetti from "canvas-confetti";

interface MenuItem {
  id: number;
  name: string;
  description: string;
  price: number;
  image: string;
  category: string;
}

interface CartItem extends MenuItem {
  quantity: number;
  spiceLevel: string;
  customizations?: string;
}

const menuItems = [
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

export default function Home() {
  const [cart, setCart] = useState<CartItem[]>([]);
  const [selectedItem, setSelectedItem] = useState<MenuItem | null>(null);
  const [quantity, setQuantity] = useState(1);
  const [spiceLevel, setSpiceLevel] = useState("medium");
  const [customizations, setCustomizations] = useState("");
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [specialInstructions, setSpecialInstructions] = useState("");
  const [showOrderSuccess, setShowOrderSuccess] = useState(false);
  const router = useRouter();

  const handleAddToCart = (item: MenuItem) => {
    setSelectedItem(item);
    setQuantity(1);
    setSpiceLevel("medium");
    setCustomizations("");
    setIsDialogOpen(true);
  };

  const handleConfirmAdd = () => {
    if (selectedItem) {
      const newItem: CartItem = {
        ...selectedItem,
        quantity,
        spiceLevel,
        customizations,
      };
      setCart([...cart, newItem]);
      setIsDialogOpen(false);
    }
  };

  const handlePlaceOrder = () => {
    setShowOrderSuccess(true);
    confetti({
      particleCount: 100,
      spread: 70,
      origin: { y: 0.6 },
    });
    setTimeout(() => {
      setShowOrderSuccess(false);
      setCart([]);
      router.push("/");
    }, 3000);
  };

  const cartTotal = cart.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  return (
    <div className="py-8 px-4 sm:px-6 lg:px-8">
      <div className="text-center mb-10">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl mb-4">
          Welcome to Golden Dragon
        </h1>
        <p className="text-xl text-muted-foreground">
          Experience authentic Chinese cuisine
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-6">
        {menuItems.map((item) => (
          <Card key={item.id} className="flex flex-col">
            <CardHeader className="p-0">
              <div className="relative aspect-[4/3] w-full">
                <div className="relative w-full h-64">
                  <Image
                    src={`https://placeholder.pics/svg/400x300`}
                    alt={item.name}
                    fill
                    className="object-cover rounded-t-lg"
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  />
                </div>
              </div>
            </CardHeader>
            <CardContent className="flex-grow p-4">
              <div className="flex flex-col h-full">
                <div className="flex justify-between items-start mb-2">
                  <CardTitle className="text-lg sm:text-xl">
                    {item.name}
                  </CardTitle>
                  <span className="font-bold text-base sm:text-lg">
                    ${item.price.toFixed(2)}
                  </span>
                </div>
                <p className="text-muted-foreground text-sm mb-2">
                  {item.description}
                </p>
                <div className="mt-auto">
                  <span className="inline-block bg-primary/10 text-primary text-xs px-2 py-1 rounded">
                    {item.category}
                  </span>
                </div>
              </div>
            </CardContent>
            <CardFooter className="p-4 pt-0">
              <Button className="w-full" onClick={() => handleAddToCart(item)}>
                <ShoppingCart className="mr-2 h-4 w-4" />
                Add to Cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>

      {cart.length > 0 && (
        <Card className="mt-8">
          <CardHeader>
            <CardTitle>Your Cart</CardTitle>
          </CardHeader>
          <CardContent>
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between py-2"
              >
                <div>
                  <h3 className="font-semibold">{item.name}</h3>
                  <p className="text-sm text-muted-foreground">
                    Spice Level: {item.spiceLevel}
                  </p>
                  {item.customizations && (
                    <p className="text-sm text-muted-foreground">
                      Notes: {item.customizations}
                    </p>
                  )}
                </div>
                <div className="flex items-center gap-4">
                  <div className="flex items-center">
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const newCart = [...cart];
                        if (item.quantity > 1) {
                          newCart[index].quantity--;
                          setCart(newCart);
                        }
                      }}
                    >
                      <Minus className="h-4 w-4" />
                    </Button>
                    <span className="mx-2">{item.quantity}</span>
                    <Button
                      variant="outline"
                      size="icon"
                      onClick={() => {
                        const newCart = [...cart];
                        newCart[index].quantity++;
                        setCart(newCart);
                      }}
                    >
                      <Plus className="h-4 w-4" />
                    </Button>
                  </div>
                  <span className="font-semibold">
                    ${(item.price * item.quantity).toFixed(2)}
                  </span>
                </div>
              </div>
            ))}
            <div className="mt-4">
              <Label htmlFor="special-instructions">Special Instructions</Label>
              <Textarea
                id="special-instructions"
                value={specialInstructions}
                onChange={(e) => setSpecialInstructions(e.target.value)}
                placeholder="Any special requests for the restaurant?"
                className="mt-2"
              />
            </div>
            <div className="mt-4 flex justify-between items-center">
              <span className="text-lg font-bold">Total:</span>
              <span className="text-lg font-bold">${cartTotal.toFixed(2)}</span>
            </div>
            <Button className="w-full mt-4" onClick={handlePlaceOrder}>
              Place Order
            </Button>
          </CardContent>
        </Card>
      )}

      <Dialog open={isDialogOpen} onOpenChange={setIsDialogOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Customize Your Order</DialogTitle>
          </DialogHeader>
          <div className="grid gap-4 py-4">
            <div className="flex items-center gap-4">
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
              >
                <Minus className="h-4 w-4" />
              </Button>
              <span>{quantity}</span>
              <Button
                variant="outline"
                size="icon"
                onClick={() => setQuantity(quantity + 1)}
              >
                <Plus className="h-4 w-4" />
              </Button>
            </div>
            <div>
              <Label>Spice Level</Label>
              <RadioGroup
                value={spiceLevel}
                onValueChange={setSpiceLevel}
                className="flex gap-4 mt-2"
              >
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="mild" id="mild" />
                  <Label htmlFor="mild">Mild</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="medium" id="medium" />
                  <Label htmlFor="medium">Medium</Label>
                </div>
                <div className="flex items-center space-x-2">
                  <RadioGroupItem value="spicy" id="spicy" />
                  <Label htmlFor="spicy">Spicy</Label>
                </div>
              </RadioGroup>
            </div>
            <div>
              <Label htmlFor="customizations">Special Requests</Label>
              <Input
                id="customizations"
                value={customizations}
                onChange={(e) => setCustomizations(e.target.value)}
                placeholder="Any special requests?"
              />
            </div>
          </div>
          <DialogFooter>
            <Button variant="outline" onClick={() => setIsDialogOpen(false)}>
              Cancel
            </Button>
            <Button onClick={handleConfirmAdd}>Add to Cart</Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <Dialog open={showOrderSuccess} onOpenChange={setShowOrderSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="text-center">
              Order Placed Successfully! 🎉
            </DialogTitle>
          </DialogHeader>
          <div className="text-center py-4">
            <p className="text-xl text-muted-foreground">
              Thank you for your order!
            </p>
            <p className="mt-2">Your delicious food will be ready soon.</p>
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
