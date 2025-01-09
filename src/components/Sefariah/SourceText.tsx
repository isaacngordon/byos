import Link from "next/link";
import { SEFARIA_API_ENDPOINTS, fetchText } from "../../../client/sefariaUtils";
import DangerousHtml from "./DangerousHtml";
import { useEffect, useState } from "react";

const default_whitelist = ["span", "b", "i", "u", "br", "big"]

interface SourceTextProps {
    reference: string;
    versions: string[];
    whitelist_html?: string[];
}

async function get_all_texts(ref: string, versions: string[]) {
    return await Promise.all(versions.map(async (version) => {
        const text = await fetchText(ref, version);
        return text;
    }));
}

export default function SourceText({ reference, versions, whitelist_html = default_whitelist }: SourceTextProps) {
    const [versions_texts, setVersionTexts] = useState<string[]>([]);
    const [loading, setLoading] = useState(true);


    async function getTexts() {
        setLoading(true);
        const texts = await get_all_texts(reference, versions);
        setVersionTexts(texts);
        setLoading(false);
    }

    useEffect(()=>{
        getTexts();
    }, []);
    

    return (
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
            <div className="flex flex-row justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold">{reference}</h2>
                <Link href={SEFARIA_API_ENDPOINTS.sefaria_site(reference)} target="_blank" className="text-blue-400 text-sm my-auto">
                    [Source]
                </Link>
            </div>
            <ul>
                {loading && <div>Loading...</div>}
                {!loading && versions_texts.map((version, index) => (
                    <DangerousHtml key={index} text={version} whitelisted_elements={whitelist_html} className="px-2 py-1" />
                ))}
            </ul>
        </div>
    );
}