import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Opening } from "@/components/opening";
import { Vision } from "@/components/vision";
import { Why } from "@/components/why";
import { How } from "@/components/how";
import { Service } from "@/components/service";
import { Future } from "@/components/future";
import { Gallery } from "@/components/gallery";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { CompanyInfo } from "@/components/company-info";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Opening />
      <Vision />
      <Why />
      <How />
      <Service />
      <Future />
      <Gallery />
      <Team />
      <Contact />
      <CompanyInfo />
      <Footer />
    </main>
  );
}
