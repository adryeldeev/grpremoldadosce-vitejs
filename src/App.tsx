import CTASection from "./components/Cta/Cta";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import Hero from "./components/Hero/Hero";
import ProductsSection from "./components/Produtos/Produtos";
import Stats from "./components/Sobre/Sobre";
import SEO from "./components/SEO/SEO";
import PQEscolherGR from "./components/PQEscolherGR/PQEscolherGR";
import ComoFunciona from "./components/ComoFunciona/ComoFunciona";
import Depoimentos from "./components/Depoimentos/Depoimentos";
import WhatsappButton from "./components/WhatsappButton/WhatsappButton";
import { seoConfig } from "./config/seo";

export default function Home() {
  return (
    <main className="antialiased font-sans">
      <SEO 
        title={seoConfig.defaultTitle}
        description={seoConfig.defaultDescription}
        keywords={seoConfig.defaultKeywords}
        url={seoConfig.siteUrl}
      />
      <Header />
      <Hero />
      <Stats />
      <ProductsSection /> 
      <ComoFunciona />
      <PQEscolherGR />
      <Depoimentos />
      <CTASection />
      <Footer />
      <WhatsappButton />
    </main>
  );
}