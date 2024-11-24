interface RashiProps {
  verseNumber: number;
  verseText: string;
  commentary: string;
}

export function RashiComponent({ verseNumber, verseText, commentary }: RashiProps) {
  return (
    <div>
      <h2 className="text-right">Rashi</h2>
      <p>{verseNumber}: <strong>{verseText}.</strong> {commentary}</p>
    </div>
  );
}
