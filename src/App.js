import { GlobalStyles } from "./styles/GlobalStyles.js";

import Footer from "./Footer.js";
import Gallery from "./Gallery.js";
import Grid from "./Grid";
import Header from "./Header";

import Testimonials from "./Testimonials.js";

function App() {
  return (
    <>
      <GlobalStyles />
      <Header />
      <main>
        <Grid />
        <Testimonials />
        <Gallery />
      </main>
      <Footer />
    </>
  );
}

export default App;
