import Hero from './Hero';
import Navbar from './Navbar';

export default function Header() {
  return (
    <header className="relative h-screen overflow-hidden">
      <Navbar />
      <Hero />
    </header>
  );
}
