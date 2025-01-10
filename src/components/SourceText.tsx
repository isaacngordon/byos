import Link from "next/link";
import DangerousHtml from "./Sefariah/DangerousHtml";

export const default_whitelist = ["span", "b", "i", "u", "br", "big"]

export interface VersionText {
    version: string;
    text: string;
}

export interface SourceTextProps {
    reference: string;
    versions: VersionText[];
    source_url: string;
    whitelist_html?: string[];
    mutate?: (_text: string) => string;
    use_cols?: boolean;
    cols?: number;
}

export default function SourceText({
    reference, versions, source_url,
    whitelist_html = default_whitelist, mutate = (text) => text,
    use_cols = false, cols = 2
}: SourceTextProps) {
    return (
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
            <div className="flex flex-row justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold">{reference}</h2>
                <Link href={source_url} target="_blank" className="text-blue-400 text-sm my-auto">
                    [Source]
                </Link>
            </div>
            <ul className={use_cols ? "grid gap-2 grid-cols-" + cols : ""}>
                {versions.map((version, index) => (
                    <DangerousHtml
                        key={index}
                        text={mutate(version.text)}
                        whitelisted_elements={whitelist_html}
                        className={`px-2 py-1 ${version.version === "hebrew" ? "text-" : "text-sm"}`}
                    />
                ))}
            </ul>
        </div>
    );
}