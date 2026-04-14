import Layout from "@/components/Layout";
import { Users, Calendar, Package, ThumbsUp } from "lucide-react";

const stats = [
  { icon: Calendar, value: "10+", label: "Years in Business" },
  { icon: Users, value: "500+", label: "Happy Clients" },
  { icon: Package, value: "5,000+", label: "Products Delivered" },
  { icon: ThumbsUp, value: "98%", label: "Satisfaction Rate" },
];

const About = () => (
  <Layout>
    {/* Hero */}
    <section className="relative bg-gradient-to-br from-primary/10 via-background to-secondary py-20">
      <div className="container mx-auto px-4 grid md:grid-cols-2 gap-10 items-center">
        <div>
          <h1 className="text-4xl font-bold mb-4">About <span className="text-primary">9 Square</span></h1>
          <p className="text-muted-foreground leading-relaxed mb-4">
            9 Square is an authorized dealer for Godrej Interio, India's leading furniture brand. Since our inception, 
            we have been committed to providing world-class furniture solutions for homes, offices, and industries across the region.
          </p>
          <p className="text-muted-foreground leading-relaxed mb-4">
            Our partnership with Godrej Interio ensures that every product we offer meets the highest standards of quality, 
            durability, and design innovation. We believe furniture should not just fill a space — it should transform it.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            From ergonomic office setups to elegant home furnishings, from secure storage solutions to complete interior 
            transformations, 9 Square is your one-stop destination for premium furniture.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-3">
          <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80" alt="Office" className="rounded-xl shadow-lg w-full h-44 object-cover" />
          <img src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=400&q=80" alt="Interior" className="rounded-xl shadow-lg w-full h-44 object-cover mt-6" />
          <img src="https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=80" alt="Sofa" className="rounded-xl shadow-lg w-full h-44 object-cover" />
          <img src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=400&q=80" alt="Bedroom" className="rounded-xl shadow-lg w-full h-44 object-cover mt-6" />
        </div>
      </div>
    </section>

    {/* Mission */}
    <section className="py-16 bg-card">
      <div className="container mx-auto px-4 text-center max-w-2xl">
        <h2 className="text-3xl font-bold mb-4">Our Mission</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          To make premium, well-designed furniture accessible to everyone. We partner with Godrej Interio to bring 
          you products that combine aesthetics, functionality, and lasting quality — because your spaces deserve the best.
        </p>
      </div>
    </section>

    {/* Stats */}
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {stats.map((s) => (
            <div key={s.label} className="text-center p-6 rounded-xl border border-border">
              <s.icon className="mx-auto mb-3 text-primary" size={32} />
              <div className="text-3xl font-bold text-foreground mb-1">{s.value}</div>
              <div className="text-sm text-muted-foreground">{s.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default About;
