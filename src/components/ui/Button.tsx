import { forwardRef } from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "framer-motion";

interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost" | "whatsapp";
  size?: "sm" | "md" | "lg" | "icon";
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", children, ...props }, ref) => {
    const variants = {
      primary: "bg-white text-black hover:bg-white/90 shadow-lg shadow-white/10 uppercase tracking-widest text-xs font-bold",
      secondary: "bg-brand-purple text-white hover:bg-[#5a009c] shadow-lg shadow-brand-purple/20 uppercase tracking-widest text-xs font-bold",
      whatsapp: "bg-[#25D366] text-white hover:bg-[#128C7E] shadow-lg shadow-[#25D366]/20 uppercase tracking-widest text-xs font-bold",
      outline: "border border-white/20 text-white hover:bg-white/10 uppercase tracking-widest text-xs font-bold",
      ghost: "text-white/60 hover:text-white hover:bg-white/5 uppercase tracking-widest text-xs font-bold",
    };

    const sizes = {
      sm: "h-9 px-4 text-sm",
      md: "h-11 px-8 text-base",
      lg: "h-14 px-10 text-lg",
      icon: "h-10 w-10",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-full font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-purple disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      >
        {children}
      </motion.button>
    );
  }
);
Button.displayName = "Button";

export { Button };
