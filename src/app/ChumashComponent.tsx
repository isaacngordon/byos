interface ChumashProps {
  verseNumber: number;
  verseText: string;
}

export function ChumashComponent({ verseNumber, verseText }: ChumashProps) {
  return (
    <div>
      {verseNumber}: {verseText}
    </div>
  );
}
