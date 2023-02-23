import Hero from '~/components/Hero';
import Navbar from '~/components/Navbar';

export default function Index() {
  return (
    <div className="bg-[#FEF9F6]">
      <header className="relative h-screen overflow-hidden">
        <Navbar />
        <Hero />
      </header>
    </div>
  );
}
