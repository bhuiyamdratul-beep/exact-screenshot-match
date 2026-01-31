import { useEffect } from "react";
import { useLocation } from "react-router-dom";

/**
 * Ensures react-router hash links (e.g. /#contact) actually scroll to the target.
 */
export default function ScrollToHash() {
  const location = useLocation();

  useEffect(() => {
    if (!location.hash) return;

    const id = location.hash.replace("#", "");
    if (!id) return;

    // Wait for route content to render.
    const t = window.setTimeout(() => {
      const el = document.getElementById(id);
      if (!el) return;
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 0);

    return () => window.clearTimeout(t);
  }, [location.pathname, location.hash]);

  return null;
}
