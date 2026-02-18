import Link from "next/link";

type AuthorTrustBlockProps = {
  authorName: string;
  authorRole: string;
  reviewerName: string;
  reviewerRole: string;
  publishedDate: string;
  reviewedDate: string;
};

export default function AuthorTrustBlock({
  authorName,
  authorRole,
  reviewerName,
  reviewerRole,
  publishedDate,
  reviewedDate,
}: AuthorTrustBlockProps) {
  return (
    <section className="bg-slate-50 border border-slate-200 rounded-xl p-4">
      <p className="text-sm text-slate-700">
        <strong>Written by:</strong> {authorName} ({authorRole})
      </p>
      <p className="text-sm text-slate-700 mt-1">
        <strong>Reviewed by:</strong> {reviewerName} ({reviewerRole})
      </p>
      <p className="text-xs text-slate-500 mt-2">
        Published: {publishedDate} | Last reviewed: {reviewedDate}
      </p>
      <p className="text-xs text-slate-600 mt-2">
        Read our <Link href="/editorial-policy" className="text-blue-700 hover:underline">Editorial Policy</Link>,{" "}
        <Link href="/methodology" className="text-blue-700 hover:underline">Methodology</Link>, and{" "}
        <Link href="/data-sources" className="text-blue-700 hover:underline">Data Sources</Link>.
      </p>
    </section>
  );
}
