import {
  Accessibility,
  ArrowLeftToLine,
  Award,
  Clipboard,
  Computer,
  DollarSign,
  Download,
  Figma,
  GalleryVerticalEnd,
  Import,
  Map,
  Moon,
  Palette,
  Star,
  Type,
  Wand,
  Wind,
} from "lucide-react";

const icons = {
  Accessibility,
  ArrowLeftToLine,
  Award,
  Clipboard,
  Computer,
  DollarSign,
  Download,
  Figma,
  GalleryVerticalEnd,
  Import,
  Map,
  Moon,
  Palette,
  Star,
  Type,
  Wand,
  Wind,
};

export default function Icon({
  name,
  height = 25,
  width = 25,
  className = "text-primary-400",
  ...rest
}: {
  name: keyof typeof icons;
  height?: 25;
  width?: 25;
  className?: string;
}) {
  const Icon = icons[name];
  return <Icon height={height} width={width} className={className} {...rest} />;
}
