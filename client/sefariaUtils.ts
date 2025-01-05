export async function searchSefaria(query: string, filters: string[] = [], size: number = 10) {
  const searchApi = "https://www.sefaria.org/api/search-wrapper";
  const body = {
    query,
    filters,
    size,
    type: "text",
  };

  const response = await fetch(searchApi, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  });

  if (!response.ok) {
    throw new Error("Failed to fetch search results");
  }

  return response.json();
}

export async function fetchRelatedTexts(textRef: string) {
  const relatedApi = "https://www.sefaria.org/api/related/" + encodeURIComponent(textRef);
  const response = await fetch(relatedApi);

  if (!response.ok) {
    throw new Error("Failed to fetch related texts");
  }

  const relatedResponse = await response.json();
  return relatedResponse.links;
}

export async function fetchText(textRef: string) {
  const textApi = "https://www.sefaria.org/api/v3/texts/" + encodeURIComponent(textRef);
  const response = await fetch(textApi);

  if (!response.ok) {
    throw new Error("Failed to fetch text");
  }

  const textResponse = await response.json();
  let theText = textResponse.versions[0].text;

  const flattenText = (nestedText: string | []): string => {
    if (typeof nestedText === "string") {
      return nestedText;
    }
    return nestedText.map(flattenText).join("<br>");
  };

  return flattenText(theText);
}
