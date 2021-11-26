import Router from './routes';
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';
import "../node_modules/rpg-awesome/css/rpg-awesome.min.css"
function App() {
  return (
  <ThemeConfig>
      <GlobalStyles />
      <Router />
    </ThemeConfig>
  );
}

export default App;
