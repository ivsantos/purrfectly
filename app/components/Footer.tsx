import CloudinaryLogo from './CloudinaryLogo';

interface FooterIconProps {
  className?: string;
}

const navigation = [
  {
    name: 'GitHub',
    href: 'https://github.com/ivsantos',
    icon: (props: FooterIconProps) => (
      <svg fill="currentColor" width={24} height={24} {...props}>
        <path
          fillRule="evenodd"
          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
          clipRule="evenodd"
        />
      </svg>
    ),
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/ivansantosp/',
    icon: (props: FooterIconProps) => (
      <svg fill="currentColor" width={24} height={24} {...props}>
        <path d="M19 0H5a5 5 0 0 0-5 5v14a5 5 0 0 0 5 5h14a5 5 0 0 0 5-5V5a5 5 0 0 0-5-5zM8 19H5V8h3v11zM6.5 6.732c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zM20 19h-3v-5.604c0-3.368-4-3.113-4 0V19h-3V8h3v1.765c1.396-2.586 7-2.777 7 2.476V19z" />
      </svg>
    ),
  },
];

export default function Footer() {
  return (
    <footer className="h-[110px] bg-white">
      <div className="mx-auto flex h-full max-w-7xl items-center justify-between px-8">
        <div className="basis-48 justify-start">
          <p className="text-center text-xs leading-5 text-gray-500">
            &copy; 2023 Purrfectly.
          </p>
        </div>
        <a
          href="https://cloudinary.com"
          target="_blank"
          rel="noopener noreferrer"
          className="flex basis-48 flex-col items-center justify-center space-x-2"
        >
          <span className="text-xs text-gray-500">Made with</span>
          <CloudinaryLogo />
          <span className="text-2xl">🫰</span>
        </a>
        <div className="flex basis-48 justify-end space-x-6">
          {navigation.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-gray-400 hover:text-gray-500"
              target="_blank"
              rel="noopener noreferrer"
            >
              <span className="sr-only">{item.name}</span>
              <item.icon className="h-6 w-6" />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
