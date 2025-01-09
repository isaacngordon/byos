import Link from "next/link"

interface SiteItem {
    title: string, 
    href: string, 
    pages?: SiteItem[]
}

function getSiteMap() {
    return [
        {
            title: "Home",
            href: "/"
        },
        {
            title: "Search",
            href: "/search"
        },
        {
            title: "Parshas Vayishlach",
            href: "/vayishlach",
            pages: [
                {
                    title: "Parshas Vayishlach",
                    href: "/new-name-who-dis"
                },
            ]
        }
    ]
}

function renderItem(item: any, index: number, parent_href?: string) {
    return (
        <div key={index}>
            {
                item.pages && item.pages.length > 0
                    ? item.pages.map((p:SiteItem, idx:number) => (
                        renderItem(p, idx, item.href)
                    ))
                    : <Link href={`${parent_href}${item.href}`}>{item.title}</Link>
            }
        </div>
    )
}
export default function SiteMap() {
    const data = getSiteMap();
    return (
        <div>
            <h1>Site Map</h1>
            {data.map((item, index) => renderItem(item, index))}
        </div>)
}