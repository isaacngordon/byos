interface EnglishTranslationProps {
  verseNumber: number;
  translationText: string;
}

export function EnglishTranslationComponent({ verseNumber, translationText }: EnglishTranslationProps) {
  return (
    <div>
      <h2>English Translation</h2>
      {verseNumber}: {translationText}
    </div>
  );
}
