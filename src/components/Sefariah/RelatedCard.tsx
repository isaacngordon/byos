import { useState } from "react";
import { fetchText, SEFARIA_API_ENDPOINTS } from "../../../client/sefariaUtils";
import Link from "next/link";

interface RelatedCardProps {
  title: string;
  ref: string;
}

export default function RelatedCard({ title, ref }: RelatedCardProps) {
  const [textSnippet, setTextSnippet] = useState("");

  console.log("Title: ", title);
  console.log("Ref: ", ref);

  const fetchSnippet = async () => {
    const fullText = await fetchText(ref);
    setTextSnippet(fullText.slice(0, 200));
  };

  fetchSnippet();

  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
      <h4 className="text-lg font-bold">{title}</h4>
      <p>{textSnippet}...</p>
      <Link href={`${SEFARIA_API_ENDPOINTS.text(ref)}`} target="_blank" className="text-blue-400">
        Read more
      </Link>
    </div>
  );
}
