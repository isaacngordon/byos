"use client";
import React from "react";
import SourceText from "@/components/Sefariah/SourceText";


export default function Yisroel() {
    const [addtl_references, _setAddlReferences] = React.useState<string[]>([
        "Genesis 32:27",
        "Genesis 45:3",
        "Genesis 45:28",
        "Rashi on Genesis 32:27:2",
        "Rashi on Genesis 32:29:1",
        "Rashi on Genesis 35:10:1",
        "Ramban on Genesis 35:10:1",
        "Rabbeinu Bahya, Bereshit 35:10:1-2",
        // "Berachot 12b:27-13a:1",
        // "Berachot 13a:4-13a:14",
    ]);

    const v_order = ["english", "hebrew"];

    return (
        <div className="p-8 gap-4 flex flex-col items-center bg-gray-900 text-white justify-center min-h-screen">
            <div className="flex flex-col p-8 gap-4">
                <div className="flex flex-col gap-1 mb-8">
                    <p className="text-lg">Parshas Vayishlach</p>
                    <h1 className="text-4xl font-bold">New Name, Who Dis?</h1>
                    <h2 className="text-xl">Author</h2>
                </div>
                
                <p>Start of personal text ...</p>
                <SourceText reference={"Bereshit 32:29"} versions={v_order} use_cols={true} cols={v_order.length} />
                <SourceText reference={"Bereshit 35:10"} versions={v_order} use_cols={true} cols={v_order.length} />
                <p>Add text</p>

                <h3 className="text-xl font-bold my-4">Additional References</h3>
                
                <h4 className="text-lg font-bold">Berachot</h4>
                {/* Berachot 12b:27-13a:1 */}
                {
                    [
                        "Berachot 12b:26",
                        "Berachot 12b:27",
                        "Berachot 12b:28",
                        "Berachot 13a:1",
                    ].map((reference, index) => (
                        <SourceText key={index} reference={reference} versions={v_order} use_cols={true} cols={v_order.length} />
                    ))
                }

                {/* Berachot 13a:4-14 */}
                {
                    [
                        "Berachot 13a:4",
                        "Berachot 13a:5",
                        "Berachot 13a:6",
                        "Berachot 13a:7",
                        "Berachot 13a:8",
                        "Berachot 13a:9",
                        "Berachot 13a:10",
                        "Berachot 13a:11",
                        "Berachot 13a:12",
                        "Berachot 13a:13",
                        "Berachot 13a:14",
                    ].map((reference, index) => (
                        <SourceText key={index} reference={reference} versions={v_order} use_cols={true} cols={v_order.length} />
                    ))
                }

                <h4 className="text-lg font-bold">Other</h4>
                {/* Additional references */}
                {
                    addtl_references.map((reference, index) => (
                        <SourceText key={index} reference={reference} versions={v_order} use_cols={true} cols={v_order.length} />
                    ))
                }




            </div>
        </div>
    );
}