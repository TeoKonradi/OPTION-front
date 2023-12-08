// import React, { useMemo } from "react";
// import { cn } from "../ui";

// // const findActiveIndex = (options: SideBarOption[]): number => {
// //   for (let i = 0; i < options.length; i++) {
// //     let item = options[i];
// //     item.number = i;
// //     if (location.pathname === item.link) {
// //       return item.number;
// //     }
// //   }
// //   // return null; // Return -1 if no active index is found
// //   return -1;
// // };

// // const calcOffset = (number: number): string => {
// //   if (number >= 0) {
// //     console.log(number);
// //     let hui = number * 96;
// //     let Of = hui.toString();
// //     return `translate-y-${Of}`;
// //   } else {
// //     console.log(number);
// //     return "hidden";
// //   }
// // };

// // const activeIndex = findActiveIndex(options);
// // const offset = calcOffset(activeIndex);

// const pages = {
//   isTemplates: false,
//   isPurchases: false,
//   isDistribution: false,
//   isAdminPanel: false,
//   isOtherPage: false,
// };

// const { isPurchases, isDistribution, isOtherPage, isTemplates, isAdminPanel } =
//   useMemo(() => {
//     if (location.pathname === "/templates") {
//       return { ...pages, isTemplates: true };
//     } else if (location.pathname?.startsWith("/purchases")) {
//       return { ...pages, isPurchases: true };
//     } else if (location.pathname?.startsWith("/distribution")) {
//       return { ...pages, isDistribution: true };
//     } else if (location.pathname?.startsWith("/admin-panel")) {
//       return { ...pages, isAdminPanel: true };
//     } else {
//       return { ...pages, isOtherPage: true };
//     }
//   }, [location.pathname]);

// const BG = () => {
//   return (
//     <div
//       className={cn(
//         "ease-in-out duration-300",
//         "h-[98px] bg-main absolute z-10 left-0 top-0",
//         isTemplates && "",
//         isOtherPage && "hidden",
//         isPurchases && "translate-y-[98px]",
//         isDistribution && "translate-y-[196px]",
//         isAdminPanel && "translate-y-[294px]",
//       )}
//     />
//   );
// };
