const resolveJson = (value, key) => {
  if (typeof value === "object" && typeof key === "string") {
    key = key.split(".");
    value = value[key[0]];
    key.splice(0, 1);
    key = key.join(".");
    if (typeof value === "object" && key) {
      value = resolveJson(value, key);
    }
  }
  return value;
};

export default resolveJson;
