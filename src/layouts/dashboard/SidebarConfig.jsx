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
    path: '/app/pomodoro',
    icon: getIcon(clockFill)
  },
  {
    title: 'Tarefas',
    path: '/app/tasks',
    icon: getIcon(checkmarkSquareOutline)
  },
  {
    title: 'Estatísticas',
    path: '/app/statistics',
    icon: getIcon(pieChart2Fill)
  },
  {
    title: 'Configurações',
    path: '/app/settings',
    icon: getIcon(settings2Fill)
  },
  {
    title: 'Perfil',
    path: '/app/profile',
    icon: getIcon(personFill)
  },
  
];

export default sidebarConfig;