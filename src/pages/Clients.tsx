import Layout from "@/components/Layout";
import { clients } from "@/data/clients"; // Import clients data
import { Building2 } from "lucide-react";

const Clients = () => (
  <Layout>
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-bold text-center mb-2">Our Clients</h1>
        <p className="text-muted-foreground text-center mb-12">Trusted by leading organizations across industries</p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 mb-16">
          {clients.map((client) => (
            <div key={client.id} className="flex flex-col items-center justify-center p-4 rounded-xl border border-border bg-card hover:border-primary/30 hover:shadow-sm transition-all h-32">
              <img src={client.logo} alt={client.name} className="max-h-16 object-contain mb-2" />
              <span className="text-sm font-medium text-center line-clamp-1">{client.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  </Layout>
);

export default Clients;
