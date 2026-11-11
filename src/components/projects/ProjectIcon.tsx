interface ProjectIconProps {
  id: string;
  size?: number;
}

export default function ProjectIcon({ id, size = 48 }: ProjectIconProps) {
  switch (id) {
    case 'prj-01':
      // Tesla Coil: Electrical arc & resonant coil
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="14" r="7" stroke="#30d158" strokeWidth="2" strokeDasharray="3 3" />
          <path d="M24 21V38" stroke="#f5f5f7" strokeWidth="2.5" />
          <path d="M18 38H30" stroke="#f5f5f7" strokeWidth="2" strokeLinecap="round" />
          <path d="M19 26L29 27M19 30L29 31M19 34L29 35" stroke="#ff453a" strokeWidth="1.5" />
          <path d="M14 12L9 8M34 12L39 8M24 7V2" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'prj-02':
      // Battery Level Indicator: Battery outline with segmented colored bars
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="6" y="16" width="32" height="16" rx="4" stroke="#f5f5f7" strokeWidth="2" />
          <path d="M40 21V27" stroke="#f5f5f7" strokeWidth="2" strokeLinecap="round" />
          <rect x="10" y="20" width="4" height="8" rx="1" fill="#ff453a" />
          <rect x="16" y="20" width="4" height="8" rx="1" fill="#ff9f0a" />
          <rect x="22" y="20" width="4" height="8" rx="1" fill="#30d158" />
          <rect x="28" y="20" width="4" height="8" rx="1" fill="#30d158" />
          <path d="M12 36L20 42L28 36" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      );
    case 'prj-03':
      // ESP32 Deskbot: Microcontroller chip + robot face
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="12" width="24" height="24" rx="5" stroke="#f5f5f7" strokeWidth="2" fill="rgba(255,255,255,0.02)" />
          <circle cx="19" cy="21" r="2.5" fill="#30d158" />
          <circle cx="29" cy="21" r="2.5" fill="#30d158" />
          <path d="M19 28H29" stroke="#f5f5f7" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 18H12M6 24H12M6 30H12" stroke="#ff453a" strokeWidth="1.5" />
          <path d="M36 18H42M36 24H42M36 30H42" stroke="#ff453a" strokeWidth="1.5" />
          <circle cx="24" cy="7" r="1.5" fill="#ff9f0a" />
          <path d="M24 7V12" stroke="#ff9f0a" strokeWidth="1.5" />
        </svg>
      );
    case 'prj-04':
      // J.A.R.V.I.S Assistant: Telemetry compass / arc circle
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="16" stroke="rgba(255,255,255,0.2)" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="12" stroke="#30d158" strokeWidth="2" strokeDasharray="6 3" />
          <circle cx="24" cy="24" r="3" fill="#ff453a" />
          <path d="M14 14L34 34M14 34L34 14" stroke="#ff9f0a" strokeWidth="1.2" strokeLinecap="round" strokeDasharray="3 9" />
          <path d="M24 8V11M24 37V40M8 24H11M37 24H40" stroke="#f5f5f7" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'prj-05':
      // Samsung MP3 Conversion: Retro phone shell with headphone wave
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="14" y="8" width="20" height="32" rx="4" stroke="#f5f5f7" strokeWidth="2" />
          <rect x="18" y="13" width="12" height="10" rx="1.5" stroke="#30d158" strokeWidth="1.5" />
          <circle cx="24" cy="31" r="3" stroke="#ff453a" strokeWidth="1.5" />
          <path d="M37 14C39 16 40 18 40 21C40 24 39 26 37 28" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" />
          <path d="M40 10C43 13 45 17 45 21C45 25 43 29 40 32" stroke="rgba(255,159,10,0.5)" strokeWidth="1.2" strokeLinecap="round" />
        </svg>
      );
    case 'prj-06':
      // Four-Bit Password: Pure logic gate lock
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="12" y="20" width="24" height="18" rx="4" stroke="#f5f5f7" strokeWidth="2" />
          <path d="M18 20V14C18 10.6863 20.6863 8 24 8C27.3137 8 30 10.6863 30 14V20" stroke="#ff453a" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="28" r="2.5" fill="#30d158" />
          <path d="M24 30.5V34" stroke="#30d158" strokeWidth="2" strokeLinecap="round" />
          <path d="M6 24H12M6 28H12M6 32H12M6 36H12" stroke="#ff9f0a" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    case 'prj-07':
      // Vintage Watch Restoration: Watch gear / balance wheel
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="24" r="14" stroke="#f5f5f7" strokeWidth="2" />
          <circle cx="24" cy="24" r="5" stroke="#ff453a" strokeWidth="1.5" />
          <circle cx="24" cy="24" r="1.5" fill="#ff9f0a" />
          <path d="M24 10V14M24 34V38M10 24H14M34 24H38" stroke="#30d158" strokeWidth="2" strokeLinecap="round" />
          <path d="M18 4H30M18 44H30" stroke="rgba(255,255,255,0.4)" strokeWidth="2" strokeLinecap="round" />
        </svg>
      );
    case 'prj-08':
      // Fastest Finger First: Stopwatch / pulse trigger button
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <circle cx="24" cy="26" r="14" stroke="#f5f5f7" strokeWidth="2" />
          <path d="M24 8V12M20 8H28" stroke="#ff453a" strokeWidth="2" strokeLinecap="round" />
          <path d="M34 14L37 11" stroke="#ff9f0a" strokeWidth="2" strokeLinecap="round" />
          <path d="M24 26L29 20" stroke="#30d158" strokeWidth="2" strokeLinecap="round" />
          <circle cx="24" cy="26" r="2" fill="#ff453a" />
          <path d="M10 40H38" stroke="rgba(255,255,255,0.3)" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      );
    default:
      return (
        <svg width={size} height={size} viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect x="10" y="10" width="28" height="28" rx="6" stroke="#f5f5f7" strokeWidth="2" />
          <path d="M18 24H30M24 18V30" stroke="#ff453a" strokeWidth="2" />
        </svg>
      );
  }
}
