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
                    title: "New Name, Who Dis?",
                    href: "/new-name-who-dis"
                },
            ]
        }
    ]
}

function renderItem(item: any, index: number, parent_href: string = "") {
    return (
        <div key={index} className={`${parent_href ? "ml-4" : ""}`}>
            {
                item.pages && item.pages.length > 0 &&
                <h2>{item.title}</h2>
            }
            {
                item.pages && item.pages.length > 0
                    ? item.pages.map((p: SiteItem, idx: number) => (
                        renderItem(p, idx, item.href)
                    ))
                    : <Link
                        href={`${parent_href}${item.href}`}
                        className="text-blue-300"
                    >
                        {item.title}
                    </Link>
            }
        </div>
    )
}
export default function SiteMap() {
    const data = getSiteMap();
    return (
        <div>
            <h1 className="text-xl underline">Site Map</h1>
            {data.map((item, index) => renderItem(item, index))}
        </div>)
}