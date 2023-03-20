import { Outlet } from 'react-router-dom';
import { styled } from '@mui/material/styles';

const APP_BAR_MOBILE = 10;
const APP_BAR_DESKTOP = 42;

const StyledRoot = styled('div')({
  display: 'flex',
  minHeight: '100%',
  overflow: 'hidden',
});

const Main = styled('div')(({ theme }) => ({
  flexGrow: 1,
  overflow: 'auto',
  minHeight: '100%',
  paddingTop: APP_BAR_MOBILE + 24,
  paddingBottom: theme.spacing(10),
  [theme.breakpoints.up('lg')]: {
    paddingTop: APP_BAR_DESKTOP,
    paddingLeft: theme.spacing(2),
    paddingRight: theme.spacing(2),
  },
}));

const DashboardLayout = () => (
  <StyledRoot>
    <Main>
      <Outlet />
    </Main>
  </StyledRoot>
)
export default DashboardLayout
