export const buttonFilters = [
  {
    id: "FStyled",
    label: "Styled",
    icon: "Palette" as const,
    help: "Styled components come with opinionated styles. You usually customize them by overriding these styles.",
  },
  {
    id: "FImported",
    label: "Imported",
    icon: "Import" as const,
    help: "Depends on an external library from which you import components, benefiting from library updates but limited in customization.",
    autoDisable: "FPasted",
  },
  {
    id: "FPasted",
    label: "Pasted",
    icon: "Clipboard" as const,
    help: "No external library dependency; you copy and paste component code, fully customizable but not automatically updated.",
    autoDisable: "FImported",
  },

  {
    id: "FTailwind",
    label: "Tailwind CSS",
    icon: "Wind" as const,
    help: "Uses Tailwind CSS, allowing you to use Tailwind for component customization.",
  },
  {
    id: "FFree",
    label: "Free",
    icon: "DollarSign" as const,
    help: "The UI Library is entirely free for all available components.",
  },
  {
    id: "FAccessible",
    label: "Fully Accessible",
    icon: "Accessibility" as const,
    help: "All components are designed with accessibility in mind.",
  },
  {
    id: "FBuiltinThemes",
    label: "Built-in Themes",
    icon: "Palette" as const,
    help: "Provides ready-to-use themes.",
  },
  {
    id: "FThemeGenerator",
    label: "Theme Generator",
    icon: "Wand" as const,
    help: "Provides a tool to help developers generate new themes easily.",
  },
  {
    id: "FDarkMode",
    label: "Dark Mode",
    icon: "Moon" as const,
    help: "Supports both light and dark modes.",
  },
  {
    id: "FFigma",
    label: "Figma Files",
    icon: "Figma" as const,
    help: "Figma files contain the same components as the UI Library, helping designers work without coding skills.",
  },
  {
    id: "FOfficial",
    label: "Official",
    icon: "Award" as const,
    help: "Developed by a team managing the framework itself.",
  },
  {
    id: "FRoadmap",
    label: "Public Roadmap",
    icon: "Map" as const,
    help: "A public roadmap shows upcoming library features.",
  },
  {
    id: "FRTLSupport",
    label: "RTL Support",
    icon: "ArrowLeftToLine" as const,
    help: "Supports right-to-left text (Arabic, Hebrew, etc.).",
  },
  {
    id: "FTyped",
    label: "Fully Typed",
    icon: "Type" as const,
    help: "Components are fully typed for improved autocompletion and error handling.",
  },
  {
    id: "FForm",
    label: "Form Helpers",
    icon: "Computer" as const,
    help: "Provides tools or examples for integration with form libraries (Vee-Validate, Zod, Yup, etc.).",
  },
];

export const rangeFilters = [
  {
    id: "Components",
    leadingLabel: "More than",
    trailingLabel: "components",
    icon: "Download" as const,
    help: "Don't forget to browse all available components on the libraries",
    rangeMax: 100,
    rangeStep: 5,
  },
  {
    id: "Github_Stars",
    leadingLabel: "More than",
    trailingLabel: "stars",
    icon: "GalleryVerticalEnd" as const,
    help: "Remind that libraries are supposed to be less stared than general ones",
    rangeMax: 35000,
    rangeStep: 1000,
  },
  {
    id: "NPM_Downloads",
    leadingLabel: "More than",
    trailingLabel: "k npm DLs",
    icon: "Star" as const,
    help: "Remind that libraries are supposed to be less downloaded than general ones",
    rangeMax: 500,
    rangeStep: 5,
  },
];
