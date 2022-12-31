import { PATH_DASHBOARD } from '@Config/paths';
import { TypesConfigNavbar } from 'src/@types/dashboard';

export const configNavbar: TypesConfigNavbar[] = [
  { text: 'Home', href: `${PATH_DASHBOARD}` },
  { text: 'Vender', href: `${PATH_DASHBOARD}/venda` },
  { text: 'Produtos', href: `${PATH_DASHBOARD}/produtos/listar` },
  { text: 'Sobre', href: `${PATH_DASHBOARD}/sobre` },
];
