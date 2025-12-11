import { cn } from "@/lib/utils";

interface BalloonProps {
  color: "primary" | "secondary" | "mint" | "sunshine" | "lavender" | "sky" | "candy-pink";
  className?: string;
  size?: "sm" | "md" | "lg";
  delay?: number;
}

const colorMap = {
  primary: "bg-primary",
  secondary: "bg-secondary",
  mint: "bg-mint",
  sunshine: "bg-sunshine",
  lavender: "bg-lavender",
  sky: "bg-sky",
  "candy-pink": "bg-candy-pink",
};

const sizeMap = {
  sm: "w-8 h-10",
  md: "w-12 h-16",
  lg: "w-16 h-20",
};

export function Balloon({ color, className, size = "md", delay = 0 }: BalloonProps) {
  return (
    <div 
      className={cn("relative animate-balloon", className)}
      style={{ animationDelay: `${delay}s` }}
    >
      {/* Balloon body */}
      <div 
        className={cn(
          "rounded-full relative",
          colorMap[color],
          sizeMap[size]
        )}
        style={{
          borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
        }}
      >
        {/* Shine effect */}
        <div 
          className="absolute top-2 left-2 w-3 h-4 bg-white/40 rounded-full"
          style={{ transform: "rotate(-30deg)" }}
        />
      </div>
      {/* Balloon knot */}
      <div 
        className={cn(
          "w-2 h-2 mx-auto -mt-0.5",
          colorMap[color]
        )}
        style={{
          clipPath: "polygon(50% 0%, 0% 100%, 100% 100%)",
        }}
      />
      {/* String */}
      <div className="w-px h-12 bg-foreground/30 mx-auto" />
    </div>
  );
}
