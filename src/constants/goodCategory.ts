export const GOOD_CATEGORY = {
  APPLIANCES: "APPLIANCES",
  GAMES: "GAMES",
  FASHION: "FASHION",
  FURNITURE: "FURNITURE",
  HOME: "HOME",
  KITCHEN: "KITCHEN",
  LIGHTING: "LIGHTING",
  OTHER: "OTHER",
  TOOLS: "TOOLS",
} as const;

export type GoodCategory = typeof GOOD_CATEGORY[keyof typeof GOOD_CATEGORY];
