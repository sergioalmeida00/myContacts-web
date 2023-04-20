import { ThemeProvider } from 'styled-components';

import GlobalStyles from '../../assets/styles/global';
import defaultTheme from '../../assets/styles/themes/default';
import { Container } from './style';
import { Header } from '../Header';
import { Route } from '../../routes';

function App() {
  return (
    <ThemeProvider theme={defaultTheme}>
      <GlobalStyles />
      <Container>
        <Header/>
        <Route/>
      </Container>
    </ThemeProvider>
  );
}

export default App;
