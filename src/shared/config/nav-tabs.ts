export type NavTab = {
  label: string;
  path: string;
  onlyForAuth?: boolean;
  onlyForGuests?: boolean;
};

export const NAV_TABS: NavTab[] = [
  { label: 'Home', path: '/' },
  { label: 'Menu', path: '/menu' },
  { label: 'Company', path: '/company' },
  { label: 'Login', path: '/login', onlyForGuests: true },
  { label: 'Order', path: '/order', onlyForAuth: true },
];
