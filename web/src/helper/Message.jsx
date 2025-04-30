// import { useState } from "react";
// import FloatingDockDemo from "./FloatingDock"; // Assuming you have this component
// function Message() {
//   const [isMenuOpen, setIsMenuOpen] = useState(false);
//   const [tooltip, setTooltip] = useState(null);

//   const toggleMenu = () => {
//     setIsMenuOpen(!isMenuOpen);
//   };

//   const showTooltip = (tooltipName) => {
//     setTooltip(tooltipName);
//   };

//   const hideTooltip = () => {
//     setTooltip(null);
//   };

//   const handleActionClick = (action) => {
//     switch (action) {
//       case "share":
//         navigator.share({
//           title: "Share this page",
//           url: window.location.href,
//         });
//         break;
//       case "download": {
//         const link = document.createElement("a");
//         link.href = "path/to/your/file.pdf"; // Replace with the path to your file
//         link.download = "file.pdf"; // Replace with the file name
//         document.body.appendChild(link);
//         link.click();
//         document.body.removeChild(link);
//         break;
//       }
//       case "home":
//         window.location.href = "/";
//         break;
//       default:
//         break;
//     }
//   };

//   return (
//     <div className="fixed end-6 bottom-6 group">
//       <FloatingDockDemo />
//       <div
//         id="speed-dial-menu-default"
//         className={`flex flex-col items-center ${isMenuOpen ? "block" : "hidden"
//           } mb-4 space-y-2`}
//       >
//         {["share", "download", "home"].map((action) => (
//           <button
//             key={action}
//             type="button"
//             data-tooltip-target={`tooltip-${action}`}
//             data-tooltip-placement="left"
//             className="relative flex justify-center items-center w-[52px] h-[52px] text-gray-500 hover:text-gray-900 bg-white rounded-full border border-gray-200 dark:border-gray-600 shadow-sm dark:hover:text-white dark:text-gray-400 hover:bg-gray-50 dark:bg-gray-700 dark:hover:bg-gray-600 focus:ring-4 focus:ring-gray-300 focus:outline-none dark:focus:ring-gray-400"
//             onMouseEnter={() => showTooltip(action)}
//             onMouseLeave={hideTooltip}
//             onClick={() => handleActionClick(action)}
//           >
//             <svg
//               className="w-5 h-5"
//               aria-hidden="true"
//               xmlns="http://www.w3.org/2000/svg"
//               fill="currentColor"
//               viewBox="0 0 24 24"
//             >
//               <path d={getPath(action)} />
//             </svg>
//             <span className="sr-only">
//               {action.charAt(0).toUpperCase() + action.slice(1)}
//             </span>
//             {tooltip === action && (
//               <div
//                 id={`tooltip-${action}`}
//                 role="tooltip"
//                 className="absolute left-full ml-2 z-10 inline-block w-auto px-3 py-2 text-sm font-medium text-white bg-gray-900 rounded-lg shadow-sm"
//               >
//                 {action.charAt(0).toUpperCase() + action.slice(1)}
//                 <div className="tooltip-arrow" data-popper-arrow></div>
//               </div>
//             )}
//           </button>
//         ))}
//       </div>

//       <button
//         type="button"
//         data-dial-toggle="speed-dial-menu-default"
//         aria-controls="speed-dial-menu-default"
//         aria-expanded={isMenuOpen}
//         className="z-50 flex items-center justify-center text-white bg-red-100 rounded-full w-14 h-14 dark:hover:bg-red-300 focus:ring-4 focus:ring-red-300 focus:outline-none"
//         onClick={toggleMenu}
//       >
//         <svg
//           className={`w-5 h-5 transition-transform ${isMenuOpen ? "rotate-45" : ""}`}
//           aria-hidden="true"
//           xmlns="http://www.w3.org/2000/svg"
//           fill="none"
//           viewBox="0 0 18 18"
//         >
//           <path
//             stroke="currentColor"
//             strokeLinecap="round"
//             strokeLinejoin="round"
//             strokeWidth="2"
//             d="M9 1v16M1 9h16"
//           />
//         </svg>
//         <span className="sr-only">Open actions menu</span>
//       </button>
//     </div>
//   );
// }

// const getPath = (action) => {
//   switch (action) {
//     case "share":
//       return "M14.419 10.581a3.564 3.564 0 0 0-2.574 1.1l-4.756-2.49a3.54 3.54 0 0 0 .072-.71 3.55 3.55 0 0 0-.043-.428L11.67 6.1a3.56 3.56 0 1 0-.831-2.265c.006.143.02.286.043.428L6.33 6.218a3.573 3.573 0 1 0-.175 4.743l4.756 2.491a3.58 3.58 0 1 0 3.508-2.871Z";
//     case "download":
//       return "M14.707 7.793a1 1 0 0 0-1.414 0L11 10.086V1.5a1 1 0 0 0-2 0v8.586L6.707 7.793a1 1 0 1 0-1.414 1.414l4 4a1 1 0 0 0 1.416 0l4-4a1 1 0 0 0-.002-1.414ZM18 12h-2.55l-2.975 2.975a3.5 3.5 0 0 1-4.95 0L4.55 12H2a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-4a2 2 0 0 0-2-2Zm-3 5a1 1 0 1 1 0-2 1 1 0 0 1 0 2Z";
//     case "home":
//       return "M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689ZM12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z";
//     default:
//       return "";
//   }
// };

// export default Message;
