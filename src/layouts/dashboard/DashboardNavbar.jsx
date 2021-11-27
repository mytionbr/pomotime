import PropTypes from "prop-types";
import { Icon } from "@iconify/react";
import menu2Fill from "@iconify/icons-eva/menu-2-fill";
import { alpha, styled } from "@mui/material/styles";
import {
  Box,
  Stack,
  AppBar,
  Toolbar,
  IconButton,
  CircularProgress,
} from "@mui/material";
import { MHidden } from "../../components/@material-extend";
import TopicPopover from "./TopicPopover";

import { grey } from "@mui/material/colors";
import Level from "../../components/Level";
const DRAWER_WIDTH = 280;
const APPBAR_MOBILE = 64;
const APPBAR_DESKTOP = 92;

const RootStyle = styled(AppBar)(({ theme }) => ({
  boxShadow: "none",
  backdropFilter: "blur(6px)",
  WebkitBackdropFilter: "blur(6px)", // Fix on Mobile
  backgroundColor: alpha(theme.palette.background.default, 0.72),
  [theme.breakpoints.up("lg")]: {
    width: `calc(100% - ${DRAWER_WIDTH + 1}px)`,
  },
}));

const ToolbarStyle = styled(Toolbar)(({ theme }) => ({
  minHeight: APPBAR_MOBILE,
  [theme.breakpoints.up("lg")]: {
    minHeight: APPBAR_DESKTOP,
    padding: theme.spacing(0, 5),
  },
}));

// ----------------------------------------------------------------------

DashboardNavbar.propTypes = {
  onOpenSidebar: PropTypes.func,
};


const topics = [
  {
    name: "XP",
    description: "Quanto mais XP, maior o seu nível",
    total: 4500,
    icon: <i className="ra ra-health-increase" />,
    color: "tasks",
  },
  {
    name: "Pomocoins",
    description: "Compre recompensas na loja",
    total: 3000,
    icon: <i className="ra ra-gem" />,
    color: "longBreak",
  },
  {
    name: "Level",
    description: "Nível prata",
    icon: <Level />,
    color: "white",
  },
];

export default function DashboardNavbar({ onOpenSidebar }) {
  return (
    <RootStyle>
      <ToolbarStyle>
        <MHidden width="lgUp">
          <IconButton
            onClick={onOpenSidebar}
            sx={{ mr: 1, color: "text.primary" }}
          >
            <Icon icon={menu2Fill} />
          </IconButton>
        </MHidden>

        <Box sx={{ flexGrow: 1 }} />

        <Stack
          direction="row"
          alignItems="center"
          spacing={{ xs: 0.5, sm: 1.5 }}
        >
          {topics.map((topic) => (
            <TopicPopover
              color={topic.color}
              name={topic.name}
              description={topic.description}
              icon={topic.icon}
              total={topic.total}
            />
          ))}
        </Stack>
      </ToolbarStyle>
    </RootStyle>
  );
}
