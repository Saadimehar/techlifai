import { useEffect, useRef, useState } from 'react';

export function useReveal() {
  const ref = useRef(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            setInView(true);
            obs.unobserve(el);
          }
        });
      },
      { threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return [ref, inView];
}

export default function Reveal({ as: Tag = 'div', className = '', delay = 0, children, ...rest }) {
  const [ref, inView] = useReveal();
  const dCls = delay ? ` d${delay}` : '';
  return (
    <Tag ref={ref} className={`reveal${inView ? ' in' : ''}${dCls} ${className}`} {...rest}>
      {children}
    </Tag>
  );
}
