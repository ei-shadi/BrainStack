import Features from "@/components/Home/Features";
import Hero from "@/components/Home/Hero";
import HowItWorks from "@/components/Home/HowItWorks";
import PopularCourses from "@/components/Home/PopularCourses";
import ClientReviews from "@/components/Home/ClientReviews";
import Faq from "@/components/Home/Faq";
import Cta from "@/components/Home/Cta";

const Home = () => {
  return (
    <main>
      {/* Hero Section */}
      <section>
        <Hero />
      </section>

      {/* Features */}
      <section className="py-16 lg:py-[120px]">
        <Features />
      </section>

      {/* Popular Courses */}
      <section className="py-16 lg:py-[120px]">
        <PopularCourses />
      </section>

      {/* How It Works */}
      <section className="py-16 lg:py-[120px]">
        <HowItWorks />
      </section>

      {/* Clients Reviews */}
      <section className="py-16 lg:py-[120px]">
        <ClientReviews />
      </section>

      {/* FAQ */}
      <section className="py-16 lg:py-[120px]">
        <Faq />
      </section>

      {/* CTA Connections */}
      <section className="pb-16 lg:pb-[120px]">
        <Cta />
      </section>
    </main>
  );
};

export default Home;
