import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => (
  <footer className="bg-foreground text-background">
    <div className="container mx-auto px-4 py-12 grid grid-cols-1 md:grid-cols-3 gap-8">
      <div>
        <h3 className="text-xl font-bold mb-4">
          <span className="text-primary">9</span> Square
        </h3>
        <p className="text-background/70 text-sm leading-relaxed">
          Your authorized Godrej Interio dealer. Bringing world-class furniture solutions for homes, offices, and industries.
        </p>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Quick Links</h4>
        <div className="flex flex-col gap-2 text-sm text-background/70">
          <Link to="/" className="hover:text-primary transition-colors">Home</Link>
          <Link to="/products" className="hover:text-primary transition-colors">Products</Link>
          <Link to="/about" className="hover:text-primary transition-colors">About Us</Link>
          <Link to="/clients" className="hover:text-primary transition-colors">Clients</Link>
          <Link to="/contact" className="hover:text-primary transition-colors">Contact</Link>
        </div>
      </div>
      <div>
        <h4 className="font-semibold mb-4">Contact Info</h4>
        <div className="flex flex-col gap-3 text-sm text-background/70">
          <div className="flex items-center gap-2">
            <Phone size={16} className="text-primary" />
            <span>+91 79856 07812</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={16} className="text-primary" />
            <span>info@9squareindia.com</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={16} className="text-primary" />
            <span>2/436, Vibhav Khand, Gomti Nagar, Lucknow</span>
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-background/10 text-center py-4 text-xs text-background/50">
      © {new Date().getFullYear()} 9 Square. All rights reserved. | Authorized Godrej Interio Dealer
    </div>
  </footer>
);

export default Footer;
