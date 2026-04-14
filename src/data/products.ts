export type ProductCategory = "office" | "home" | "storage" | "godrej-storage";

export interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  image: string;
}

export const categories = [
  { id: "office" as const, label: "Office Furniture", icon: "🏢" },
  { id: "home" as const, label: "Home Furniture", icon: "🏠" },
  { id: "storage" as const, label: "Storage Solutions", icon: "📦" },
  { id: "godrej-storage" as const, label: "Godrej Security", icon: "🔐" },
];

export const products: Product[] = [
  // Office
  { id: "o1", name: "Executive Desk Pro", description: "Ergonomic executive desk with cable management", category: "office", image: "https://images.unsplash.com/photo-1518455027359-f3f8164ba6bd?w=600&q=80" },
  { id: "o2", name: "Mesh Office Chair", description: "Breathable mesh back with lumbar support", category: "office", image: "https://images.unsplash.com/photo-1580480055273-228ff5388ef8?w=600&q=80" },
  { id: "o3", name: "Conference Table", description: "10-seater conference table in walnut finish", category: "office", image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80" },
  { id: "o4", name: "Storage Pedestal", description: "3-drawer mobile pedestal with lock", category: "office", image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?w=600&q=80" },
  { id: "o5", name: "Workstation Cluster", description: "Modular 4-seater workstation with partitions", category: "office", image: "https://images.unsplash.com/photo-1497215842964-222b430dc094?w=600&q=80" },
  { id: "o6", name: "Ergonomic Task Chair", description: "Height-adjustable task chair with armrests", category: "office", image: "https://images.unsplash.com/photo-1541558869-073bf4e1400d?w=600&q=80" },

  // Home
  { id: "h1", name: "Luxury Sofa Set", description: "3+1+1 premium fabric sofa set", category: "home", image: "https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=600&q=80" },
  { id: "h2", name: "King Size Bed", description: "Solid wood king bed with storage", category: "home", image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=600&q=80" },
  { id: "h3", name: "Dining Table Set", description: "6-seater dining set in sheesham wood", category: "home", image: "https://images.unsplash.com/photo-1617806118233-18e1de247200?w=600&q=80" },
  { id: "h4", name: "TV Entertainment Unit", description: "Modern wall-mounted TV unit", category: "home", image: "https://images.unsplash.com/photo-1593062096033-9a26b09da705?w=600&q=80" },
  { id: "h5", name: "Bookshelf Tower", description: "5-tier open bookshelf in oak finish", category: "home", image: "https://images.unsplash.com/photo-1594620302200-9a762244a156?w=600&q=80" },
  { id: "h6", name: "Modular Wardrobe", description: "Sliding door wardrobe with mirror", category: "home", image: "https://images.unsplash.com/photo-1558997519-83ea9252edf8?w=600&q=80" },

  // Storage
  { id: "s1", name: "Steel Almirah", description: "Heavy-duty steel almirah with locker", category: "storage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
  { id: "s2", name: "Filing Cabinet", description: "4-drawer vertical filing cabinet", category: "storage", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { id: "s3", name: "Compact Cupboard", description: "Space-saving cupboard for small rooms", category: "storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80" },
  { id: "s4", name: "Open Shelving Unit", description: "Industrial style open metal shelving", category: "storage", image: "https://images.unsplash.com/photo-1597072689227-8882273e8f6a?w=600&q=80" },
  { id: "s5", name: "Shoe Rack Cabinet", description: "Enclosed shoe storage for 20 pairs", category: "storage", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80" },
  { id: "s6", name: "Modular Kitchen Unit", description: "Pull-out storage modules for kitchens", category: "storage", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },

  // Godrej Security
  { id: "g1", name: "Godrej Safe Locker", description: "Fire-resistant home safe locker", category: "godrej-storage", image: "https://images.unsplash.com/photo-1582139329536-e7284fece509?w=600&q=80" },
  { id: "g2", name: "Digital Safe", description: "Electronic digital safe with keypad", category: "godrej-storage", image: "https://images.unsplash.com/photo-1558618666-fcd25c85f82e?w=600&q=80" },
  { id: "g3", name: "Cash Management Box", description: "Heavy-duty cash box for businesses", category: "godrej-storage", image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80" },
  { id: "g4", name: "Record Protection Safe", description: "Fireproof media & document safe", category: "godrej-storage", image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?w=600&q=80" },
  { id: "g5", name: "Jewellery Locker", description: "Compact locker for valuables", category: "godrej-storage", image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?w=600&q=80" },
  { id: "g6", name: "Strong Room Door", description: "Bank-grade strong room door", category: "godrej-storage", image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=600&q=80" },
];
