import { Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { categories, products } from "@/data/products";
import { ArrowRight, Award, Truck, ShieldCheck, Wrench } from "lucide-react";

const featuredProducts = products.filter((_, i) => [0, 6, 12, 18].includes(i));

const clientNames = [
  "AIIMS Raibariely", "IOCL", "BPCL", "HPCL", "UP PWD", "UPRNN", "CPWD", "NABARD",
  "LOHIA GROUP", "AERO ALLOY", "TATA", "LDA", "C&DS", "UPSIDCO", "AWAS VIKAS",
  "HAL", "POWER GRID", "NTPC", "GAIL"
];

const Index = () => (
  <Layout>
    {/* Hero */}
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/10 via-background to-secondary">
      <div className="container mx-auto px-4 py-20 md:py-32 flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1 animate-fade-up">
          <p className="text-primary font-semibold mb-2 tracking-wide uppercase text-sm">Authorized Godrej Interio Dealer</p>
          <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight mb-6">
            Square Your Life
          </h1>
          <p className="text-muted-foreground text-lg mb-8 max-w-lg">
            Premium furniture solutions for your home, office, and business. Trusted quality from Godrej Interio, delivered by 9 Square.
          </p>
          <div className="flex flex-wrap gap-4">
            <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover-scale">
              Explore Products <ArrowRight size={18} />
            </Link>
            <Link to="/contact" className="inline-flex items-center gap-2 border-2 border-primary text-primary px-6 py-3 rounded-lg font-medium hover:bg-primary/5 transition-colors">
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="flex-1 grid grid-cols-2 gap-3">
          <img src="/sofa1.png" alt="Modern sofa" className="rounded-xl shadow-lg hover-scale w-full h-40 object-cover" />
          <img src="/4_Seater_Dining.webp" alt="Office space" className="rounded-xl shadow-lg hover-scale w-full h-40 object-cover mt-8" />
          <img src="/locker_1.webp" alt="Modern interior" className="rounded-xl shadow-lg hover-scale w-full h-40 object-cover" />
          <img src="/Cross_Full_Back.webp" alt="Kitchen" className="rounded-xl shadow-lg hover-scale w-full h-40 object-cover mt-8" />
        </div>
      </div>
    </section>

    {/* Categories */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Our Categories</h2>
        <p className="text-muted-foreground text-center mb-10">Explore our wide range of Godrej Interio products</p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.id}
              to={`/products?category=${cat.id}`}
              className="group bg-secondary rounded-xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
              <div className="text-4xl mb-3">{cat.icon}</div>
              <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">{cat.label}</h3>
            </Link>
          ))}
        </div>
      </div>
    </section>

    {/* Why Choose Us */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-10">Why Choose 9 Square</h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { icon: Award, title: "Authorized Dealer", desc: "Official Godrej Interio partnership" },
            { icon: ShieldCheck, title: "Warranty Assured", desc: "Manufacturer warranty on all products" },
            { icon: Truck, title: "Free Delivery", desc: "Complimentary delivery & assembly" },
            { icon: Wrench, title: "Expert Installation", desc: "Professional setup by trained team" },
          ].map((item) => (
            <div key={item.title} className="text-center p-6 rounded-xl border border-border hover:border-primary/30 hover:shadow-md transition-all">
              <item.icon className="mx-auto mb-3 text-primary" size={36} />
              <h3 className="font-semibold mb-1">{item.title}</h3>
              <p className="text-sm text-muted-foreground">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

    {/* Featured Products */}
    <section className="py-16 bg-secondary">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Featured Products</h2>
        <p className="text-muted-foreground text-center mb-10">Handpicked bestsellers from our collection</p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {featuredProducts.map((p) => (
            <div key={p.id} className="bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-lg transition-shadow group">
              <div className="overflow-hidden h-48">
                <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{p.name}</h3>
                <p className="text-sm text-muted-foreground mb-3">{p.description}</p>
                <Link to="/contact" className="text-primary text-sm font-medium hover:underline">Enquire Now →</Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-8">
          <Link to="/products" className="inline-flex items-center gap-2 bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover-scale">
            View All Products <ArrowRight size={18} />
          </Link>
        </div>
      </div>
    </section>

    {/* Client Marquee */}
    <section className="py-12 overflow-hidden border-y border-border">
      <h2 className="text-2xl font-bold text-center mb-8">Trusted By Leading Brands</h2>
      <div className="flex whitespace-nowrap animate-marquee">
        {[...clientNames, ...clientNames].map((name, i) => (
          <div key={i} className="inline-flex items-center justify-center mx-8 px-6 py-3 bg-secondary rounded-lg min-w-[180px]">
            <span className="text-sm font-medium text-muted-foreground">{name}</span>
          </div>
        ))}
      </div>
    </section>
  </Layout>
);

export default Index;
