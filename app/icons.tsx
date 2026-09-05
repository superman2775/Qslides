export type IconName =
  | "arrow"
  | "check"
  | "document"
  | "menu"
  | "more"
  | "next"
  | "pencil"
  | "play"
  | "question"
  | "chat";

export function Icon({
  name,
  className = "",
}: {
  name: IconName;
  className?: string;
}) {
  const common = {
    className,
    viewBox: "0 0 24 24",
    fill: "none",
    "aria-hidden": true,
  };

  switch (name) {
    case "arrow":
      return (
        <svg {...common} viewBox="0 0 16 16">
          <path d="M3 13 13 3M5 3h8v8" />
        </svg>
      );
    case "check":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="m4 10 4 4 8-9" />
        </svg>
      );
    case "document":
      return (
        <svg {...common}>
          <path d="M4 5.5A2.5 2.5 0 0 1 6.5 3h11A2.5 2.5 0 0 1 20 5.5v13a2.5 2.5 0 0 1-2.5 2.5h-11A2.5 2.5 0 0 1 4 18.5v-13Z" />
          <path d="M8 7h8M8 11h5" />
          <path d="m13 15 2 2 4-5" />
        </svg>
      );
    case "menu":
      return (
        <svg {...common}>
          <path d="M4 7h16M4 12h16M4 17h16" />
        </svg>
      );
    case "more":
      return (
        <svg {...common}>
          <circle cx="5" cy="12" r="1.5" />
          <circle cx="12" cy="12" r="1.5" />
          <circle cx="19" cy="12" r="1.5" />
        </svg>
      );
    case "next":
      return (
        <svg {...common}>
          <path d="m9 5 7 7-7 7" />
        </svg>
      );
    case "pencil":
      return (
        <svg {...common}>
          <path d="M4 17.5V20h2.5L18.8 7.7a1.8 1.8 0 0 0-2.5-2.5L4 17.5Z" />
          <path d="m14.8 6.8 2.5 2.5M4 14h4M6 10h2" />
        </svg>
      );
    case "play":
      return (
        <svg {...common} viewBox="0 0 20 20">
          <path d="m7.5 5.5 6 4.5-6 4.5v-9Z" />
        </svg>
      );
    case "question":
    case "chat":
      return (
        <svg {...common}>
          <path d="M7 18.5 4 21l.8-4A7.5 7.5 0 1 1 20 12.5" />
          <path d="M8.5 10.5h.01M12 10.5h.01M15.5 10.5h.01" />
        </svg>
      );
  }
}
