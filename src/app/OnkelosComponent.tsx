interface OnkelosProps {
  verseNumber: number;
  verseText: string;
}

export function OnkelosComponent({ verseNumber, verseText }: OnkelosProps) {
  return (
    <div>
      <h2>Onkelos</h2>
      {verseNumber}: {verseText}
    </div>
  );
}
