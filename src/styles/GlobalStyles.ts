import { css } from '@emotion/react';

export const globalStyles = css`
  :root {
    --color-background: rgba(10, 11, 15, 0.7);
    --color-primary: #4a9eff;
    --color-secondary: #7b5dfa;
    --color-accent: #00ff9d;
    --color-text: #ffffff;
    --color-text-secondary: rgba(255, 255, 255, 0.85);
    --transition-duration: 800ms;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    scroll-behavior: smooth;
    overflow: hidden;
    scroll-snap-type: y mandatory;
    height: 100%;
  }

  body {
    color: var(--color-text);
    font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
    line-height: 1.6;
    overflow: hidden;
    position: relative;
    min-height: 100%;
    background-color: transparent;
    
    &::before {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-image: url('/thumb-1920-298926.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      background-attachment: fixed;
      z-index: -2;
    }

    &::after {
      content: '';
      position: fixed;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: linear-gradient(
        to bottom,
        rgba(10, 11, 15, 0.6) 0%,
        rgba(10, 11, 15, 0.4) 50%,
        rgba(10, 11, 15, 0.6) 100%
      );
      z-index: -1;
    }
  }

  main {
    height: 100vh;
    overflow: hidden;
    display: flex;
    flex-direction: column;
    position: relative;
    z-index: 1;
    background: transparent;
  }

  section {
    min-height: 100vh;
    width: 100%;
    position: relative;
    background: transparent !important;
  }

  #hero, #about, #features, #gallery, #development {
    scroll-snap-align: start;
    scroll-snap-stop: always;
    transition: transform var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1);
  }

  #footer {
    scroll-snap-align: end;
    scroll-snap-stop: always;
    transition: transform var(--transition-duration) cubic-bezier(0.4, 0, 0.2, 1);
    margin-bottom: 0;
    padding-bottom: 0;
  }

  h1, h2, h3, h4, h5, h6 {
    font-weight: 700;
    line-height: 1.2;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
  }

  a {
    color: var(--color-primary);
    text-decoration: none;
    transition: color 0.3s ease;
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);

    &:hover {
      color: var(--color-accent);
    }
  }

  button {
    cursor: pointer;
    border: none;
    background: none;
    font-family: inherit;
  }

  .container {
    max-width: 1200px;
    margin: 0 auto;
    padding: 0 2rem;
    position: relative;
  }

  .section {
    padding: 6rem 0;
    position: relative;
  }

  p {
    text-shadow: 0 1px 2px rgba(0, 0, 0, 0.3);
  }
`; 