import { LucideIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import Link from "next/link";

type Props = {
  icon: LucideIcon;
  label: string;
  href?: string;
};

export function NavButton({ icon: Icon, label, href }: Props) {
  const buttonContent = (
    <Button
      variant="ghost"
      size="icon"
      aria-label={label}
      title={label}
      className="rounded-full"
    >
      <Icon />
    </Button>
  );
  return href ? <Link href={href}>{buttonContent}</Link> : buttonContent;
}
