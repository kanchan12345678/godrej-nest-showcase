import { useState, useEffect } from "react";
import { useSearchParams, Link } from "react-router-dom";
import Layout from "@/components/Layout";
import { categories, products, ProductCategory } from "@/data/products";

const Products = () => {
  const [searchParams] = useSearchParams();
  const initialCat = (searchParams.get("category") as ProductCategory) || "office";
  const [active, setActive] = useState<ProductCategory>(initialCat);

  useEffect(() => {
    const cat = searchParams.get("category") as ProductCategory;
    if (cat && categories.some((c) => c.id === cat)) setActive(cat);
  }, [searchParams]);

  const filtered = products.filter((p) => p.category === active);

  return (
    <Layout>
      <section className="py-16">
        <div className="container mx-auto px-4">
          <h1 className="text-4xl font-bold text-center mb-2">Our Products</h1>
          <p className="text-muted-foreground text-center mb-10">Browse our complete range of Godrej Interio furniture</p>

          {/* Filter Tabs */}
          <div className="flex flex-wrap justify-center gap-2 mb-10">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActive(cat.id)}
                className={`px-5 py-2 rounded-full text-sm font-medium transition-all ${
                  active === cat.id
                    ? "bg-primary text-primary-foreground shadow-md"
                    : "bg-secondary text-foreground hover:bg-primary/10"
                }`}
              >
                {cat.icon} {cat.label}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((p) => (
              <div key={p.id} className="bg-card rounded-xl overflow-hidden border border-border hover:shadow-lg transition-shadow group">
                <div className="overflow-hidden h-56">
                  <img src={p.image} alt={p.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                </div>
                <div className="p-5">
                  <h3 className="font-semibold text-lg mb-1">{p.name}</h3>
                  <p className="text-sm text-muted-foreground mb-4">{p.description}</p>
                  <Link
                    to="/contact"
                    className="inline-block bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover-scale"
                  >
                    Enquire Now
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Products;
