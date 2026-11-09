import React from 'react';

interface CatteryLogoProps {
  className?: string;
  size?: number;
}

export const CatteryLogo: React.FC<CatteryLogoProps> = ({ className = 'w-10 h-10', size = 44 }) => {
  return (
    <div className={`relative flex items-center justify-center shrink-0 ${className}`}>
      <svg
        width={size}
        height={size}
        viewBox="0 0 100 100"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-label="Emblema Criadero Gracia Divina"
      >
        <defs>
          <linearGradient id="gdRedGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#b91c1c" />
            <stop offset="100%" stopColor="#7f1d1d" />
          </linearGradient>
          <linearGradient id="gdGoldGrad" x1="0" y1="0" x2="100" y2="100" gradientUnits="userSpaceOnUse">
            <stop offset="0%" stopColor="#fef08a" />
            <stop offset="50%" stopColor="#eab308" />
            <stop offset="100%" stopColor="#ca8a04" />
          </linearGradient>
        </defs>

        {/* Outer Red Round Shield Medallion */}
        <circle cx="50" cy="50" r="48" fill="url(#gdRedGrad)" stroke="#ffffff" strokeWidth="2.5" />
        <circle cx="50" cy="50" r="43.5" stroke="#fca5a5" strokeWidth="1.2" strokeDasharray="3 3" opacity="0.8" />

        {/* Laurel Wreath of Honor around the rim in pure white & gold shimmer */}
        <g stroke="#ffffff" strokeWidth="1.2" fill="#ffffff" opacity="0.9">
          {/* Left Laurel Leaves */}
          <path d="M 20 54 Q 16 46 22 40" strokeLinecap="round" />
          <path d="M 22 40 Q 18 32 26 28" strokeLinecap="round" />
          <path d="M 20 62 Q 18 72 26 78" strokeLinecap="round" />
          <circle cx="18" cy="47" r="1.5" />
          <circle cx="21" cy="34" r="1.5" />
          <circle cx="22" cy="70" r="1.5" />

          {/* Right Laurel Leaves */}
          <path d="M 80 54 Q 84 46 78 40" strokeLinecap="round" />
          <path d="M 78 40 Q 82 32 74 28" strokeLinecap="round" />
          <path d="M 80 62 Q 82 72 74 78" strokeLinecap="round" />
          <circle cx="82" cy="47" r="1.5" />
          <circle cx="79" cy="34" r="1.5" />
          <circle cx="78" cy="70" r="1.5" />
        </g>

        {/* Royal Crown in Crisp White & Warm Gold Jewel Points */}
        <g fill="#ffffff">
          <polygon points="33,26 30,16 40,22 50,13 60,22 70,16 67,26" />
          <rect x="33" y="26" width="34" height="4" rx="1.5" fill="#ffffff" />
          <circle cx="30" cy="15" r="2.2" fill="url(#gdGoldGrad)" stroke="#ffffff" strokeWidth="0.6" />
          <circle cx="50" cy="12" r="2.6" fill="url(#gdGoldGrad)" stroke="#ffffff" strokeWidth="0.6" />
          <circle cx="70" cy="15" r="2.2" fill="url(#gdGoldGrad)" stroke="#ffffff" strokeWidth="0.6" />
        </g>

        {/* Regal Cat Silhouette in Pure White */}
        <g fill="#ffffff">
          {/* Ears */}
          <polygon points="32,45 27,29 42,37" />
          <polygon points="68,45 73,29 58,37" />
          {/* Ear shadow */}
          <polygon points="33,41 29,32 40,38" fill="#991b1b" />
          <polygon points="67,41 71,32 60,38" fill="#991b1b" />
          {/* Head & cheeks */}
          <ellipse cx="50" cy="54" rx="21" ry="18" />
          {/* Muzzle */}
          <ellipse cx="46" cy="61" rx="5.5" ry="4" fill="#fef2f2" />
          <ellipse cx="54" cy="61" rx="5.5" ry="4" fill="#fef2f2" />
          {/* Nose */}
          <polygon points="48,57 52,57 50,60" fill="#b91c1c" />
          {/* Noble Almond Eyes */}
          <ellipse cx="42" cy="50" rx="3.2" ry="4.2" fill="#991b1b" transform="rotate(10 42 50)" />
          <ellipse cx="58" cy="50" rx="3.2" ry="4.2" fill="#991b1b" transform="rotate(-10 58 50)" />
          {/* Sparkles */}
          <circle cx="43" cy="49" r="1.1" fill="#ffffff" />
          <circle cx="59" cy="49" r="1.1" fill="#ffffff" />
          {/* Whiskers */}
          <line x1="39" y1="60" x2="26" y2="58" stroke="#991b1b" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <line x1="39" y1="62" x2="24" y2="64" stroke="#991b1b" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <line x1="61" y1="60" x2="74" y2="58" stroke="#991b1b" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
          <line x1="61" y1="62" x2="76" y2="64" stroke="#991b1b" strokeWidth="1.2" strokeLinecap="round" opacity="0.65" />
        </g>

        {/* Base Banner with "GD" Monogram in Gold */}
        <g>
          <rect x="36" y="74" width="28" height="11" rx="3" fill="#ffffff" stroke="#991b1b" strokeWidth="1" />
          <text
            x="50"
            y="82.5"
            textAnchor="middle"
            fill="#991b1b"
            fontSize="8"
            fontWeight="bold"
            fontFamily="serif"
            letterSpacing="1"
          >
            GD
          </text>
        </g>
      </svg>
    </div>
  );
};

