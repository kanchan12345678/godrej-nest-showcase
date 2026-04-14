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
  { id: "o1", name: "Altius Titan Desk", description: "Robust industrial-grade workstation featuring heavy-duty construction and professional design for high-intensity environments.", category: "office", image: "/Altius_Titan.webp" },
  { id: "o2", name: "Cross Full Back Chair", description: "Advanced ergonomic seating with mesh-back design and adjustable lumbar pad to ensure natural posture and superior comfort.", category: "office", image: "/Cross_Full_Back.webp" },
  { id: "o3", name: "Altius Titan Workstation", description: "Professional modular workstation with integrated wire management and modular storage, tailored for corporate productivity.", category: "office", image: "/Altius_Titan.webp" },
  { id: "o4", name: "Office Locker", description: "Compact and secure storage solution for modern office spaces, featuring signature multi-level locking systems.", category: "office", image: "/locker_1.webp" },
  { id: "o5", name: "Conference Desk", description: "Elegant boardroom table designed for professional meetings, featuring premium finishes and integrated connectivity options.", category: "office", image: "/Altius_Titan.webp" },
  { id: "o6", name: "Postrue Perfect Chair", description: "India's first chair with globally patented TrackBack Technology, providing continuous lumbar support through every recline angle.", category: "office", image: "/Postrue_Perfect_Chair.webp" },

  // Home
  { id: "h1", name: "Luxury Sofa", description: "Premium 3-seater sofa with high-density foam and designer fabric, perfect for a modern living room aesthetic.", category: "home", image: "/sofa1.png" },
  { id: "h2", name: "Modern Sofa Set", description: "Contemporary sofa arrangement designed for ultimate comfort, featuring durable framing and plush upholstery.", category: "home", image: "/sofa2.png" },
  { id: "h3", name: "Designer Sofa", description: "A statement piece combining artistic lines with exceptional lounging comfort for a sophisticated home interior.", category: "home", image: "/sofa3.png" },
  { id: "h4", name: "4-Seater Dining Table", description: "Minimalist and sturdy dining table for compact spaces, crafted for durability and timeless appeal.", category: "home", image: "/4_Seater_Dining.webp" },
  { id: "h5", name: "Extended Dining Set", description: "Versatile dining solution with a spacious tabletop and ergonomic chairs, ideal for family gatherings.", category: "home", image: "/4_Seater_Dining_2.webp" },
  { id: "h6", name: "Steel Almirah", description: "The iconic Godrej Steel Almirah, offering maximum security and vast storage space for your home essentials.", category: "home", image: "/almirah_1.webp" },

  // Storage
  { id: "s1", name: "Steel Almirah Cabinet", description: "Multi-functional steel cabinet featuring multi-bend construction and advanced security for home and office storage.", category: "storage", image: "/almirah_1.webp" },
  { id: "s2", name: "Storage Almirah", description: "Organized storage unit with dedicated compartments, ensuring clutter-free and secure home storage.", category: "storage", image: "/almirah_2.webp" },
  { id: "s3", name: "Compact Almirah", description: "Efficient space-saving almirah designed for smaller rooms without compromising on Godrej's legendary security.", category: "storage", image: "/almirah_3.webp" },
  { id: "s4", name: "Clad Rack Warehouse", description: "Building-integrated high-density storage solution where the racking itself forms the structural framework.", category: "storage", image: "/Clad_Rack_Warehouse.webp" },
  { id: "s5", name: "Mobile Pallet Racking", description: "Motorized racking system that eliminates fixed aisles to maximize warehouse space while maintaining full SKU accessibility.", category: "storage", image: "/mobile_pallet_racking.webp" },
  { id: "s6", name: "Heavy Duty Rack", description: "Industrial-strength storage rack system designed to handle heavy loads with modular flexibility for warehouses.", category: "storage", image: "/Clad_Rack_Warehouse.webp" },

  // Godrej Security
  { id: "g1", name: "Godrej Locker", description: "Compact security safe with double-walled construction and high-security lever locks for peace of mind.", category: "godrej-storage", image: "/locker_1.webp" },
  { id: "g2", name: "Digital Safe Box", description: "Advanced electronic safe with digital password protection and mechanical override for superior security.", category: "godrej-storage", image: "/locker_2.jpg" },
  { id: "g3", name: "Heavy Duty Locker", description: "Robust security solution designed for valuables, featuring reinforced steel and precision-engineered locking.", category: "godrej-storage", image: "/locker_3.webp" },
  { id: "g4", name: "Godrej Security Locker", description: "Premium security locker providing certified protection against theft with a sleek and modern design.", category: "godrej-storage", image: "/locker_1.webp" },
  { id: "g5", name: "Vault Safe", description: "Professional-grade high-security vault for maximum protection of large-scale valuables and documents.", category: "godrej-storage", image: "/locker_2.jpg" },
  { id: "g6", name: "Armored Locker", description: "Maximum security storage unit with armored plating and sophisticated locking systems for high-risk environments.", category: "godrej-storage", image: "/locker_3.webp" },
];
