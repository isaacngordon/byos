interface ChumashProps {
  verseNumber: number;
  verseText: string;
}

export function ChumashComponent({ verseNumber, verseText }: ChumashProps) {
  return (
    <div>
      <h2>Chumash</h2>
      <p>{verseNumber}: {verseText}</p>
    </div>
  );
}
