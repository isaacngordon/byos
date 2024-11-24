interface RashiProps {
  verseNumber: number;
  verseText: string;
  commentary: string;
}

export function RashiComponent({ verseNumber, verseText, commentary }: RashiProps) {
  return (
    <div>
      <h2>Rashi</h2>
      {verseNumber} <strong>{verseText}</strong>: {commentary}
    </div>
  );
}
