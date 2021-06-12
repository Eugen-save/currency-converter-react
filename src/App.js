import Form from "./Form";
import Table from "./Table";
import Header from "./Header";
import Container from "./Container";

function App() {
  return (

    <Container>
      <Header
        title="Przelicznik walut"
      />
      <Form />
      <Table />
    </Container>
  );
};

export default App;
