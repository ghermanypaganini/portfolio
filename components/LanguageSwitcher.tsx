"use client";
import Link from "next-intl/link";
import { usePathname } from "next/navigation";
import Flag from "react-world-flags";

export default function LanguageSwitcher() {
  const pathname = usePathname();

  return (
    <div className="flex gap-3">
      <Link href={pathname} locale="en">
        <Flag code="US" height="16" />
      </Link>
      <Link href={pathname} locale="pt">
        <Flag code="BR" height="16" />
      </Link>
    </div>
  );
}
