// ScrambleText.jsx
import React, { useEffect, useState } from "react";

const characters = "!@#$%^&*()_+{}[]|:;<>,.?/~";

function getRandomChar() {
  return characters[Math.floor(Math.random() * characters.length)];
}

export default function ScrambleText({ text, speed = 50, className = "" }) {
  const [output, setOutput] = useState("");
  //const [done, setDone] = useState(false);

  useEffect(() => {
    let frame = 0;
    const length = text.length;
    let interval;

    const scramble = () => {
      if (frame >= length) {
        setOutput(text);
        //setDone(true);
        clearInterval(interval);
        return;
      }

      let scrambled = text
        .split("")
        .map((char, i) => {
          if (i < frame) return char;
          return getRandomChar();
        })
        .join("");

      setOutput(scrambled);
      frame++;
    };

    interval = setInterval(scramble, speed);
    return () => clearInterval(interval);
  }, [text, speed]);

  return <span className={className}>{output}</span>;
}
