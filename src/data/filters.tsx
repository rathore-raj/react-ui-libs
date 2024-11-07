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

const buttonFilterProps = {
  height: 25,
  width: 25,
  className: "text-primary-400",
};

export const buttonFilters = [
  {
    id: "FStyled" as const,
    label: "Styled",
    icon: <Palette {...buttonFilterProps} />,
    help: "Styled components come with opinionated styles. You usually customize them by overriding these styles.",
  },
  {
    id: "FImported" as const,
    label: "Imported",
    icon: <Import {...buttonFilterProps} />,
    help: "Depends on an external library from which you import components, benefiting from library updates but limited in customization.",
    autoDisable: "FPasted",
  },
  {
    id: "FPasted" as const,
    label: "Pasted",
    icon: <Clipboard {...buttonFilterProps} />,
    help: "No external library dependency; you copy and paste component code, fully customizable but not automatically updated.",
    autoDisable: "FImported",
  },

  {
    id: "FTailwind" as const,
    label: "Tailwind CSS",
    icon: <Wind {...buttonFilterProps} />,
    help: "Uses Tailwind CSS, allowing you to use Tailwind for component customization.",
  },
  {
    id: "FFree" as const,
    label: "Free",
    icon: <DollarSign {...buttonFilterProps} />,
    help: "The UI Library is entirely free for all available components.",
  },
  {
    id: "FAccessible" as const,
    label: "Fully Accessible",
    icon: <Accessibility {...buttonFilterProps} />,
    help: "All components are designed with accessibility in mind.",
  },
  {
    id: "FBuiltinThemes" as const,
    label: "Built-in Themes",
    icon: <Palette {...buttonFilterProps} />,
    help: "Provides ready-to-use themes.",
  },
  {
    id: "FThemeGenerator" as const,
    label: "Theme Generator",
    icon: <Wand {...buttonFilterProps} />,
    help: "Provides a tool to help developers generate new themes easily.",
  },
  {
    id: "FDarkMode" as const,
    label: "Dark Mode",
    icon: <Moon {...buttonFilterProps} />,
    help: "Supports both light and dark modes.",
  },
  {
    id: "FFigma" as const,
    label: "Figma Files",
    icon: <Figma {...buttonFilterProps} />,
    help: "Figma files contain the same components as the UI Library, helping designers work without coding skills.",
  },
  {
    id: "FOfficial" as const,
    label: "Official",
    icon: <Award {...buttonFilterProps} />,
    help: "Developed by a team managing the framework itself.",
  },
  {
    id: "FRoadmap" as const,
    label: "Public Roadmap",
    icon: <Map {...buttonFilterProps} />,
    help: "A public roadmap shows upcoming library features.",
  },
  {
    id: "FRTLSupport" as const,
    label: "RTL Support",
    icon: <ArrowLeftToLine {...buttonFilterProps} />,
    help: "Supports right-to-left text (Arabic, Hebrew, etc.).",
  },
  {
    id: "FTyped" as const,
    label: "Fully Typed",
    icon: <Type {...buttonFilterProps} />,
    help: "Components are fully typed for improved autocompletion and error handling.",
  },
  {
    id: "FForm" as const,
    label: "Form Helpers",
    icon: <Computer {...buttonFilterProps} />,
    help: "Provides tools or examples for integration with form libraries (Vee-Validate, Zod, Yup, etc.).",
  },
];

export const rangeFilters = [
  {
    id: "Components" as const,
    leadingLabel: "More than",
    trailingLabel: "components",
    icon: <Download {...buttonFilterProps} />,
    help: "Don't forget to browse all available components on the libraries",
    rangeMax: 100,
    rangeStep: 5,
  },
  {
    id: "Github_Stars" as const,
    leadingLabel: "More than",
    trailingLabel: "stars",
    icon: <GalleryVerticalEnd {...buttonFilterProps} />,
    help: "Remind that libraries are supposed to be less stared than general ones",
    rangeMax: 35000,
    rangeStep: 1000,
  },
  {
    id: "NPM_Downloads" as const,
    leadingLabel: "More than",
    trailingLabel: "k npm DLs",
    icon: <Star {...buttonFilterProps} />,
    help: "Remind that libraries are supposed to be less downloaded than general ones",
    rangeMax: 500,
    rangeStep: 5,
  },
];
