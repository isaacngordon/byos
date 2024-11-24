interface RashiProps {
  verseNumber: number;
  verseText: string;
  commentary: string;
}

export function RashiComponent({ verseNumber, verseText, commentary }: RashiProps) {
  return (
    <div>
      {verseNumber} <strong>{verseText}</strong>: {commentary}
    </div>
  );
}
