import { HeadContent } from '@tanstack/react-router';
import { createPortal } from 'react-dom';

/**
 * Monta nel `<head>` i tag generati dalla route corrente:
 * title, meta e link.
 *
 * E' l'unico punto del codebase che tocca `document.head`.
 */
export const DocumentHead = () => createPortal(<HeadContent />, document.head);
