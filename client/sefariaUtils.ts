export const SEFARIA_API_ENDPOINTS = {
  search: "https://www.sefaria.org/api/search-wrapper",
  related: (textRef: string) => `https://www.sefaria.org/api/related/${encodeURIComponent(textRef)}`,
  text: (textRef: string) => `https://www.sefaria.org/api/v3/texts/${encodeURIComponent(textRef)}`,
};

export async function searchSefaria(query: string, filters: string[] = [], size: number = 10) {
  const body = {
    query,
    filters,
    size,
    type: "text",
  };

  const response = await fetch(SEFARIA_API_ENDPOINTS.search, {
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
  const response = await fetch(SEFARIA_API_ENDPOINTS.related(textRef));

  if (!response.ok) {
    throw new Error("Failed to fetch related texts");
  }

  const relatedResponse = await response.json();
  return relatedResponse.links;
}

export async function fetchText(textRef: string) {
  const response = await fetch(SEFARIA_API_ENDPOINTS.text(textRef));

  if (!response.ok) {
    throw new Error("Failed to fetch text");
  }

  const textResponse = await response.json();
  const theText = textResponse.versions[0].text;

  const flattenText = (nestedText: string | []): string => {
    if (typeof nestedText === "string") {
      return nestedText;
    }
    return nestedText.map(flattenText).join("<br>");
  };

  return flattenText(theText);
}
