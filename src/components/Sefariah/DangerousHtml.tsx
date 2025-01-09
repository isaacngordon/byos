"use client";
// remove any not allowed html elements, and then return the whole text as dangerously set html span
export default function DangerousHtml({
  text, whitelisted_elements, className
}: {
  text: string, whitelisted_elements: string[], className?: string
}) {
  const list_of_found_elements = text.match(/<\/?[a-z][^>]*>/gi) || [];
  console.log("Found Elements:", list_of_found_elements);
  const set_of_whitelisted_elements = new Set(
    list_of_found_elements
    .filter((element) => whitelisted_elements.includes(element.replace(/<\/?|>/g, "")))
  );
  const set_of_non_whitelisted_elements = new Set(
    list_of_found_elements
    .filter((element) => !whitelisted_elements.includes(element.replace(/<\/?|>/g, "")))
  );
  
  console.log("Set of Found Whitelisted Elements:", set_of_whitelisted_elements);
  console.log("Set ofFound Non-Whitelisted Elements:", set_of_non_whitelisted_elements);

  for (const element of set_of_non_whitelisted_elements) {
    // replace open and closing tags with empty strings using regex to ensure no overlapping tags and attributes are removed
    text = text.replace(new RegExp(`<${element}>`, "g"), "");
    text = text.replace(new RegExp(`</${element}>`, "g"), "");
    console.log("Removed Element:", element);
  }
  return <div
    dangerouslySetInnerHTML={{ __html: text }}
    className={className}
  />;
}