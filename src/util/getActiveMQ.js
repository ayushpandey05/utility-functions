const getActiveMQ = (width) => {
  // const width = Dimensions.get("window").width;
  if (width < 600) {
    return "xs";
  } else if (width >= 600 && width < 900) {
    return "sm";
  } else if (width >= 900 && width < 1200) {
    return "md";
  } else {
    return "lg";
  }
};

export default getActiveMQ;
