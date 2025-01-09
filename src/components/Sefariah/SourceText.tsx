import Link from "next/link";
import { SEFARIA_API_ENDPOINTS, fetchText } from "../../../client/sefariaUtils";
import DangerousHtml from "./DangerousHtml";
import { useEffect, useState } from "react";

const default_whitelist = ["span", "b", "i", "u", "br", "big"]

interface SourceTextProps {
    ref: string;
    versions: string[];
    whitelist_html?: string[];
}

async function get_all_texts(ref: string, versions: string[]) {
    return await Promise.all(versions.map(async (version) => {
        const text = await fetchText(ref, version);
        return text;
    }));
}

export default function SourceText({ ref, versions, whitelist_html = default_whitelist }: SourceTextProps) {
    const [versions_texts, setVersionTexts] = useState<string[]>([]);

    async function getTexts() {
        const texts = await get_all_texts(ref, versions);
        setVersionTexts(texts);
    }

    useEffect(()=>{
        getTexts();
    }, []);
    

    return (
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
            <h2 className="text-2xl font-bold">{ref}</h2>
            <Link href={SEFARIA_API_ENDPOINTS.sefaria_site(ref)} target="_blank" className="text-blue-400 text-sm">
                Link
            </Link>
            <ul>
                {versions_texts.map((version, index) => (
                    <DangerousHtml key={index} text={version} whitelisted_elements={whitelist_html} className="mb-2" />
                ))}
            </ul>
        </div>
    );
}