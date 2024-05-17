import { useState, useEffect } from "react";
import { Button } from "./button";
import { ArrowUpToLine } from "lucide-react";

export const ScrollToTop = () => {
  const [showTopBtn, setShowTopBtn] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 400) {
        setShowTopBtn(true);
      } else {
        setShowTopBtn(false);
      }
    });
  }, []);

  const goToTop = () => {
    window.scroll({
      top: 0,
      left: 0,
    });
  };

  return (
    <>
      {showTopBtn && (
        <Button
          onClick={goToTop}
          className="bg-wppButton fixed bottom-4 right-4"
          size="icon"
        >
          <ArrowUpToLine className="text-black h-4 w-4" />
        </Button>
      )}
    </>
  );
};
