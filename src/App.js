import Form from "./Form";
import Header from "./Header";
import Container from "./Container";
import Input from "./Input";
import {useState} from 'react';

function App() {


  return (

    <Container>
      <Header
        title="Przelicznik walut"
      />
      <Form 
      input={
      <Input />
    }
      />
    </Container>
  );
};

export default App;
