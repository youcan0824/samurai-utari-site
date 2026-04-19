import { Nav } from "@/components/nav";
import { Hero } from "@/components/hero";
import { Opening } from "@/components/opening";
import { Vision } from "@/components/vision";
import { Why } from "@/components/why";
import { How } from "@/components/how";
import { Service } from "@/components/service";
import { Future } from "@/components/future";
import { Story } from "@/components/story";
import { Team } from "@/components/team";
import { Message } from "@/components/message";
import { Gallery } from "@/components/gallery";
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
      <Story />
      <Team />
      <Message />
      <Gallery />
      <Contact />
      <CompanyInfo />
      <Footer />
    </main>
  );
}
