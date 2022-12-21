import { PATH_DASHBOARD } from '@Config/paths';
import { TypesConfigNavbar } from 'src/@types/dashboard';

export const configNavbarTabs: TypesConfigNavbar[] = [
  { text: 'Home', href: `${PATH_DASHBOARD}` },
  { text: 'Sobre', href: `${PATH_DASHBOARD}/sobre` },
  { text: 'Venda', href: `${PATH_DASHBOARD}/venda` },
];
