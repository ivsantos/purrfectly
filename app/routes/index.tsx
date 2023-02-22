import Hero from "~/components/Hero";
import Navbar from "~/components/Navbar";

export default function Index() {
  return (
    <div className="bg-[#FDE7DF]">
      <header className="relative overflow-hidden">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}
