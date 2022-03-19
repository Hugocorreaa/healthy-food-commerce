import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GlobalStyle } from "./styles/globalstyles";
import Router from "./routes";



function App() {
    return (
        <>
            <GlobalStyle />
            <Router />
        </>
    );
}

export default App;
