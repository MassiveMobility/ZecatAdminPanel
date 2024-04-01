import React, { useEffect } from "react";

const useScrollToTop = (navigate, currentMenuItem) => {
  useEffect(() => {
    setTimeout(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    }, 200);
  }, [navigate, currentMenuItem]);
};

export default useScrollToTop;
