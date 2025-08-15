import { faHouse, faChartLine, faChartColumn, faWallet, faChartPie, faEnvelope, faSliders, faPhoneVolume } from '@fortawesome/free-solid-svg-icons';

export const routes = [
  { title: 'Home', icon: faHouse, path: '/' },
  { title: 'Sales', icon: faChartLine, path: '/sales' },
  { title: 'Costs', icon: faChartColumn, path: '/costs' },
  { title: 'Payments', icon: faWallet, path: '/payments' },
  { title: 'Finances', icon: faChartPie, path: '/finances' },
  { title: 'Messages', icon: faEnvelope, path: '/messages' },
];

export const bottomRoutes = [
  { title: 'Settings', icon: faSliders, path: '/settings' },
  { title: 'Support', icon: faPhoneVolume, path: '/support' },
];
