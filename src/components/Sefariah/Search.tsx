"use client";
import { useState } from "react";
import DangerousHtml from "@/components/Sefariah/DangerousHtml";
import { fetchText, fetchRelatedTexts } from "../../../client/sefariaUtils";

const whitelist = ["span", "b", "i", "u", "br", "big"];

interface SefariahRelatedText {
  _id: string;
  index_title: string;
  category: string;
  type: string;
  ref: string;
  anchorRef: string;
  anchorRefExpanded: string[];
  sourceRef: string;
  sourceHeRef: string;
  anchorVerse: number;
  sourceHasEn: boolean;
  compDate: number[];
  commentaryNum: number;
  collectiveTitle: {
    en: string;
    he: string;
  };
  heTitle: string;
}

export default function Search() {

  const [text, setText] = useState("");
  const [relatedReferences, setRelatedReferences] = useState<string[]>([]);
  const [selected_references, setSelectedReferences] = useState<string[]>([]);

  const unselectReference = (index: number) => {
    const item = selected_references[index];
    setSelectedReferences([...selected_references.slice(0, index), ...selected_references.slice(index + 1)]);
    setRelatedReferences([...relatedReferences, item].sort());
  };

  const selectReference = (index: number) => {
    const item = relatedReferences[index];
    setSelectedReferences([...selected_references, item].sort());
    setRelatedReferences([...relatedReferences.slice(0, index), ...relatedReferences.slice(index + 1)]);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text_ref = formData.get("text-ref") as string;
    const the_text = await fetchText(text_ref);
    setText(the_text);

    const related = await fetchRelatedTexts(text_ref) as SefariahRelatedText[];
    console.log(related.length, "related texts found.");
    const refs = Array.from(new Set(related.map((item) => item.index_title))).sort();
    console.log(refs);
    setRelatedReferences(refs);
  };

  return (

    <div className="flex w-full max-w-4xl space-x-4 ">
      <div className="w-1/3 bg-gray-800 p-6 rounded-lg shadow-md ">
        {/* Left column content */}
        <form className="flex flex-col items-center justify-center gap-4" onSubmit={handleSubmit}>
          <input type="text" name="text-ref" placeholder="Genesis 1:3-1:5" className="w-full p-2 text-center text-black border border-gray-300 rounded" />

          <button type="submit" className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
            Search
          </button>
        </form>
      </div>

      <div className="w-2/3 bg-gray-800 p-6 rounded-lg shadow-md">
        {/* Right column content */}
        <h3 className="text-xl font-bold">Source Text</h3>
        <DangerousHtml text={text} whitelisted_elements={whitelist} className="m-0 p-0" />

        <hr className="border-gray-700 border-t-2 w-full" />

        <h3 className="text-xl font-bold mt-4">Related</h3>
        <div className="w-full h-32 overflow-y-scroll border border-gray-300 rounded">
          <ul className="p-0 m-0">
            {
              relatedReferences.map((item, index) => (
                <li key={index} className="cursor-pointer p-2 hover:bg-gray-700" onClick={() => selectReference(index)}>
                  {item}
                </li>
              ))
            }
          </ul>
        </div>

        <h3 className="text-xl font-bold mt-4">Selected References</h3>
        <ul className="flex flex-row flex-wrap gap-2 p-0 m-0 mt-4">
          {
            selected_references.map((item, index) => (
              <RemovableBadge key={index} item={item} onClick={() => unselectReference(index)} />
            ))
          }
        </ul>
      </div>

    </div>

    //  TODO: Add Cards for each selected, related reference

  );
}

function RemovableBadge({ item, onClick }: { item: string, onClick?: () => void }) {
  return (
    <div className="border border-gray-300 px-3 py-1 rounded-full text-center bg-gray-700 text-sm">
      {item}
      <button className="text-gray-400 ml-1" onClick={onClick}>X</button>
    </div>
  );
}
