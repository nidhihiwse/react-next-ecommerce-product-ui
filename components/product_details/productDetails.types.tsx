export interface SliderComponentProps {
  images: string[];
  selectedImage: number;
  setSelectedImage: (index: number) => void;
}

export interface AccordionItem {
  title: string;
  content: string;
}

export interface AccordionProps {
  items: AccordionItem[];
}

export interface SpecificationItem {
  label: string;
  value: string;
}

export interface SpecificationSection {
  title: string;
  items: SpecificationItem[];
}
