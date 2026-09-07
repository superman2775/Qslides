//hi
//we still need backend for this 
"use client";

import { useState } from "react";
import { Icon } from "./icons";
import "./auth-screen.css";

type AuthMode = "login" | "signup";

function QslidesLogo() {
  return (
    <span className="auth-logo" aria-hidden="true">
      <svg viewBox="0 0 48 48" fill="none">
        <path
          d="M8 11.5C8 9.57 9.57 8 11.5 8h19C35.75 8 40 12.25 40 17.5v17C40 39.75 35.75 44 30.5 44H17.3c-5.14 0-9.3-4.16-9.3-9.3V11.5Z"
          fill="currentColor"
        />
        <path
          d="M15 17h18M15 24h11"
          stroke="#FFFDF8"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="m28 30 3.8 3.7L38 27.4"
          stroke="#F36B4B"
          strokeWidth="3.2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </span>
  );
}

export default function AuthScreen({ initialMode }: { initialMode: AuthMode }) {
  const [mode, setMode] = useState<AuthMode>(initialMode);
  const [emailFormOpen, setEmailFormOpen] = useState(false);
  const isSignup = mode === "signup";

  const switchMode = () => {
    setMode(isSignup ? "login" : "signup");
    setEmailFormOpen(true);
  };

  return (
    <main className="auth-page">
      <a className="auth-brand" href="/" aria-label="Qslides home">
        <QslidesLogo />
        <span>
          Qslides<span>.</span>
        </span>
      </a>
      <div className="auth-ornament auth-ornament-top" aria-hidden="true" />
      <div className="auth-ornament auth-ornament-bottom" aria-hidden="true" />

      <section className="auth-card" aria-labelledby="auth-title">
        <h1 id="auth-title">
          {isSignup ? "Hello there!" : "Welcome back!"}
        </h1>
        <p className="auth-intro">
          {isSignup
            ? "Welcome to Qslides! Make an account (it's freeeeee!) and get started."
            : "We missed you! Continue making awesome presentations with Qslides."}
        </p>

        <div className="provider-actions">
          <button className="provider-button" type="button">
            <Icon name="google" className="provider-mark" />
            {isSignup ? "Sign up with Google" : "Log in with Google"}
          </button>
          <button className="provider-button" type="button">
            <Icon name="microsoft" className="provider-mark" />
            {isSignup ? "Sign up with Microsoft" : "Log in with Microsoft"}
          </button>
        </div>
        <div className="auth-divider">
          <span>or</span>
        </div>

        <div className={`email-reveal${emailFormOpen ? " is-open" : ""}`}>
          <button
            className="email-trigger"
            type="button"
            aria-expanded={emailFormOpen}
            aria-controls="email-auth-form"
            onClick={() => setEmailFormOpen(true)}
          >
            <span className="email-trigger-content">
              <Icon name="email" className="provider-mark" />
              {isSignup ? "Sign up with your email" : "Log in with your email"}
            </span>
            <Icon name="arrow" className="arrow-icon" />
          </button>
          <form
            className="email-form"
            id="email-auth-form"
            onSubmit={(event) => event.preventDefault()}
          >
            {isSignup && (
              <label>
                Username
                <input
                  name="username"
                  type="text"
                  autoComplete="username"
                  placeholder="Your (nick)name"
                  required
                />
              </label>
            )}
            <label>
              {isSignup ? "Email address" : "Email address or username"}
              <input
                name="identity"
                type={isSignup ? "email" : "text"}
                autoComplete={isSignup ? "email" : "username"}
                placeholder="pizzalover123@email.com"
                required
              />
            </label>
            <label>
              Password
              <input
                name="password"
                type="password"
                autoComplete={isSignup ? "new-password" : "current-password"}
                minLength={isSignup ? 8 : undefined}
                placeholder={
                  isSignup ? "Use at least 8 characters" : "Your password"
                }
                required
              />
            </label>
            <button className="auth-submit" type="submit">
              {isSignup ? "Create account" : "Log in"} <Icon name="arrow" className="arrow-icon" />
            </button>
          </form>
        </div>

        <p className="auth-switch">
          {isSignup ? "Already have an account?" : "New here?"}{" "}
          <button type="button" onClick={switchMode}>
            {isSignup ? "Log in" : "Create an account"}
          </button>
        </p>
      </section>
      <p className="auth-copyright">
        © 2026 Qslides
      </p>
    </main>
  );
}

/*
cuz sometimes you just feel tired
you feel weak
and when you feel weak
you feel like you wanna just give up
but you gotta search within you
you gotta find that inner strength
and just pull that shit out of you
and get that motivation to not give up

Eminem - Till I Collapse
*/