import { Nav } from "@/components/nav";

export default function Home() {
  return (
    <main>
      <Nav />
      <div className="h-screen flex items-center justify-center">
        <p className="text-white/40">Building...</p>
      </div>
    </main>
  );
}
