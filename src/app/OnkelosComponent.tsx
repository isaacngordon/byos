interface OnkelosProps {
  verseNumber: number;
  verseText: string;
}

export function OnkelosComponent({ verseNumber, verseText }: OnkelosProps) {
  return (
    <div>
      {verseNumber}: {verseText}
    </div>
  );
}
