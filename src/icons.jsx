const Icon = ({ children, ...p }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" {...p}>
    {children}
  </svg>
);

export const IconCode = (p) => <Icon {...p}><polyline points="8 6 2 12 8 18" /><polyline points="16 6 22 12 16 18" /></Icon>;
export const IconWP = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M4 10h4M16 10h4M8 10l3 8 2-5 2 5 2-8" /></Icon>;
export const IconWebflow = (p) => <Icon {...p}><path d="M3 6l4 12 3-8 3 8 4-12" /><path d="M17 6l4 0l-4 12" /></Icon>;
export const IconShop = (p) => <Icon {...p}><path d="M3 9l1.5-5h15L21 9" /><path d="M4 9h16v10a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1z" /><path d="M9 13a3 3 0 0 0 6 0" /></Icon>;
export const IconApp = (p) => <Icon {...p}><rect x="6" y="2" width="12" height="20" rx="2" /><line x1="11" y1="18" x2="13" y2="18" /></Icon>;
export const IconSEO = (p) => <Icon {...p}><circle cx="11" cy="11" r="7" /><line x1="21" y1="21" x2="16.5" y2="16.5" /><path d="M8 11l2 2 4-4" /></Icon>;
export const IconAI = (p) => <Icon {...p}><rect x="5" y="5" width="14" height="14" rx="3" /><circle cx="9" cy="10" r="1" /><circle cx="15" cy="10" r="1" /><path d="M9 15c1 1 5 1 6 0" /><path d="M12 2v3M12 19v3M2 12h3M19 12h3" /></Icon>;
export const IconArrow = (p) => <Icon {...p}><line x1="7" y1="17" x2="17" y2="7" /><polyline points="7 7 17 7 17 17" /></Icon>;
export const IconMail = (p) => <Icon {...p}><rect x="3" y="5" width="18" height="14" rx="2" /><polyline points="3 7 12 13 21 7" /></Icon>;
export const IconPhone = (p) => <Icon {...p}><path d="M22 16.9v3a2 2 0 0 1-2.2 2 19.8 19.8 0 0 1-8.6-3 19.5 19.5 0 0 1-6-6 19.8 19.8 0 0 1-3-8.7A2 2 0 0 1 4.1 2h3a2 2 0 0 1 2 1.7c.1 1 .3 2 .7 3a2 2 0 0 1-.5 2.1L8 10a16 16 0 0 0 6 6l1.2-1.3a2 2 0 0 1 2.1-.5c1 .4 2 .6 3 .7a2 2 0 0 1 1.7 2.1z" /></Icon>;
export const IconPin = (p) => <Icon {...p}><path d="M21 10c0 6-9 12-9 12s-9-6-9-12a9 9 0 0 1 18 0z" /><circle cx="12" cy="10" r="3" /></Icon>;
export const IconStar = (p) => <Icon fill="currentColor" stroke="none" {...p}><polygon points="12 2 15 9 22 9.5 17 14.5 18.5 22 12 18 5.5 22 7 14.5 2 9.5 9 9" /></Icon>;
export const IconUp = (p) => <Icon {...p}><line x1="12" y1="19" x2="12" y2="5" /><polyline points="5 12 12 5 19 12" /></Icon>;
export const IconMenu = (p) => <Icon {...p}><line x1="4" y1="7" x2="20" y2="7" /><line x1="4" y1="12" x2="20" y2="12" /><line x1="4" y1="17" x2="20" y2="17" /></Icon>;
export const IconClose = (p) => <Icon {...p}><line x1="6" y1="6" x2="18" y2="18" /><line x1="6" y1="18" x2="18" y2="6" /></Icon>;
export const IconTwitter = (p) => <Icon {...p}><path d="M22 5.9c-.7.3-1.5.6-2.3.7.8-.5 1.4-1.3 1.7-2.3-.8.5-1.7.8-2.6 1a4.1 4.1 0 0 0-7 3.7A11.6 11.6 0 0 1 3.4 4.6a4.1 4.1 0 0 0 1.3 5.5c-.7 0-1.3-.2-1.9-.5v.1c0 2 1.4 3.6 3.3 4a4.1 4.1 0 0 1-1.9.1 4.1 4.1 0 0 0 3.8 2.8A8.2 8.2 0 0 1 2 18.4a11.6 11.6 0 0 0 6.3 1.8c7.5 0 11.7-6.3 11.7-11.7v-.5c.8-.6 1.5-1.3 2-2.1z" /></Icon>;
export const IconLinkedin = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="3" /><line x1="8" y1="10" x2="8" y2="16" /><circle cx="8" cy="7" r="0.5" fill="currentColor" /><path d="M12 16v-3.5a2 2 0 0 1 4 0V16" /><line x1="12" y1="10" x2="12" y2="16" /></Icon>;
export const IconInsta = (p) => <Icon {...p}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.2" cy="6.8" r="0.6" fill="currentColor" /></Icon>;
export const IconDribbble = (p) => <Icon {...p}><circle cx="12" cy="12" r="9" /><path d="M3.5 9.5c3 1 12 1 17 0M6 19c2-5 5-13 6-17M18 19c-2-5-9-9-15-8" /></Icon>;
