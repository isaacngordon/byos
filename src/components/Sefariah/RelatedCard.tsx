import { useEffect, useState } from "react";
import { fetchText } from "../../../client/sefariaUtils";

interface RelatedCardProps {
  title: string;
  ref: string;
}

export default function RelatedCard({ title, ref }: RelatedCardProps) {
  const [textSnippet, setTextSnippet] = useState("");

  useEffect(() => {
    const fetchSnippet = async () => {
      const fullText = await fetchText(ref);
      setTextSnippet(fullText.slice(0, 200));
    };

    fetchSnippet();
  }, [ref]);

  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
      <h4 className="text-lg font-bold">{title}</h4>
      <p>{textSnippet}...</p>
      <a href={`https://www.sefaria.org/${encodeURIComponent(ref)}`} target="_blank" rel="noopener noreferrer" className="text-blue-400">
        Read more
      </a>
    </div>
  );
}
