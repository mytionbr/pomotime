import PropTypes from 'prop-types';
// material
import { Box, Typography } from '@mui/material';
import styled from '@emotion/styled';

// ----------------------------------------------------------------------

const Brand = styled(Typography)(({theme}) => ({
 color: theme.palette.primary.main
}));

Logo.propTypes = {
  sx: PropTypes.object
};

export default function Logo({ sx }) {
  return <Brand variant='h4' >POMOTIME</Brand>
}