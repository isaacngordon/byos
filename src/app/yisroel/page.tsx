"use client";
import DangerousHtml from "@/components/Sefariah/DangerousHtml";
import { fetchText, SEFARIA_API_ENDPOINTS } from "../../../client/sefariaUtils";
import React from "react";
import Link from "next/link";


export default function Yisroel() {

    const [references, _setReferences] = React.useState<string[]>([
        "Genesis 32:27",
        "Rashi on Genesis 32:27:2",
        "Genesis 32:29",
        "Rashi on Genesis 32:29:1",
        "Genesis 35:10",
        "Rashi on Genesis 35:10:1",
        "Ramban on Genesis 35:10:1",
        "Berachot 12b:26-13a:1",
        "Berachot 13a:4-13a:14"
    ]);
    const [reference_data, setReferenceData] = React.useState<string[]>([]);

    React.useEffect(() => {
        Promise.all(references.map(ref => fetchText(ref)))
            .then(data => setReferenceData(data));
    }, [references]);

    return (
        <div className="p-8 gap-4 flex flex-col items-center bg-gray-900 text-white justify-center min-h-screen">
            <div className="flex flex-col p-8 gap-4">
                    <h1 className="text-4xl font-bold">Yisroel</h1>
                    
                    {
                        reference_data.map((data, index) => (
                            <div key={index}>
                                <h2 className="text-2xl font-bold">{references[index]}</h2>
                                <Link href={SEFARIA_API_ENDPOINTS.sefaria_site(references[index])} target="_blank" className="text-blue-400 text-sm">
                                    Link
                                </Link>
                                <DangerousHtml text={data} whitelisted_elements={[]} />
                            </div>
                        ))
                    }
            </div>
        </div>
    );
}