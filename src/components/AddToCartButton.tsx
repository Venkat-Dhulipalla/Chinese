"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";

interface Item {
  id: number;
  name: string;
  price: number;
}

export default function AddToCartButton({ item }: { item: Item }) {
  const [isAdded, setIsAdded] = useState(false);

  const addToCart = async () => {
    const response = await fetch("/api/cart", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(item),
    });

    if (response.ok) {
      setIsAdded(true);
      setTimeout(() => setIsAdded(false), 2000);
    }
  };

  return (
    <Button
      onClick={addToCart}
      variant={isAdded ? "secondary" : "default"}
      disabled={isAdded}
    >
      {isAdded ? "Added!" : "Add to Cart"}
    </Button>
  );
}
