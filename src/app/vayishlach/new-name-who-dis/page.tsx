"use client";
import React from "react";
import SourceText from "@/components/Sefariah/SourceText";


export default function Yisroel() {
    const [addtl_references, _setAddlReferences] = React.useState<string[]>([
        "Genesis 32:27",
        "Genesis 45:3",
        "Bereshit 45:27-28",
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


                <p>
                    Why does the Torah continue to call Yaakov by the name <i>"Yaakov"</i>, after he is given the name <i>"Yisroel"</i>? I would think that since by Avraham, who has his name-changed quoted once,  we no longer refer to him by is old name, then by Yaakov, where we state twice that Yaakov will no longer be Yaakov, then a reversion in names certainly should be forbidden!
                </p>
                
                <p> Now, it is obvious that his name remains Yaakov since his name is used another XX times in Genesis alone. 
                    Rashi at the top of <i>Berachot 13a</i> highlights an interesting example, <i>Bereshit 46:2</i> where both names are used back to back:</p>
                <SourceText 
                    reference={"Bereshit 46:2"}
                    versions={v_order} use_cols={true} cols={v_order.length}
                />

                <p> 
                    The real question is really one of consistency, since the first two verses seem to clearly state that <i>"No longer will you be called Jacob"</i>.

                </p>
                <SourceText
                    reference={"Bereshit 32:29"}
                    versions={v_order} use_cols={true} cols={v_order.length}
                    // mutate={(text) => text.replace(/and/g, "<span style=\"color: red;\">and</span>")}
                />
                <SourceText
                    reference={"Bereshit 35:10"}
                    versions={v_order} use_cols={true} cols={v_order.length}
                />
                
                <p>We can bifurcate this question into 4 time periods: </p>
                <ol className="list-decimal list-inside px-4">
                        <li>From the time when the spirit of Esau "blesses" Yaakov (Berashit 32:29),  until the time Hashem "blesses" Yisroel (Bereshit 35:10).</li>
                        <li>From the time when Hashem "blesses" Yisroel (Bereshit 35:10), onwards for the remainder of Yaakov's life, i.e the rest of Bereshit.</li>
                        <li>The remainder of the Tanach,</li>
                        <li>and lastly, the present day.</li>
                    </ol>

                <p>
                    From the time Yaakov wrestled with the Angel of Esau, the answer is trival: 
                    <br></br>
                    An angel is only capable of carrying out his task, and has no capability to bless of its own accord. Rather, 
                </p>

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