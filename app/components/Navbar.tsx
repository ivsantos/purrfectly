import Logo from "./Logo";
import NavActions from "./NavActions";
import NavTabs from "./NavTabs";

export default function Navbar() {
  return (
    <nav className="relative z-20 bg-opacity-90 backdrop-blur-xl backdrop-filter">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center">
          <Logo />
          <div className="ml-16 flex h-full w-full items-center">
            <NavTabs />
            <NavActions />
          </div>
        </div>
      </div>
    </nav>
  );
}
