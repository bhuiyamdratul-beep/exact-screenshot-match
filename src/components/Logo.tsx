import { cn } from "@/lib/utils";

interface LogoProps {
  variant?: "filled" | "outline" | "monochrome";
  size?: "sm" | "md" | "lg" | "xl";
  className?: string;
}

const sizes = {
  sm: "w-8 h-8",
  md: "w-10 h-10",
  lg: "w-12 h-12",
  xl: "w-16 h-16",
};

export const Logo = ({ variant = "filled", size = "md", className }: LogoProps) => {
  const sizeClass = sizes[size];

  if (variant === "monochrome") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={cn(sizeClass, className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Outer circle */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="currentColor"
          strokeWidth="3"
        />
        {/* Inner glow ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="currentColor"
          strokeWidth="1"
          opacity="0.3"
        />
        {/* Premium D lettermark */}
        <path
          d="M35 25 L35 75 L55 75 C72 75 82 62 82 50 C82 38 72 25 55 25 L35 25 Z M43 33 L55 33 C66 33 74 40 74 50 C74 60 66 67 55 67 L43 67 L43 33 Z"
          fill="currentColor"
        />
      </svg>
    );
  }

  if (variant === "outline") {
    return (
      <svg
        viewBox="0 0 100 100"
        className={cn(sizeClass, className)}
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="outlineGradient" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="hsl(0, 84%, 60%)" />
            <stop offset="100%" stopColor="hsl(20, 90%, 60%)" />
          </linearGradient>
        </defs>
        {/* Outer circle with gradient stroke */}
        <circle
          cx="50"
          cy="50"
          r="46"
          fill="none"
          stroke="url(#outlineGradient)"
          strokeWidth="3"
        />
        {/* Inner accent ring */}
        <circle
          cx="50"
          cy="50"
          r="40"
          fill="none"
          stroke="url(#outlineGradient)"
          strokeWidth="1"
          opacity="0.4"
        />
        {/* Premium D lettermark with gradient */}
        <path
          d="M35 25 L35 75 L55 75 C72 75 82 62 82 50 C82 38 72 25 55 25 L35 25 Z M43 33 L55 33 C66 33 74 40 74 50 C74 60 66 67 55 67 L43 67 L43 33 Z"
          fill="url(#outlineGradient)"
        />
      </svg>
    );
  }

  // Default: filled variant
  return (
    <svg
      viewBox="0 0 100 100"
      className={cn(sizeClass, className)}
      xmlns="http://www.w3.org/2000/svg"
    >
      <defs>
        {/* Premium gradient */}
        <linearGradient id="filledGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="hsl(0, 84%, 60%)" />
          <stop offset="100%" stopColor="hsl(20, 90%, 60%)" />
        </linearGradient>
        {/* Glow effect */}
        <filter id="glow" x="-50%" y="-50%" width="200%" height="200%">
          <feGaussianBlur stdDeviation="3" result="coloredBlur" />
          <feMerge>
            <feMergeNode in="coloredBlur" />
            <feMergeNode in="SourceGraphic" />
          </feMerge>
        </filter>
        {/* Subtle inner shadow */}
        <filter id="innerShadow">
          <feOffset dx="0" dy="2" />
          <feGaussianBlur stdDeviation="2" result="offset-blur" />
          <feComposite operator="out" in="SourceGraphic" in2="offset-blur" result="inverse" />
          <feFlood floodColor="black" floodOpacity="0.2" result="color" />
          <feComposite operator="in" in="color" in2="inverse" result="shadow" />
          <feComposite operator="over" in="shadow" in2="SourceGraphic" />
        </filter>
      </defs>
      
      {/* Outer glow circle */}
      <circle
        cx="50"
        cy="50"
        r="48"
        fill="none"
        stroke="url(#filledGradient)"
        strokeWidth="1"
        opacity="0.3"
        filter="url(#glow)"
      />
      
      {/* Main circle background with gradient */}
      <circle
        cx="50"
        cy="50"
        r="46"
        fill="url(#filledGradient)"
      />
      
      {/* Subtle inner highlight ring */}
      <circle
        cx="50"
        cy="50"
        r="42"
        fill="none"
        stroke="white"
        strokeWidth="1"
        opacity="0.15"
      />
      
      {/* Premium D lettermark - white on gradient */}
      <path
        d="M35 25 L35 75 L55 75 C72 75 82 62 82 50 C82 38 72 25 55 25 L35 25 Z M43 33 L55 33 C66 33 74 40 74 50 C74 60 66 67 55 67 L43 67 L43 33 Z"
        fill="white"
        filter="url(#innerShadow)"
      />
    </svg>
  );
};

export default Logo;
