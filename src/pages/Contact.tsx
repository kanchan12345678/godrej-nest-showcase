import { useState } from "react";
import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Message Sent!", description: "We'll get back to you within 24 hours." });
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-center mb-12">We'd love to hear from you</p>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto">
            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label className="block text-sm font-medium mb-1">Name</label>
                <input
                  type="text"
                  required
                  maxLength={100}
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Email</label>
                <input
                  type="email"
                  required
                  maxLength={255}
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none"
                  placeholder="you@email.com"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Phone</label>
                <input
                  type="tel"
                  maxLength={15}
                  value={form.phone}
                  onChange={(e) => setForm({ ...form, phone: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none"
                  placeholder="+91 98765 43210"
                />
              </div>
              <div>
                <label className="block text-sm font-medium mb-1">Message</label>
                <textarea
                  required
                  maxLength={1000}
                  rows={4}
                  value={form.message}
                  onChange={(e) => setForm({ ...form, message: e.target.value })}
                  className="w-full px-4 py-2 rounded-lg border border-input bg-background focus:ring-2 focus:ring-ring outline-none resize-none"
                  placeholder="Tell us what you need..."
                />
              </div>
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-medium hover-scale">
                Send Message
              </button>
            </form>

            {/* Info */}
            <div className="space-y-6">
              <div>
                <h3 className="text-lg font-semibold mb-4">Get in Touch</h3>
                <div className="space-y-4">
                  {[
                    { icon: Phone, label: "+91 98765 43210" },
                    { icon: Mail, label: "info@9square.in" },
                    { icon: MapPin, label: "123 Furniture Lane, Mumbai, Maharashtra 400001" },
                    { icon: Clock, label: "Mon–Sat: 10:00 AM – 8:00 PM" },
                  ].map((item) => (
                    <div key={item.label} className="flex items-start gap-3">
                      <item.icon size={20} className="text-primary shrink-0 mt-0.5" />
                      <span className="text-sm text-muted-foreground">{item.label}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Map placeholder */}
              <div className="bg-secondary rounded-xl h-48 flex items-center justify-center">
                <span className="text-muted-foreground text-sm">📍 Map — Visit our showroom</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
