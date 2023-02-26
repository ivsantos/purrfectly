import HighlightText from './HighlightText';

interface CardProps {
  title: string;
  children: React.ReactNode;
}

export default function Card({ title, children }: CardProps) {
  return (
    <section className="mx-auto w-full max-w-6xl rounded-2xl bg-secondary">
      <h2 className="relative isolate p-10 text-center text-3xl font-bold">
        <HighlightText /> {title}
      </h2>
      {children}
    </section>
  );
}
