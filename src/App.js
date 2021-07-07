import Form from "./Form";
import Header from "./Header";
import Container from "./Container";
import Clock from "./Clock";
import { GlobalStyle } from "./styled";

function App() {

  return (
    <>
      <GlobalStyle />
      <Container>
        <Header
          title="Przelicznik walut"
        />
        <Clock />
        <Form />
      </Container>
    </>
  );
};

export default App;
