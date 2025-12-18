export const SECTION_IDS = ['home', 'about', 'experience'] as const;

export type SectionId = (typeof SECTION_IDS)[number];

export interface SectionConfig {
  id: SectionId;
  label: string;
}

export const SECTIONS: SectionConfig[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
];


