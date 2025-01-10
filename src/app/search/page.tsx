import Search from "@/components/Sefariah/Search";
import SiteMap from "@/components/SiteMap";


// async function fetchData() {
//   // Simulate fetching data from an API
//   return {
//     verseNumber: 1,
//     verseText: "In the beginning God created the heavens and the earth.",
//     translationText: "In the beginning God created the heavens and the earth.",
//     commentary: "Rashi's commentary on the verse."
//   };
// }



export default async function SearchPage() {

  return (
    <div className="p-8 gap-4 flex flex-col items-center bg-gray-900 text-white justify-center min-h-screen">
      {/* <div className="flex flex-col p-8 gap-4"> */}
      {/* <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4"> */}
      <SiteMap />
      <Search />
    </div>
  );
}



// export default async function Home() {
//   const data = await fetchData();

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-8 gap-4">
//       <div>
//         <h1 className="text-4xl font-bold">Bible Verse</h1>
//       </div>
//       <div>
//         <h2 className="text-2xl font-bold">Context</h2>
//         <ul>
//           {exampleContext.map((item) => (
//             <li key={item.ref}>
//               <a href={item.ref}>{item.title}</a>
//             </li>
//           ))}
//         </ul>
//         <h2 className="text-2xl font-bold">Bible Verse</h2>
//       </div>
//       <div className="flex flex-col items-end justify-center min-h-screen p-8 gap-4">
//         <ChumashComponent verseNumber={data.verseNumber} verseText={data.verseText} />
//         <EnglishTranslationComponent verseNumber={data.verseNumber} translationText={data.translationText} />
//         <OnkelosComponent verseNumber={data.verseNumber} verseText={data.verseText} />
//         <RashiComponent verseNumber={data.verseNumber} verseText="In the beginning" commentary={data.commentary} />
//       </div>
//     </div>
//   );
// }
