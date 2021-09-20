import React from "react";

const getRenderComponent = (Component, props) => {
  if (React.isValidElement(Component)) {
    return React.cloneElement(Component, props);
  } else if (typeof Component === "function") {
    if (Component.prototype && Component.prototype.isReactComponent) {
      return <Component {...props} />;
    } else {
      return Component(props);
    }
  }
  return Component;
};

export default getRenderComponent;
