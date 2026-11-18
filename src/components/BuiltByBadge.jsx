import React from 'react'
import '../styles/built-by-badge.css'

/**
 * BuiltByBadge
 * ------------
 * A minimal footer bar you can drop into any website you build.
 * It says "Built by Manish R. Shetty" with a link back to your portfolio.
 *
 * Usage:
 *   import BuiltByBadge from './components/BuiltByBadge';
 *   <BuiltByBadge />
 *
 * Optional props:
 *   label       — override the "Built by" text   (default: "Built by")
 *   name        — override the linked name        (default: "Manish R. Shetty")
 *   href        — override the portfolio URL      (default: "https://manishramshetty.vercel.app")
 *   year        — show a custom year              (default: current year)
 *   showYear    — toggle the year display         (default: true)
 *   logoSrc     — path to logo image              (default: "/logo.svg")
 *   showLogo    — toggle the logo display         (default: true)
 */

export default function BuiltByBadge({
  label = 'Built by',
  name = 'Manish R. Shetty',
  href = 'https://manishramshetty.vercel.app',
  year,
  showYear = true,
  logoSrc = '/logo.svg',
  showLogo = true,
}) {
  const displayYear = year ?? new Date().getFullYear()

  return (
    <footer className="built-by-badge">
      <div className="built-by-badge__inner">
        {/* Logo */}
        {showLogo && (
          <a
            href={href}
            target="_blank"
            rel="noopener noreferrer"
            className="built-by-badge__logo-link"
            aria-label={`${name} Portfolio`}
          >
            <img
              src={logoSrc}
              alt={`${name} Logo`}
              className="built-by-badge__logo-img"
              width="28"
              height="28"
              onError={e => {
                // If logo.svg fails to load, gracefully hide or fallback
                e.currentTarget.style.display = 'none'
              }}
            />
          </a>
        )}

        {/* Separator after logo */}
        {showLogo && (
          <span className="built-by-badge__dot" aria-hidden="true">&bull;</span>
        )}

        {/* Year */}
        {showYear && (
          <span className="built-by-badge__year">
            &copy; {displayYear}
          </span>
        )}

        {/* Separator */}
        {showYear && (
          <span className="built-by-badge__dot" aria-hidden="true">&bull;</span>
        )}

        {/* Label */}
        <span className="built-by-badge__label">
          {label}
        </span>

        {/* Name link */}
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="built-by-badge__name-link"
        >
          <span>{name}</span>
          {/* External link micro-icon */}
          <svg
            width="10"
            height="10"
            viewBox="0 0 12 12"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.8"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="built-by-badge__ext-icon"
            aria-hidden="true"
          >
            <path d="M3.5 8.5 8.5 3.5M5 3.5h3.5V7" />
          </svg>
        </a>
      </div>
    </footer>
  )
}
