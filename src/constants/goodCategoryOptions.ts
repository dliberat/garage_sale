import { ConstantValueOptions } from "../types";
import { GoodCategory, GOOD_CATEGORY } from "./goodCategory";

export const GOOD_CATEGORY_OPTIONS: ConstantValueOptions<GoodCategory> = [
  { value: GOOD_CATEGORY.MUSIC, labelKey: "goodCategory.music" },
  { value: GOOD_CATEGORY.BABY, labelKey: "goodCategory.baby" },
  { value: GOOD_CATEGORY.KITCHEN, labelKey: "goodCategory.kitchen" },
  { value: GOOD_CATEGORY.COMPUTER, labelKey: "goodCategory.computer" },
  { value: GOOD_CATEGORY.FURNITURE, labelKey: "goodCategory.furniture" },
  { value: GOOD_CATEGORY.STORAGE, labelKey: "goodCategory.storage" },
  { value: GOOD_CATEGORY.APPLIANCES, labelKey: "goodCategory.appliances" },
  { value: GOOD_CATEGORY.OTHER, labelKey: "goodCategory.other" },
  { value: GOOD_CATEGORY.TOOLS, labelKey: "goodCategory.tools" },
] as const;
