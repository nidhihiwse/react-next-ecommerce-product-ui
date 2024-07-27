import { SpecificationSection } from './productDetails.types';

export const specifications: { [key: string]: SpecificationSection } = {
  exterior: {
    title: "Exterior",
    items: [
      { label: "Body Style", value: "Hatchback" },
      { label: "Exterior Colour", value: "Blue" },
      { label: "Length", value: "175”" },
      { label: "Wheelbase", value: "106”" },
      { label: "Width", value: "69.7”" },
      { label: "Full Width", value: "N/A" },
      { label: "Clearance", value: "6”" },
    ],
  },
  interior: {
    title: "Interior",
    items: [
      { label: "Seating", value: "5 Adults" },
      { label: "Interior Colour", value: "NA" },
      { label: "Head Room Front", value: "41”" },
      { label: "Head Room Rear", value: "37”" },
      { label: "Leg Room", value: "42”" },
      { label: "Leg Room Rear", value: "33”" },
      { label: "Shoulder Room Front", value: "54”" },
    ],
  },
  performance: {
    title: "BEV Performance",
    items: [
      { label: "Horsepower", value: "107hp" },
      { label: "MPGe", value: "102" },
      { label: "Top Speed", value: "90 mph" },
    ],
  },
  charging: {
    title: "Charging",
    items: [
      { label: "Electric Range", value: "73 Mi." },
      { label: "Battery Size", value: "24 kWh" },
      { label: "Cost to charge (full)", value: "$2.50" },
    ],
  },
};
