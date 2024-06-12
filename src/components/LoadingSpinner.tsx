/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";

const LoadingSpinner = () => {
  return (
    <div
      css={css`
        z-index: 500;
        position: fixed;
        inset: 0;
        display: flex;
        justify-content: center;
        align-items: center;
      `}
    >
      <span
        css={css`
          @keyframes spin {
            0% {
              transform: rotate(0deg);
            }
            100% {
              transform: rotate(360deg);
            }
          }
          display: inline-block;
          width: 48px;
          height: 48px;
          border: 4px solid red;
          border-radius: 50%;
          border-top-color: transparent;
          animation: spin 1s ease-in-out infinite;
        `}
      ></span>
    </div>
  );
};

export default LoadingSpinner;
