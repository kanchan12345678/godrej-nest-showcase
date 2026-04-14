import Layout from "@/components/Layout";
import { Building2 } from "lucide-react";

const clients = [
  "AIIMS Raibariely", "IOCL", "BPCL", "HPCL", "UP PWD", "UPRNN", "CPWD", "NABARD",
  "LOHIA GROUP", "AERO ALLOY", "TATA", "LDA", "C&DS", "UPSIDCO", "AWAS VIKAS",
  "HAL", "POWER GRID", "NTPC", "GAIL"
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
      </div>
    </section>
  </Layout>
);

export default Clients;
