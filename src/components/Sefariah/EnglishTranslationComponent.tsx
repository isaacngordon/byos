interface EnglishTranslationProps {
  verseNumber: number;
  translationText: string;
}

export function EnglishTranslationComponent({ verseNumber, translationText }: EnglishTranslationProps) {
  return (
    <div>
      <h2 className="text-right font-bold text-xl">English Translation</h2>
      <p>{verseNumber}: {translationText}</p>
    </div>
  );
}
