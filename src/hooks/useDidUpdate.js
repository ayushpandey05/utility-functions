import { useEffect, useRef } from "react";
import usePrevious from "./usePrevious";

const useDidUpdate = (fn, props) => {
  let options = props;
  const didMountRef = useRef(false);
  if (!Array.isArray(options)) {
    options = [options];
  }
  const prevProps = usePrevious(props);
  useEffect(() => {
    if (didMountRef?.current) {
      fn(prevProps);
    } else {
      didMountRef.current = true;
    }
  }, options);
};

export default useDidUpdate;
