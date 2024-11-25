"use client";
import {  useState } from "react";
import { dangerParser } from "@/components/Sefariah/DangerousHtml";

export default function Search() {

  const [text, setText] = useState("");

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const text_ref = formData.get("text-ref") as string;
    const text_api = "https://www.sefaria.org/api/v3/texts/" + encodeURIComponent(text_ref);
    console.log(text_api);
    const response = await fetch(text_api);
    const data = await response.json();
    
    const text = data.versions[0].text;
    console.log(text);
    
    
    setText(text);
  };
  
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
      <form className="flex flex-col items-center justify-center p-8 gap-4" onSubmit={handleSubmit}>
        <input type="text" name="text-ref" placeholder="Genesis 1:3-1:5" className="w-full p-2 text-center text-black" /> 
        
        <button type="submit" className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Search
        </button>
      </form>
    <p>Text: {dangerParser(text)}</p>
    </div>
  );
}

