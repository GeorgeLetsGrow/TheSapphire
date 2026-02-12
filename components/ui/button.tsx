type ButtonVariant = "primary" | "secondary";
type ButtonSize = "sm" | "md" | "lg";

type ButtonClassNameOptions = {
  variant?: ButtonVariant;
  size?: ButtonSize;
  className?: string;
};

function cx(...parts: Array<string | undefined | false | null>) {
  return parts.filter(Boolean).join(" ");
}

export function buttonClassName(options: ButtonClassNameOptions = {}) {
  const { variant = "primary", size = "md", className } = options;

  const base =
    "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium shadow-sm transition";

  const focus =
    "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

  const sizes: Record<ButtonSize, string> = {
    sm: "px-3 py-2 text-xs",
    md: "px-4 py-2 text-sm",
    lg: "px-6 py-3 text-sm",
  };

  const variants: Record<ButtonVariant, string> = {
    primary:
      "bg-[#0B47FF] text-white hover:bg-[#2960FF] active:bg-[#0B47FF]/90 focus-visible:outline-[#0B47FF]/50",
    secondary:
      "bg-white/5 text-white ring-1 ring-inset ring-white/10 hover:bg-white/10 active:bg-white/15 focus-visible:outline-white/30",
  };

  return cx(base, sizes[size], variants[variant], focus, className);
}

