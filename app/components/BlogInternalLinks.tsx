import Link from "next/link";

type InternalLinkItem = {
  href: string;
  label: string;
};

type BlogInternalLinksProps = {
  title?: string;
  description?: string;
  links: InternalLinkItem[];
};

export default function BlogInternalLinks({
  title = "Next Tools and Calculators",
  description = "Use these pages to move from analysis to action.",
  links,
}: BlogInternalLinksProps) {
  return (
    <section className="bg-slate-50 rounded-xl p-6 border border-slate-200">
      <h2 className="text-2xl font-bold text-slate-900 mb-2">{title}</h2>
      <p className="text-slate-600 mb-3">{description}</p>
      <div className="flex flex-wrap gap-3">
        {links.map((link) => (
          <Link key={`${link.href}-${link.label}`} href={link.href} className="text-blue-700 hover:underline">
            {link.label}
          </Link>
        ))}
      </div>
    </section>
  );
}
