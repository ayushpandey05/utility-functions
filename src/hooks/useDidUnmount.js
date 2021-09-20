import { useEffect } from "react";

const useDidUnmount = (func) => {
  useEffect(() => {
    return func;
  }, []);
};

export default useDidUnmount;
