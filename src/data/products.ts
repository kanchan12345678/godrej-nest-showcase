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
  { id: "o1", name: "Altius Titan Desk", description: "Premium office workstation desk with modern design", category: "office", image: "/Altius_Titan.webp" },
  { id: "o2", name: "Cross Full Back Chair", description: "Ergonomic office chair with full back support", category: "office", image: "/Cross_Full_Back.webp" },
  { id: "o3", name: "Altius Titan Workstation", description: "Executive workstation with cable management", category: "office", image: "/Altius_Titan.webp" },
  { id: "o4", name: "Office Locker", description: "Secure office storage locker with lock", category: "office", image: "/locker_1.webp" },
  { id: "o5", name: "Conference Desk", description: "Premium conference desk for meetings", category: "office", image: "/Altius_Titan.webp" },
  { id: "o6", name: "Postrue Perfect Chair", description: "Premium ergonomic office chair", category: "office", image: "/Postrue_Perfect_Chair.webp" },

  // Home
  { id: "h1", name: "Luxury Sofa", description: "Premium 3-seater fabric sofa", category: "home", image: "/sofa1.png" },
  { id: "h2", name: "Modern Sofa Set", description: "Contemporary 3+1+1 sofa arrangement", category: "home", image: "/sofa2.png" },
  { id: "h3", name: "Designer Sofa", description: "Stylish modern sofa design", category: "home", image: "/sofa3.png" },
  { id: "h4", name: "4-Seater Dining Table", description: "Compact dining table for 4 seats", category: "home", image: "/4_Seater_Dining.webp" },
  { id: "h5", name: "Extended Dining Set", description: "Spacious 4-seater dining configuration", category: "home", image: "/4_Seater_Dining_2.webp" },
  { id: "h6", name: "Steel Almirah", description: "Heavy-duty steel wardrobe storage", category: "home", image: "/almirah_1.webp" },

  // Storage
  { id: "s1", name: "Steel Almirah Cabinet", description: "Premium steel almirah with secure locking", category: "storage", image: "/almirah_1.webp" },
  { id: "s2", name: "Storage Almirah", description: "Multi-compartment storage cabinet", category: "storage", image: "/almirah_2.webp" },
  { id: "s3", name: "Compact Almirah", description: "Space-saving storage almirah", category: "storage", image: "/almirah_3.webp" },
  { id: "s4", name: "Clad Rack Warehouse", description: "Industrial warehouse storage rack", category: "storage", image: "/Clad_Rack_Warehouse.webp" },
  { id: "s5", name: "Mobile Pallet Racking", description: "Mobile pallet storage system", category: "storage", image: "/mobile_pallet_racking.webp" },
  { id: "s6", name: "Heavy Duty Rack", description: "Industrial strength storage rack", category: "storage", image: "/Clad_Rack_Warehouse.webp" },

  // Godrej Security
  { id: "g1", name: "Godrej Locker", description: "Secure Godrej storage locker", category: "godrej-storage", image: "/locker_1.webp" },
  { id: "g2", name: "Digital Safe Box", description: "Electronic digital security safe", category: "godrej-storage", image: "/locker_2.jpg" },
  { id: "g3", name: "Heavy Duty Locker", description: "Industrial grade security locker", category: "godrej-storage", image: "/locker_3.webp" },
  { id: "g4", name: "Godrej Security Locker", description: "Premium Godrej security solution", category: "godrej-storage", image: "/locker_1.webp" },
  { id: "g5", name: "Vault Safe", description: "High-security vault solution", category: "godrej-storage", image: "/locker_2.jpg" },
  { id: "g6", name: "Armored Locker", description: "Maximum security storage unit", category: "godrej-storage", image: "/locker_3.webp" },
];
