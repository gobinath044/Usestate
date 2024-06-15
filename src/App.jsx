import React from "react";
import Button from "./components/Button";
import Select from "./components/Select";
import Input from './components/Input';
import Variable from "./components/Variable";
import Input2 from './components/Input2';
import UseState from './components/UseState';
import Firststate  from "./components/Firststate";
import SecondState from "./components/Secondstate";

const App=()=> {
  const color='blue';
  return <div>welcome
    
  
    <Firststate/>

  </div>
}

export default App;
/*
<Button></Button>
    <Select></Select>
    <Input></Input>
    <Variable/>
    <Input2 color={color}/>
    <Input2 type="text"/>
    <Input2 type="tel"/>
    <Input2 type="date"/>
    <Input2 type="number"/>
    <UseState/>
      <Firststate/>

  */