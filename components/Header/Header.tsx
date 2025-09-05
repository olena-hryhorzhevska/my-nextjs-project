import css from './Header.module.css';
import Link from 'next/link';
import { getCategories } from '@/lib/api';
import { Roboto } from 'next/font/google';
import CategoriesMenu from '@/components/CategoriesMenu/CategoriesMenu';

const roboto = Roboto({
  subsets: ['latin'],
  weight: ['400'],
});

const Header = async () => {
  const categories = await getCategories();

  return (
    <header className={css.header}>
      <Link href="/" aria-label="Home" className={roboto.className}>
        NoteHub
      </Link>
      <nav aria-label="Main Navigation">
        <ul className={css.navigation}>
          <li>
            <CategoriesMenu categories={categories} />
          </li>
          <li>
            <Link href="/profile" className={roboto.className}>
              Profile
            </Link>
          </li>
          <li>
            <Link href="/about" className={roboto.className}>
              About
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
