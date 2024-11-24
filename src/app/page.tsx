import { ChumashComponent } from "./ChumashComponent";
import { RashiComponent } from "./RashiComponent";
import { OnkelosComponent } from "./OnkelosComponent";
import { EnglishTranslationComponent } from "./EnglishTranslationComponent";

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
      <ChumashComponent verseNumber={1} verseText="In the beginning God created the heavens and the earth." />
      <EnglishTranslationComponent verseNumber={1} translationText="In the beginning God created the heavens and the earth." />
      <RashiComponent verseNumber={1} verseText="In the beginning" commentary="Rashi's commentary on the verse." />
      <OnkelosComponent verseNumber={1} verseText="In the beginning God created the heavens and the earth." />
    </div>
  );
}
