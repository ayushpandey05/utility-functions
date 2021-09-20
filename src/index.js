import hooks from "./hooks";
import mapChildren from "./children/mapChildren";
import isMobile from "./util/isMobile";
import capitalize from "./util/capitalize";
import createUniqueId from "./util/createUniqueId";
import getActiveMQ from "./util/getActiveMQ";
import getRenderComponent from "./util/getRenderComponent";
import resolveJson from "./util/resolveJson";
import deepMerge from "./util/deepMerge";

const runFunction = (func, ...rest) => {
  if (typeof func === "function") {
    return func(...rest);
  }
};

export {
  runFunction,
  getRenderComponent,
  createUniqueId,
  getActiveMQ,
  isMobile,
  hooks,
  mapChildren,
  capitalize,
  resolveJson,
  deepMerge,
};
