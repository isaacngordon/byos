import { SEFARIA_API_ENDPOINTS, fetchText } from "../../../client/sefariaUtils";
import SourceText, { default_whitelist, VersionText } from "../SourceText";



interface SefariahSourceTextProps {
    reference: string;
    versions: string[];
    use_cols?: boolean;
    whitelist_html?: string[];
    cols?: number;
    mutate?: (_text: string) => string;
}

async function get_all_texts(ref: string, versions: string[]): Promise<VersionText[]> {
    return await Promise.all(versions.map(async (version) => {
        const text = await fetchText(ref, version);
        return { version, text };
    }));
}

export default async function SefariahSourceText({
    reference,
    versions = ["hebrew", "english"],
    use_cols = false,
    whitelist_html = default_whitelist,
    cols = 2,
    mutate = (text) => text
}: SefariahSourceTextProps) {
    const versions_texts = await get_all_texts(reference, versions);
    return (
        <SourceText
            reference={reference}
            versions={versions_texts}
            source_url={SEFARIA_API_ENDPOINTS.sefaria_site(reference)}
            use_cols={use_cols}
            whitelist_html={whitelist_html}
            mutate={mutate}
            cols={cols}
        />
    );
}

