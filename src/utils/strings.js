import { compact } from "lodash";

export const composeName = (...names) => (compact(names).join(" "));