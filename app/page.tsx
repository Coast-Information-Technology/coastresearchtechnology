import Image from "next/image";
import WhyCoastResearch from "./components/WhyCoastResearch";
import ProductsSection from "./components/ProductsSection";
import ImpactSection from "./components/ImpartSection";


export default function Home() {
  return (
    <main>
      <WhyCoastResearch />

      <ProductsSection />
      <ImpactSection />
    </main>
  );
}
