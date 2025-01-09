"use client";
import React from "react";
import SourceText from "@/components/Sefariah/SourceText";


export default function Yisroel() {
    const [references, _setReferences] = React.useState<string[]>([
        "Genesis 32:27",
        "Rashi on Genesis 32:27:2",
        "Genesis 32:29",
        "Rashi on Genesis 32:29:1",
        "Genesis 35:10",
        "Rashi on Genesis 35:10:1",
        "Ramban on Genesis 35:10:1",
        "Rabbeinu Bahya, Bereshit 35:10:1-2",
        "Genesis 45:3",
        "Genesis 45:28",
        "Berachot 12b:26-13a:1",
        "Berachot 13a:4-13a:14",
    ]);

    return (
        <div className="p-8 gap-4 flex flex-col items-center bg-gray-900 text-white justify-center min-h-screen">
            <div className="flex flex-col p-8 gap-4">
                <h1 className="text-4xl font-bold">Yisroel</h1>
                {
                    references.map((data, index) => (
                        <SourceText key={index} ref={references[index]} versions={["hebrew", "english"]} />
                    ))
                }
            </div>
        </div>
    );
}