"use client";
// remove any not allowed html elements, and then return the whole text as dangerously set html span
export default function DangerousHtml({ text }: { text: string }) {
  const whitelisted_elements = ["span", "b", "i", "u", "br", "big"];
  const set_of_found_elements = new Set(text.split(/(<\/?[a-z][^>]*>)/i)
    .filter((element) => whitelisted_elements.includes(element.slice(1, element.length - 1))));
  console.log("Found:", set_of_found_elements);

  for (const element of set_of_found_elements) {
    if (!whitelisted_elements.includes(element.slice(1, element.length - 1))) {
      // replace open and closing tags with empty strings using regex to ensure no overlapping tags and attributes are removed
      text = text.replace(new RegExp(`<${element}>`, "g"), "");
      text = text.replace(new RegExp(`</${element}>`, "g"), "");
    }
  }
  return <div 
    dangerouslySetInnerHTML={{ __html: text }} 
    className="m-0 p-0 w-full h-full"
  />;
}