export const BRAND = {
  name: "AURELIA",
  subname: "COFFEE & PÂTISSERIE",
  tagline: "Slow mornings. Bold coffee. Beautiful moments.",
  est: "EST. 2018",
  city: "Melbourne, Australia",
  address: "123 Market Street, Melbourne, Australia",
  phone: "+61 (03) 9820 4421",
  email: "bonjour@aureliacafe.com.au",
};

export const SIGNATURE_ITEMS = [
  {
    id: "01",
    name: "AURELIA LATTE",
    subtitle: "House Signature",
    description: "Espresso · Oat Milk · Madagascar Vanilla",
    notes: "Silky, fragrant vanilla pod infusion with our signature roast",
    price: "$6.50",
    image: "https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&w=900&q=85",
    tag: "Signature",
    temperature: "Hot / Iced"
  },
  {
    id: "02",
    name: "SPANISH CAPPUCCINO",
    subtitle: "Connoisseur's Choice",
    description: "Double Espresso · Condensed Milk · Ceylon Cinnamon",
    notes: "Rich, layered indulgence with velvety micro-foam and spice",
    price: "$6.00",
    image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?auto=format&fit=crop&w=900&q=85",
    tag: "Popular",
    temperature: "Hot"
  },
  {
    id: "03",
    name: "DARK MOCHA",
    subtitle: "Artisanal Blend",
    description: "Espresso · 72% Valrhona Dark Chocolate · Milk",
    notes: "Deep bittersweet cocoa notes balanced with velvety steamed milk",
    price: "$6.75",
    image: "https://images.unsplash.com/photo-1572442388796-11668a67e53d?auto=format&fit=crop&w=900&q=85",
    tag: "Chef's Pick",
    temperature: "Hot / Iced"
  },
  {
    id: "04",
    name: "COLD BREW",
    subtitle: "Single Origin Batch",
    description: "18-hour slow brewed single origin coffee",
    notes: "Notes of black cherry, jasmine bloom, and smooth dark chocolate",
    price: "$5.50",
    image: "https://images.unsplash.com/photo-1517701550927-30cf4ba1dba5?auto=format&fit=crop&w=900&q=85",
    tag: "Seasonal",
    temperature: "Iced"
  },
];

export const MENU_CATEGORIES = {
  COFFEE: [
    {
      name: "Flat White",
      description: "Double espresso · silky steamed milk",
      price: "$5.50",
      origin: "Geisha, Panama",
      calories: "120 kcal"
    },
    {
      name: "Matcha Latte",
      description: "Ceremonial Uji matcha · oat milk · blossom honey",
      price: "$6.00",
      origin: "Kyoto, Japan",
      calories: "95 kcal"
    },
    {
      name: "Americano",
      description: "Espresso · artisanal mineral filtered water",
      price: "$4.50",
      origin: "Yirgacheffe, Ethiopia",
      calories: "5 kcal"
    },
    {
      name: "Cold Brew",
      description: "Slow brewed for 18 hours · served over crystal clear rock",
      price: "$5.50",
      origin: "Antioquia, Colombia",
      calories: "10 kcal"
    },
    {
      name: "Cortado",
      description: "Equal parts espresso and textured warm milk",
      price: "$4.80",
      origin: "Tarrazú, Costa Rica",
      calories: "60 kcal"
    },
    {
      name: "Cascara Spritz",
      description: "Sparkling coffee cherry tea infusion · blood orange twist",
      price: "$6.50",
      origin: "Huila, Colombia",
      calories: "35 kcal"
    }
  ],
  BREAKFAST: [
    {
      name: "Avocado Toast",
      description: "Charred sourdough · whipped avocado · heirloom radish · za'atar herbs",
      price: "$9.50",
      origin: "Victorian Sourdough Bakery",
      calories: "380 kcal"
    },
    {
      name: "Aurelia Bowl",
      description: "House toasted hazelnut granola · macerated berries · vanilla Greek yogurt",
      price: "$10.00",
      origin: "Organic Dairy, Yarra Valley",
      calories: "420 kcal"
    },
    {
      name: "Eggs & Toast",
      description: "Two poached free-range pasture eggs · buttered sourdough · smoked Maldon salt",
      price: "$11.00",
      origin: "Clarendon Farm Eggs",
      calories: "340 kcal"
    },
    {
      name: "Truffled Mushroom Brioche",
      description: "Wild forest mushrooms · black truffle emulsion · thyme butter brioche",
      price: "$12.50",
      origin: "Mornington Mushrooms",
      calories: "440 kcal"
    }
  ],
  PASTRIES: [
    {
      name: "Almond Croissant",
      description: "French cultured butter · double-baked almond frangipane · toasted flakes",
      price: "$4.50",
      origin: "Pâtisserie Atelier",
      calories: "380 kcal"
    },
    {
      name: "Pain au Chocolat",
      description: "Hand-rolled laminated dough · double Valrhona dark chocolate batons",
      price: "$4.25",
      origin: "Pâtisserie Atelier",
      calories: "340 kcal"
    },
    {
      name: "Cinnamon Roll",
      description: "Ceylon cinnamon swirl · Madagascar vanilla bean crème glaze",
      price: "$4.75",
      origin: "Pâtisserie Atelier",
      calories: "390 kcal"
    },
    {
      name: "Kouign-Amann",
      description: "Caramelized Brittany layered pastry · salted Normandy butter crunch",
      price: "$5.00",
      origin: "Pâtisserie Atelier",
      calories: "360 kcal"
    }
  ],
  DESSERTS: [
    {
      name: "Tiramisu",
      description: "Savoiardi ladyfingers · house espresso soak · mascarpone sabayon",
      price: "$7.00",
      origin: "House Made Daily",
      calories: "410 kcal"
    },
    {
      name: "Chocolate Tart",
      description: "70% Guanaja dark chocolate ganache · flaky sea salt · hazelnut praline",
      price: "$7.50",
      origin: "House Made Daily",
      calories: "450 kcal"
    },
    {
      name: "Basque Cheesecake",
      description: "Caramelized charred crust · creamy molten center · Tahitian vanilla",
      price: "$7.00",
      origin: "House Made Daily",
      calories: "430 kcal"
    },
    {
      name: "Pistachio Paris-Brest",
      description: "Choux pastry crown · Sicilian pistachio mousseline · roasted praline",
      price: "$8.50",
      origin: "House Made Daily",
      calories: "460 kcal"
    }
  ]
};

export const STORY_STATS = [
  {
    value: 8,
    suffix: "+",
    label: "Years of brewing",
    sublabel: "Mastering the bean since 2018"
  },
  {
    value: 25,
    suffix: "K+",
    label: "Happy guests",
    sublabel: "Shared mornings & memories"
  },
  {
    value: 12,
    suffix: "",
    label: "Signature drinks",
    sublabel: "Crafted exclusively in-house"
  }
];

export const GALLERY_ITEMS = [
  {
    id: 1,
    title: "The Art of the Pour",
    category: "Craft",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&w=1200&q=85",
    caption: "Micro-textured velvet foam poured with calibrated precision."
  },
  {
    id: 2,
    title: "Golden Crema",
    category: "Espresso",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&w=1200&q=85",
    caption: "Extraction calibrated at 9 bars of pressure for 28 seconds."
  },
  {
    id: 3,
    title: "Morning Rituals",
    category: "Atmosphere",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1521017432531-fbd92d768814?auto=format&fit=crop&w=1200&q=85",
    caption: "Soft morning light pouring into our timber and marble salon."
  },
  {
    id: 4,
    title: "Laminated Perfection",
    category: "Pâtisserie",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=1200&q=85",
    caption: "72 distinct honeycomb layers of French Normandy butter."
  },
  {
    id: 5,
    title: "Single Origin Selection",
    category: "Beans",
    aspect: "square",
    image: "https://images.unsplash.com/photo-1587734195503-904fca47e0e9?auto=format&fit=crop&w=1200&q=85",
    caption: "Direct trade beans roasted in micro-batches every Tuesday."
  },
  {
    id: 6,
    title: "Craft Behind the Bar",
    category: "Barista",
    aspect: "tall",
    image: "https://images.unsplash.com/photo-1507133750040-3a7f573045f4?auto=format&fit=crop&w=1200&q=85",
    caption: "Our team of award-winning baristas dedicating their art."
  },
  {
    id: 7,
    title: "Architectural Sanctuary",
    category: "Interior",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1559925393-8be0ec4767c8?auto=format&fit=crop&w=1200&q=85",
    caption: "Designed by Melbourne studio with travertine and smoked oak."
  },
  {
    id: 8,
    title: "123 Market Street",
    category: "Exterior",
    aspect: "wide",
    image: "https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&w=1200&q=85",
    caption: "Historic facade welcoming guests into our warm urban retreat."
  }
];

export const TESTIMONIALS = [
  {
    quote: "The kind of café where you accidentally spend three hours.",
    author: "Emma R.",
    role: "Architectural Designer",
    rating: 5,
    favorite: "Spanish Cappuccino & Basque Cheesecake"
  },
  {
    quote: "Beautiful coffee, incredible pastries and an atmosphere I never want to leave.",
    author: "Daniel M.",
    role: "Creative Director",
    rating: 5,
    favorite: "Cold Brew & Almond Croissant"
  },
  {
    quote: "Aurelia has become part of my morning ritual. Nothing in Melbourne compares.",
    author: "Sophia K.",
    role: "Editorial Stylist",
    rating: 5,
    favorite: "Aurelia Latte"
  }
];

export const OPENING_HOURS = [
  { days: "Monday — Friday", hours: "7:00 AM — 8:00 PM", note: "Full breakfast & coffee service" },
  { days: "Saturday — Sunday", hours: "8:00 AM — 10:00 PM", note: "Extended evening dessert lounge" }
];
