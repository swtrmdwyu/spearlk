import { useState } from "react";
import {  Avatar, Button, Note, SearchBar } from "./components";
import styled from "styled-components";
import Input from "./components/Input";

const StyledDiv = styled.div`

  background-color: whitesmoke;
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 1rem;
  gap: 1rem;
`;

function App() {
  const [ searchValue, setSearchValue ] = useState("");
  const [ inputValue, setValue ] = useState("");

  const handleChangeSearchBar = (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setSearchValue(value);
  }
  const handleInputChange= (event: React.ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;
    setValue(value);
  }

  return (
    <StyledDiv>
      <Avatar />
      <SearchBar
        theme="light"
        value={searchValue}
        handleSearch={() => {console.log(searchValue)}}
        onChange={handleChangeSearchBar}
      />
      <Input
        $bordered={false}
        type="password"
        placeholder="digite"
        onChange={handleInputChange}
        value={inputValue}
      ></Input>
      <Note 
        title="lorem ipsum"
        content="lorem ipsum dolor sit amet"
        date={new Date("2022-02-23")}
      />
      <Button
        onClick={() => console.log(inputValue)}
      ></Button>
    </StyledDiv>
    
  )
}

export default App;
