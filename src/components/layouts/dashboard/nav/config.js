import SvgColor from '../../../svg-color';

const icon = (name) => <SvgColor src={`/assets/icons/navbar/${name}.svg`} sx={{ width: 1, height: 1 }} />;

const navConfig = [
  {
    title: 'Painel de vendas',
    path: '/dashboard/app',
    icon: icon('ic_analytics'),
  },
];

export default navConfig;
