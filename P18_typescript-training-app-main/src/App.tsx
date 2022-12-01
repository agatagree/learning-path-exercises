import { BrowserRouter } from 'react-router-dom';
import { Menu } from './components/Menu';
import { Content } from './components/Content';
import { createGlobalStyle } from 'styled-components';
import { Footer } from './components/Footer'
import styled from 'styled-components';

function App() {
  return (
    <BrowserRouter>
      <Layout>
        <Menu />
        <Content />
        <Footer />
        <GlobalStyles />
      </Layout>
    </BrowserRouter>
  );
}

const GlobalStyles = createGlobalStyle`
  body{
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;
    font-size: 16px;
  }`

const Layout = styled.div`
    max-width: 1200px;
    margin: 0 auto;
    height: 100vh;
    display: flex;
    flex-direction: column;
`;

export default App;

