import * as React from "react";

export default function FigmaIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} xmlns="http://www.w3.org/2000/svg" {...props}>
      <path d="M12 3H9C7.343 3 6 4.343 6 6c0 1.657 1.343 3 3 3h3M12 3v6M12 3h3c1.657 0 3 1.343 3 3 0 1.657-1.343 3-3 3M12 9H9M12 9h3M12 9v6M9 9C7.343 9 6 10.343 6 12c0 1.657 1.343 3 3 3M15 9c1.657 0 3 1.343 3 3 0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.657 1.343-3 3-3zM12 15H9M12 15v3c0 1.657-1.343 3-3 3-1.657 0-3-1.343-3-3 0-1.657 1.343-3 3-3" />
    </svg>
  );
}

export { FigmaIcon };
