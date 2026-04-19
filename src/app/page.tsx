import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Prologue } from "@/components/prologue";
import { About } from "@/components/about";
import { Message } from "@/components/message";
import { Gallery } from "@/components/gallery";
import { Numbers } from "@/components/numbers";
import { Service } from "@/components/service";
import { Team } from "@/components/team";
import { Contact } from "@/components/contact";
import { CompanyInfo } from "@/components/company-info";
import { Footer } from "@/components/footer";

export default function Home() {
  return (
    <main>
      <Nav />
      <Hero />
      <Prologue />
      <About />
      <Message />
      <Gallery />
      <Numbers />
      <Service />
      <Team />
      <Contact />
      <CompanyInfo />
      <Footer />
    </main>
  );
}
