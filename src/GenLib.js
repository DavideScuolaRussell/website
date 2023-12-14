import React, { useState, useEffect} from 'react';

export function TypingEffect({ text, startDelay }) {
  const [displayText, setDisplayText] = useState("");
  const [index, setIndex] = useState(-1);
  const [cursorVisible, setCursorVisible] = useState(true);
  const [isTypingDone, setIsTypingDone] = useState(false);
  const [showCursor, setShowCursor] = useState(false);

  // Typing effect
  useEffect(() => {
    if (index === -1) {
      const startTyping = setTimeout(() => {
        setIndex(0);
        setShowCursor(true);
      }, startDelay);

      return () => {
        clearTimeout(startTyping); // cleanup on unmount
      };
    } else if (index < text.length) {
      const typingTimer = setTimeout(() => {
        setDisplayText((prev) => prev + text.charAt(index));
        setIndex((prev) => prev + 1);
      }, 100); // 100ms delay between characters

      return () => {
        clearTimeout(typingTimer); // cleanup on unmount
      };
    } else {
      setIsTypingDone(true);
    }
  }, [index, text, startDelay]);

  // Cursor blinking effect
  useEffect(() => {
    const cursorTimer = setInterval(() => {
      setCursorVisible((prev) => !prev); // Toggle cursor visibility here
    }, 350); // 500ms delay for cursor blink

    if (isTypingDone) {
      setTimeout(() => {
        clearInterval(cursorTimer); // stop cursor blink
        setShowCursor(false); // hide cursor
      }, 500); // 500ms delay after typing is done
    }

    return () => {
      clearInterval(cursorTimer); // cleanup on unmount
    };
  }, [isTypingDone]);

  return <h1>{displayText}{showCursor && <span style={{ visibility: cursorVisible ? 'visible' : 'hidden' }}>|</span>}</h1>;
}
