import SiteMap from "@/components/Sefariah/SiteMap";

export default async function Home() {

  return (
    <div className="p-8 gap-4 flex flex-col items-center bg-gray-900 text-white justify-center min-h-screen">
      <SiteMap />
    </div>
  );
}
