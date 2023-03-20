import { BrowserRouter } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { RecoilRoot } from 'recoil';
import Router from './routes';
import 'react-notifications-component/dist/theme.css';
import ThemeProvider from './theme';
import { StyledChart } from './components/chart';

const App = () => (
  <RecoilRoot>
    <HelmetProvider>
      <BrowserRouter>
        <ThemeProvider>
          <StyledChart />
          <Router />
        </ThemeProvider>
      </BrowserRouter>
    </HelmetProvider>
  </RecoilRoot>
);
export default App;
