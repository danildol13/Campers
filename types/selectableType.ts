export const vehicleOptions = [
  {
    value: "panelTruck",
    label: "Van",
    icon: "icon-panelTruck",
    paddingX: "van-padding",
  },
  {
    value: "fullyIntegrated",
    label: "Fully Integrated",
    icon: "icon-fullyIntegrated",
    paddingX: "fullyIntegrated-padding",
  },
  {
    value: "alcove",
    label: "Alcove",
    icon: "icon-alcove",
    paddingX: "alcove-padding",
  },
] as const;

export const equipmentOptions = [
  { value: "AC", label: "AC", icon: "AC", paddingX: "ac-padding" },
  {
    value: "automatic",
    label: "Automatic",
    icon: "automatic",
    paddingX: "automatic-padding",
  },
  {
    value: "kitchen",
    label: "Kitchen",
    icon: "kitchen",
    paddingX: "kitchen-padding",
  },
  { value: "TV", label: "TV", icon: "TV", paddingX: "tv-padding" },
  {
    value: "bathroom",
    label: "Bathroom",
    icon: "bathroom",
    paddingX: "bathroom-padding",
  },
] as const;
