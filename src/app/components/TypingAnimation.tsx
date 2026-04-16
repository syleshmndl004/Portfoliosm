/**
 * Typing Animation Component
 * 
 * Creates a realistic typing effect that cycles through
 * multiple text strings. Includes cursor blinking animation.
 * 
 * Features:
 * - Auto-types text character by character
 * - Pauses at end of each text
 * - Deletes text character by character
 * - Loops through all provided texts
 * - Animated blinking cursor
 * 
 * @component
 * @author Sailesh Mandal
 */

import { useState, useEffect } from "react";
import { motion } from "motion/react";

interface TypingAnimationProps {
  texts: string[]; // Array of texts to cycle through
  className?: string; // Optional CSS classes
}

export function TypingAnimation({ texts, className = "" }: TypingAnimationProps) {
  const [currentTextIndex, setCurrentTextIndex] = useState(0);
  const [currentText, setCurrentText] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(
      () => {
        const fullText = texts[currentTextIndex];

        if (!isDeleting) {
          // Typing
          if (currentText.length < fullText.length) {
            setCurrentText(fullText.substring(0, currentText.length + 1));
          } else {
            // Pause before deleting
            setTimeout(() => setIsDeleting(true), 2000);
          }
        } else {
          // Deleting
          if (currentText.length > 0) {
            setCurrentText(currentText.substring(0, currentText.length - 1));
          } else {
            setIsDeleting(false);
            setCurrentTextIndex((currentTextIndex + 1) % texts.length);
          }
        }
      },
      isDeleting ? 50 : 100
    );

    return () => clearTimeout(timeout);
  }, [currentText, isDeleting, currentTextIndex, texts]);

  return (
    <span className={className}>
      {currentText}
      <motion.span
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.8, repeat: Infinity }}
        className="inline-block w-0.5 h-[1em] bg-primary ml-1 align-middle"
      />
    </span>
  );
}