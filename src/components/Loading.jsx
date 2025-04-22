import React from "react";

const Loading = () => {
  return (
    <div class=" p-2 rounded">
      <svg width="48" height="16" viewBox="0 0 48 16">
        <circle cx="8" cy="8" r="6" fill="#6b7280">
          <animate
            attributeName="fill"
            values="#6b7280;#ffffff;#6b7280"
            dur="1.5s"
            begin="0s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="24" cy="8" r="6" fill="#6b7280">
          <animate
            attributeName="fill"
            values="#6b7280;#ffffff;#6b7280"
            dur="1.5s"
            begin="0.3s"
            repeatCount="indefinite"
          />
        </circle>
        <circle cx="40" cy="8" r="6" fill="#6b7280">
          <animate
            attributeName="fill"
            values="#6b7280;#ffffff;#6b7280"
            dur="1.5s"
            begin="0.6s"
            repeatCount="indefinite"
          />
        </circle>
      </svg>
    </div>
  );
};

export default Loading;
