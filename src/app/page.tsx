import { ChumashComponent } from "./ChumashComponent";
import { RashiComponent } from "./RashiComponent";
import { OnkelosComponent } from "./OnkelosComponent";
import { EnglishTranslationComponent } from "./EnglishTranslationComponent";

async function fetchData() {
  // Simulate fetching data from an API
  return {
    verseNumber: 1,
    verseText: "In the beginning God created the heavens and the earth.",
    translationText: "In the beginning God created the heavens and the earth.",
    commentary: "Rashi's commentary on the verse."
  };
}

export default async function Home() {
  const data = await fetchData();

  return (
    <div className="flex flex-col items-end justify-center min-h-screen p-8 gap-4">
      <ChumashComponent verseNumber={data.verseNumber} verseText={data.verseText} />
      <EnglishTranslationComponent verseNumber={data.verseNumber} translationText={data.translationText} />
      <OnkelosComponent verseNumber={data.verseNumber} verseText={data.verseText} />
      <RashiComponent verseNumber={data.verseNumber} verseText="In the beginning" commentary={data.commentary} />
    </div>
  );
}
