import React from 'react';
import Nav from '../layout/Nav';

export default function Hero() {
  return (
    <>
      <div>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          <a href="/">André Marinho</a>
        </h1>
        <h2 className="mt-3 text-lg font-medium tracking-tight sm:text-xl">Front End Developer</h2>
        <p className="mt-4 max-w-xs leading-normal text-color-02">
          I build fast, accessible, and business-driven web experiences.
        </p>
        <Nav />
      </div>
      <ul className="ml-1 mt-8 flex items-center" aria-label="Social media">
        <li className="transition-colors duration-200 transform mr-5 shrink-0 text-xs">
          <a
            href="https://github.com/andre-marinho"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--text-primary)]"
            aria-label="GitHub profile (opens in a new tab)"
            title="GitHub"
          >
            <label className="sr-only">GitHub</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M12 0C5.372 0 0 5.373 0 12c0 5.303 3.438 9.8 8.205 11.387.6.113.82-.26.82-.577v-2.045c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.757-1.333-1.757-1.089-.745.083-.729.083-.729 1.205.085 1.84 1.237 1.84 1.237 1.07 1.834 2.807 1.304 3.492.997.108-.775.418-1.304.76-1.604-2.665-.304-5.466-1.334-5.466-5.931 0-1.31.469-2.381 1.236-3.221-.124-.303-.535-1.523.117-3.176 0 0 1.008-.322 3.3 1.23a11.5 11.5 0 0 1 3.003-.404 11.5 11.5 0 0 1 3.003.404c2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.873.119 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.804 5.625-5.475 5.921.43.371.823 1.103.823 2.222v3.293c0 .319.218.694.825.576C20.565 21.796 24 17.298 24 12c0-6.627-5.373-12-12-12z" />
            </svg>
          </a>
        </li>
        <li className="transition-colors duration-200 transform mr-5 shrink-0 text-xs">
          <a
            href="https://linkedin.com/in/andre-marinho-3318ab1aa"
            target="_blank"
            rel="noopener noreferrer"
            className="block hover:text-[var(--text-primary)]"
            aria-label="LinkedIn profile (opens in a new tab)"
            title="LinkedIn"
          >
            <label className="sr-only">LinkedIn</label>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
            >
              <path d="M20.447 20.452H17.2v-5.569c0-1.328-.025-3.038-1.85-3.038-1.853 0-2.136 1.446-2.136 2.94v5.667H9.065V9h3.112v1.561h.045c.434-.824 1.494-1.692 3.073-1.692 3.285 0 3.89 2.164 3.89 4.977v6.606zM5.337 7.433a1.806 1.806 0 1 1 0-3.612 1.806 1.806 0 0 1 0 3.612zm1.631 13.019H3.705V9h3.263v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.225 0z" />
            </svg>
          </a>
        </li>
      </ul>
    </>
  );
}
