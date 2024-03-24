import axios from "axios";
export const navItems = [
  {
    id: 1,
    title: "Home",
    href: "/",
  },
  {
    id: 2,
    title: "About",
    href: "/about",
  },
  {
    id: 3,
    title: "Products",
    href: "/products",
  },
  {
    id: 4,
    title: "Cart",
    href: "/cart",
  },
  {
    id: 5,
    title: "Checkout",
    href: "/checkout",
  },
  {
    id: 6,
    title: "Orders",
    href: "/orders",
  },
];

export const imgs = [
  {
    id: 1,
    photo: "/assets/hero1.webp",
  },
  {
    id: 2,
    photo: "/assets/hero2.webp",
  },
  {
    id: 3,
    photo: "/assets/hero3.webp",
  },
  {
    id: 4,
    photo: "/assets/hero4.webp",
  },
];

const productionUrl = "https://strapi-store-server.onrender.com/api";
export const customFetch = axios.create({
  baseURL: productionUrl,
});

export const formatPrice = (price: bigint | number) => {
  if (typeof price === "number") {
    const priceNumber = Number((price / 100).toFixed(2));
    const dollarsAmount = new Intl.NumberFormat("en-US", {
      style: "currency",
      currency: "USD",
    }).format(priceNumber);
    return dollarsAmount;
  } else {
    return "Price cannot be formatted. Unsupported type.";
  }
};
