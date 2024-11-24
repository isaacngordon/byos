interface OnkelosProps {
  verseNumber: number;
  verseText: string;
}

export function OnkelosComponent({ verseNumber, verseText }: OnkelosProps) {
  return (
    <div>
      <h2>Onkelos</h2>
      <p>{verseNumber}: {verseText}</p>
    </div>
  );
}
