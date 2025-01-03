interface OnkelosProps {
  verseNumber: number;
  verseText: string;
}

export function OnkelosComponent({ verseNumber, verseText }: OnkelosProps) {
  return (
    <div>
      <h2 className="text-right font-bold text-xl">Onkelos</h2>
      <p>{verseNumber}: {verseText}</p>
    </div>
  );
}
