interface RelatedCardProps {
  title: string;
}

export default function RelatedCard({ title }: RelatedCardProps) {
  return (
    <div className="border border-gray-300 p-4 rounded-lg bg-gray-700 text-white">
      <h4 className="text-lg font-bold">{title}</h4>
      {/* Additional content for the card can be added here */}
    </div>
  );
}
