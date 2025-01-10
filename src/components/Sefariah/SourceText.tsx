import Link from "next/link";
import { SEFARIA_API_ENDPOINTS, fetchText } from "../../../client/sefariaUtils";
import DangerousHtml from "./DangerousHtml";

const default_whitelist = ["span", "b", "i", "u", "br", "big"]

interface SourceTextProps {
    reference: string;
    versions: string[];
    use_cols?: boolean;
    whitelist_html?: string[];
    cols?: number;
    mutate?: (_text: string) => string;
}

async function get_all_texts(ref: string, versions: string[]) {
    return await Promise.all(versions.map(async (version) => {
        const text = await fetchText(ref, version);
        return { version, text };
    }));
}

interface VersionText {
    version: string;
    text: string;
}

export default async function SourceText({ 
    reference, 
    versions = ["hebrew", "english"], 
    use_cols = false,
    whitelist_html = default_whitelist,
    cols = 2,
    mutate = (text) => text
}: SourceTextProps) {
    const versions_texts = await get_all_texts(reference, versions);
    return (
        <SourceTextInner
            reference={reference}
            versions={versions_texts}
            use_cols={use_cols}
            whitelist_html={whitelist_html}
            mutate={mutate}
            cols={cols}
        />
    );
}

interface SourceTextInnerProps {
    reference: string;
    versions: VersionText[];
    whitelist_html?: string[];
    mutate?: (_text: string) => string;
    use_cols?: boolean;
    cols?: number;
}


function SourceTextInner({
    reference, versions, whitelist_html = default_whitelist, mutate = (text) => text,
    use_cols = false, cols = 2
}: SourceTextInnerProps) {
    return (
        <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
            <div className="flex flex-row justify-between gap-2 mb-2">
                <h2 className="text-2xl font-bold">{reference}</h2>
                <Link href={SEFARIA_API_ENDPOINTS.sefaria_site(reference)} target="_blank" className="text-blue-400 text-sm my-auto">
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