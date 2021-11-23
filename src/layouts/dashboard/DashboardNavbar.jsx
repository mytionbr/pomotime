import PropTypes from 'prop-types';
import { Icon } from '@iconify/react';
import menu2Fill from '@iconify/icons-eva/menu-2-fill';
import { alpha, styled } from '@mui/material/styles';
import { Box, Stack, AppBar, Toolbar, IconButton } from '@mui/material';
import { MHidden } from '../../components/@material-extend';
import TopicPopover from './TopicPopover';
import doneAllFill from "@iconify/icons-eva/done-all-fill";
import dashboardOutlined from "@iconify/icons-ant-design/dashboard-outlined";
import clockOutline from "@iconify/icons-eva/clock-outline";
import coffeeOutlined from "@iconify/icons-ant-design/coffee-outlined";
const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: 'none',
  backdropFilter: 'blur(6px)',
  WebkitBackdropFilter: 'blur(6px)', // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up('lg')]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`
  }
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up('lg')]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5)
  }
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func
};

const topics = [
  {
    name: 'tarefas',
    description: 'tarefas concluídas',
    total: 5,
    icon: doneAllFill,
    color: 'tasks'
  },
  {
    name: 'pomodoros',
    description: 'pomodoros concluídos',
    total: 10,
    icon: dashboardOutlined,
    color: 'done'
  },
  {
    name: 'minutos focados',
    description: 'tempo focado',
    total: 160,
    icon: clockOutline,
    color: 'hourTotal'
  },
  {
    name: 'minutos em pausa',
    description: 'Tempo em pausa',
    total: 200,
    icon: coffeeOutlined,
    color: 'longBreak'
  },

]

export default function DashboardNavbar({ onOpenSidebar }) {
    return (
      <RootStyle>
        <ToolbarStyle>
          <MHidden width="lgUp">
            <IconButton onClick={onOpenSidebar} sx={{ mr: 1, color: 'text.primary' }}>
              <Icon icon={menu2Fill} />
            </IconButton>
          </MHidden>
  
          <Box sx={{ flexGrow: 1 }} />
  
          <Stack direction="row" alignItems="center" spacing={{ xs: 0.5, sm: 1.5 }}>
            {
              topics.map(topic => (
                 <TopicPopover 
                  color={topic.color} 
                  name={topic.name} 
                  description={topic.description}
                  icon={topic.icon}
                  total={topic.total}/>
              ))
            }
          </Stack>
        </ToolbarStyle>
      </RootStyle>
    );
  }