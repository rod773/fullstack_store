 "use client";

 import { useEffect, useRef, useState } from "react";
 import { cn } from "@/lib/utils";

 type ScrollTitleProps = {
   children: React.ReactNode;
   className?: string;
   /**
    * If true, the animation runs only the first time
    * the element enters the viewport.
    */
   once?: boolean;
 };

 export function ScrollTitle({
   children,
   className,
   once = false,
 }: ScrollTitleProps) {
   const ref = useRef<HTMLDivElement | null>(null);
   const [isVisible, setIsVisible] = useState(false);

   useEffect(() => {
     const element = ref.current;
     if (!element) return;

     const observer = new IntersectionObserver(
       (entries) => {
         const [entry] = entries;
         if (entry.isIntersecting) {
           setIsVisible(true);
           if (once) {
             observer.unobserve(entry.target);
           }
         } else if (!once) {
           setIsVisible(false);
         }
       },
       {
         threshold: 0.2,
       }
     );

     observer.observe(element);

     return () => {
       observer.disconnect();
     };
   }, [once]);

   return (
     <div
       ref={ref}
       className={cn(
         "opacity-0 translate-y-4 transition-all duration-700 ease-out",
         isVisible && "opacity-100 translate-y-0 animate-fade-up",
         className
       )}
     >
       {children}
     </div>
   );
 }

