"use client";

import { useState } from "react";
import { Icon } from "./icons";

export function MobileMenu() {
  const [open, setOpen] = useState(false);
  const closeMenu = () => setOpen(false);

  return (
    <>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={open}
        aria-controls="mobile-menu"
        aria-label={open ? "Close navigation" : "Open navigation"}
        onClick={() => setOpen(!open)}
      >
        <Icon name="menu" />
      </button>
      <div
        className={`mobile-menu${open ? " is-open" : ""}`}
        id="mobile-menu"
        aria-hidden={!open}
      >
        <a href="#how-it-works" onClick={closeMenu}>
          How it works
        </a>
        <a href="#example" onClick={closeMenu}>
          Example
        </a>
        <a href="/login" onClick={closeMenu}>
          Log in
        </a>
        <a className="button button-dark" href="/signup" onClick={closeMenu}>
          Sign up <Icon name="arrow" className="arrow-icon" />
        </a>
      </div>
    </>
  );
}

const answerOptions = ["Baguette", "Croissant", "Bonjour"];

export function AnswerPicker() {
  const [selectedAnswer, setSelectedAnswer] = useState("C");

  return (
    <div className="answers">
      {answerOptions.map((answer, index) => {
        const letter = String.fromCharCode(65 + index);
        const selected = selectedAnswer === letter;

        return (
          <button
            className={`answer${selected ? " selected" : ""}`}
            type="button"
            key={answer}
            onClick={() => setSelectedAnswer(letter)}
          >
            <span className="answer-letter">{letter}</span>
            {answer}
            {selected && <Icon name="check" className="answer-check" />}
          </button>
        );
      })}
    </div>
  );
}
