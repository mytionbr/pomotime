import { Icon } from '@iconify/react';
import pieChart2Fill from '@iconify/icons-eva/pie-chart-2-fill';
import checkmarkSquareOutline from '@iconify/icons-eva/checkmark-square-outline';
import settings2Fill from '@iconify/icons-eva/settings-2-fill';
import clockFill from '@iconify/icons-eva/clock-fill';
import personFill from '@iconify/icons-eva/person-fill';

// ----------------------------------------------------------------------

const getIcon = (name) => <Icon icon={name} width={22} height={22} />;

const sidebarConfig = [
  {
    title: 'pomodoro',
    path: '/dashboard/app',
    icon: getIcon(clockFill)
  },
  {
    title: 'Tarefas',
    path: '/dashboard/tasks',
    icon: getIcon(checkmarkSquareOutline)
  },
  {
    title: 'Estatísticas',
    path: '/dashboard/user',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Configurações',
    path: '/dashboard/user',
    icon: getIcon(settings2Fill)
  },
  {
    title: 'Perfil',
    path: '/dashboard/user',
    icon: getIcon(personFill)
  },
  
];

export default sidebarConfig;