"use client";
import { useEffect } from "react";

export default function GoogleTranslateFix() {
  useEffect(() => {
    const observer = new MutationObserver(() => {
      const selectBox = document.querySelector("select.goog-te-combo");
      if (selectBox) {
        const allowedValues = ["en", "fr", "es", "ru", "ar", "pt-PT"];

        selectBox.querySelectorAll("option").forEach(option => {
          if (!allowedValues.includes(option.value)) {
            option.remove(); // Completely remove unwanted options
          }
        });

        // Stop observing once options are removed
      }
    });

    // Observe changes in the body (Google Translate inserts elements dynamically)
    observer.observe(document.body, { childList: true, subtree: true });

    return () => observer.disconnect(); // Cleanup on unmount
  }, []);

  return null; // No UI, just modifying the DOM
}
