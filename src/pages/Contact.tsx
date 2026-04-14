import Layout from "@/components/Layout";
import { Phone, Mail, MapPin, Clock } from "lucide-react";

const Contact = () => {
  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Contact Us</h1>
          <p className="text-muted-foreground text-center mb-12">We'd love to hear from you</p>

          <div className="grid lg:grid-cols-2 gap-10 max-w-6xl mx-auto items-center">
            {/* Info */}
            <div className="space-y-8 bg-card p-8 md:p-12 rounded-2xl border border-border shadow-sm h-full">
              <div>
                <h3 className="text-2xl font-semibold mb-8">Contact Information</h3>
                <div className="space-y-8">
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Phone size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Call Us</p>
                      <span className="text-base text-muted-foreground">+91 79856 07812</span>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Mail size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Email Us</p>
                      <span className="text-base text-muted-foreground">info@9squareindia.com</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <MapPin size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Our Location</p>
                      <span className="text-base text-muted-foreground">2/436, Vibhav Khand, Gomti Nagar, Lucknow, Uttar Pradesh 226010</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div className="bg-primary/10 p-3 rounded-full shrink-0">
                      <Clock size={24} className="text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-semibold mb-1">Working Hours</p>
                      <span className="text-base text-muted-foreground">Mon–Sat: 10:00 AM – 8:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-secondary rounded-2xl overflow-hidden h-[500px] shadow-sm border border-border">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d56946.716451765715!2d80.94344784863281!3d26.866346500000002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399be3121336d167%3A0x267c8ff263952dc0!2s9%20Square%20Godrej%20Interio%20Furniture%20Office%20Furniture%20Modular%20Kitchen%20Luxury%20furniture%20Locker%20Safe%20Sofa%20Dining%20Bed%20chair%20table!5e0!3m2!1sen!2sin!4v1776144326952!5m2!1sen!2sin"   
                width="100%" 
                height="100%" 
                style={{ border: 0 }} 
                allowFullScreen={true} 
                loading="lazy" 
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
