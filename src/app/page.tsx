import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Opening } from "@/components/opening";
import { Philosophy } from "@/components/philosophy";
import { Mission } from "@/components/mission";
import { Why } from "@/components/why";
import { How } from "@/components/how";
import { Service } from "@/components/service";
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
      <Philosophy />
      <Mission />
      <Why />
      <How />
      <Service />
      <Gallery />
      <Team />
      <Contact />
      <CompanyInfo />
      <Footer />
    </main>
  );
}
