import { HeadContent } from '@tanstack/react-router';
import { createPortal } from 'react-dom';

/**
 * Componente Head per TanStack Router
 * Monta i tag gestiti dal router (title, meta, scripts) direttamente nel <head> del documento
 */
export const Head = () => {
  if (typeof document === 'undefined') {
    return <HeadContent />;
  }
  return createPortal(<HeadContent />, document.head);
};
