// "use client";

// const footerLinks = {
//   Navigate: [
//     { label: "Home", href: "#home" },
//     { label: "About", href: "#about" },
//     { label: "Skills", href: "#skills" },
//     { label: "Projects", href: "#projects" },
//     { label: "Contact", href: "#contact" },
//   ],
//   Connect: [
//     { label: "GitHub", href: "https://github.com/DsDigitalz", external: true },
//     { label: "LinkedIn", href: "https://www.linkedin.com/in/dsdigitalz/", external: true },
//     { label: "Email", href: "mailto:sanudaniel46@email.com", external: false },
//   ],
//   Stack: [
//     { label: "React", href: "https://react.dev", external: true },
//     { label: "Next.js", href: "https://nextjs.org", external: true },
//     { label: "Figma", href: "https://figma.com", external: true },
//     { label: "Tailwind CSS", href: "https://tailwindcss.com", external: true },
//   ],
// };

// export default function Footer() {
//   return (
//     <footer className="border-t border-white/8 bg-black">
//       <div className="mx-auto max-w-6xl px-6 py-16">
//         <div className="grid gap-10 md:grid-cols-4">
//           {/* Brand */}
//           <div>
//             <p className="mb-3 text-base font-semibold text-white tracking-tight">
//               ▲ DSDigitalz
//             </p>
//             <p className="text-sm leading-6 text-[#555]">
//               Front-end Engineer & UI/UX Designer based in Lagos, Nigeria.
//               Building modern digital experiences.
//             </p>
//           </div>

//           {/* Link Columns */}
//           {Object.entries(footerLinks).map(([section, links]) => (
//             <div key={section}>
//               <p className="mb-4 text-xs font-semibold uppercase tracking-widest text-[#555]">
//                 {section}
//               </p>
//               <ul className="space-y-3">
//                 {links.map((link) => (
//                   <li key={link.label}>
//                     <a
//                       href={link.href}
//                       target={"external" in link && link.external ? "_blank" : undefined}
//                       rel={"external" in link && link.external ? "noopener noreferrer" : undefined}
//                       className="text-sm text-[#666] transition hover:text-white"
//                     >
//                       {link.label}
//                     </a>
//                   </li>
//                 ))}
//               </ul>
//             </div>
//           ))}
//         </div>

//         {/* Bottom Row */}
//         <div className="mt-14 flex flex-col items-center justify-between gap-4 border-t border-white/8 pt-8 md:flex-row">
//           <p className="text-xs text-[#444]">
//             © {new Date().getFullYear()} DSDigitalz. All rights reserved.
//           </p>
//           <p className="text-xs text-[#444]">
//             Built with{" "}
//             <a
//               href="https://nextjs.org"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#666] hover:text-white transition"
//             >
//               Next.js
//             </a>{" "}
//             &amp; deployed on{" "}
//             <a
//               href="https://vercel.com"
//               target="_blank"
//               rel="noopener noreferrer"
//               className="text-[#666] hover:text-white transition"
//             >
//               Vercel
//             </a>
//           </p>
//         </div>
//       </div>
//     </footer>
//   );
// }
