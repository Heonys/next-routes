import { useEffect } from "react";

const usePreventScroll = () => {
  useEffect(() => {
    document.body.classList.add("modal-open");
    return () => document.body.classList.remove("modal-open");
  }, []);
};

export default usePreventScroll;
