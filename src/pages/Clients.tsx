import Layout from "@/components/Layout";
import { Building2, Quote } from "lucide-react";

const clients = [
  "Tata Consultancy Services", "Wipro Technologies", "Infosys Ltd", "Reliance Industries",
  "HDFC Bank", "State Bank of India", "Mahindra Group", "Larsen & Toubro",
  "Bajaj Auto", "Godrej Properties", "Hindustan Unilever", "ITC Limited",
  "Tech Mahindra", "Cipla Pharmaceuticals", "Asian Paints", "Adani Group",
];

const testimonials = [
  { name: "Rajesh Sharma", company: "Tech Solutions Pvt Ltd", text: "9 Square helped us furnish our entire 200-seater office with premium Godrej Interio furniture. The quality and service were exceptional." },
  { name: "Priya Menon", company: "HomeOwner", text: "We renovated our entire home with furniture from 9 Square. The Godrej Interio range is beautiful and durable. Highly recommend!" },
  { name: "Vikram Patel", company: "Patel Industries", text: "The Godrej security solutions from 9 Square give us complete peace of mind. Professional installation and great after-sales support." },
];

const Clients = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Our Clients</h1>
        <p className="text-muted-foreground text-center mb-12">Trusted by leading organizations across industries</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {clients.map((name) => (
            <div key={name} className="flex items-center gap-3 p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all">
              <Building2 size={20} className="text-primary shrink-0" />
              <span className="text-sm font-medium">{name}</span>
            </div>
          ))}
        </div>

        <h2 className="text-3xl font-bold text-center mb-10">What Our Clients Say</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((t) => (
            <div key={t.name} className="bg-card rounded-xl p-6 border border-border relative">
              <Quote size={24} className="text-primary/20 absolute top-4 right-4" />
              <p className="text-muted-foreground mb-4 italic">"{t.text}"</p>
              <div>
                <div className="font-semibold text-sm">{t.name}</div>
                <div className="text-xs text-muted-foreground">{t.company}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clients;
