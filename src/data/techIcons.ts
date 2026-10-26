import axiosIcon from '@/assets/icons/axios.svg';
import formikIcon from '@/assets/icons/formik.svg';
import gitIcon from '@/assets/icons/icons8-git.svg';
import reactIcon from '@/assets/icons/icons8-react.svg';
import tailwindIcon from '@/assets/icons/icons8-tailwind-css.svg';
import typescriptIcon from '@/assets/icons/icons8-dattiloscritto.svg';
import linuxIcon from '@/assets/icons/linux.svg';
import viteIcon from '@/assets/icons/vite.svg';

/**
 * Mappa nome tecnologia -> icona per le pillole del Tech Stack.
 *
 * Le chiavi devono combaciare esattamente con gli `items` di `techGroups`
 * in `@/data/about` (maiuscole comprese): il confronto e' una lookup diretta,
 * quindi un nome diverso non produce errori ma solo una pillola senza icona.
 *
 * Icone mancanti: TanStack Router, Node.js, Express, MongoDB, Bash, Docker,
 * Nginx. Quando verranno aggiunte basta importarle e mapparle qui.
 */
export const TECH_ICONS: Record<string, string> = {
  React: reactIcon,
  TypeScript: typescriptIcon,
  'Tailwind CSS': tailwindIcon,
  Vite: viteIcon,
  'Debian/GNU linux': linuxIcon,
  Git: gitIcon,
  Axios: axiosIcon,
  Formik: formikIcon,
};
