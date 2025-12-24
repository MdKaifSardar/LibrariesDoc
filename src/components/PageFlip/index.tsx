// 'use client';

// import { useEffect, useRef } from "react";
// import PageFlip from "pageforge-flip";
// import { ensureLandscapeSpreadPatch } from "@/lib/pageflipPatch";

// const PAGES = [
//   { title: 'Cover', body: 'Welcome to our mini catalog.' },
//   { title: 'Collection', body: 'Explore the latest arrivals.' },
//   { title: 'Details', body: 'Specs, pricing, and more.' },
//   { title: 'Details', body: 'Specs, pricing, and more 1.' },
//   { title: 'Details', body: 'Specs, pricing, and more 2.' },
//   { title: 'Details', body: 'Specs, pricing, and more 3.' },
// ];

// export default function FlipBook() {
//   const bookRef = useRef<HTMLDivElement | null>(null);
//   const templateRef = useRef<HTMLDivElement | null>(null);

//   useEffect(() => {
//     if (!bookRef.current || !templateRef.current) return;

//     ensureLandscapeSpreadPatch(PageFlip);

//     const flip = new PageFlip(bookRef.current, {
//       orientation: 'landscape',   // always render left + right pages
//       width: 960,                  // base spread size to preserve ratio
//       height: 600,
//       autoSize: true,
//       animationDuration: 650,
//       shadowOpacity: 0.2,
//     });

//     const pages = Array.from(templateRef.current.children) as HTMLElement[];
//     flip.loadFromHtml(pages);

//     return () => flip.destroy();
//   }, []);

//   return (
//     <div className="space-y-6">
//       <div
//         ref={bookRef}
//         className="pf-book relative mx-auto aspect-[3/2] w-full max-w-5xl overflow-hidden rounded-lg bg-gradient-to-br from-yellow-50 to-amber-100 shadow-inner"
//       />
//       <div ref={templateRef} className="hidden">
//         {PAGES.map((page, idx) => (
//           <section
//             key={`${page.title}-${idx}`}
//             className="pf-page flex h-[600px] flex-col justify-center bg-white text-center text-slate-800 ring-1 ring-slate-200"
//           >
//             <h2 className="text-2xl font-semibold tracking-tight">{page.title}</h2>
//             <p className="mt-4 text-base text-slate-500">{page.body}</p>
//           </section>
//         ))}
//       </div>
//     </div>
//   );
// }