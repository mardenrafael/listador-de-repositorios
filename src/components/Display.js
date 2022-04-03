import styled from 'styled-components';
import SearchIcon from '../img/Search-icon.svg';
import { useState } from 'react';
import {Octokit}  from '@octokit/core';


const DisplayBody = styled.div`
    width: 70%;
    height: 380px;

    
    margin: auto;
    margin-top: 50px;

    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);
    border-radius: 30px;

    padding: 30px;
`;

const InputDiv = styled.div`
    width: 30%;
    height: 10%;

    display: flex;

    align-items: center;

    background-color: #f7f2ff;

    border-radius: 30px;

    box-shadow: 0 0 10px 10px rgba(0, 0, 0, 0.5);

    padding: 0px 30px 0 10px;
`;

const RepoInput = styled.input`
    font-weight: 400;
    font-size: large;
    color: #341269;

    background-color: #f7f2ff;

    border: none;

    width: 100%;
    height: 100%;

    padding: 0;

    margin-left: 2px;
    
    :focus {
        outline: none;
    }
`;

const SearchButton = styled.button`
    height: 90%;
    width: 70px;

    margin: 0;
    padding: 0;

    background-color: #f7f2ff;

   border: none;

   cursor: pointer;

    :active {
        border-style: none;
    }
    :focus-visible {
        outline: none;
    }
`;

const SearchIconImg = styled.img`
    height: 100%;
    width: 100%;
`;

const DisplayList = styled.div`
    
    border: 2px solid rgb(11, 2, 26);
    border-radius: 30px;

    padding: 30px;

    margin-top: 50px;
    
    width: 93.5%;
    height: 225px;

`;

const List = styled.ul`
    padding: 0;
    margin: 0;

    list-style: none;
`;

function Display() {

    const [inputValue, setInputValue] = useState("");
    const [elements, setElements] = useState([]);
    async function handleClick() {
        await fetchDataApi(inputValue).then((response) => { 
            fetchResponseHandle(response.data)
         });
    };

    function fetchResponseHandle(data) {
        let array = []
        for(let i = 0; i < data.length; i++) {
            array.push(data[i]);
         };
        setElements(array)
    };


    function handleChange(event) {
        setInputValue(event.target.value)
    };

    async function fetchDataApi(username) {
        const octokit = new Octokit();
        const resp = await octokit.request("GET /users/{username}/repos", {
            username: username
        })
        return resp;
    }

    return(
        <DisplayBody>
            <InputDiv>
                <SearchButton type='submit' onClick={handleClick}>
                    <SearchIconImg alt='Pesquisar' src={SearchIcon}></SearchIconImg>
                </SearchButton>
                <RepoInput placeholder='username' onChange={handleChange}></RepoInput>
            </InputDiv>
            
            <DisplayList>
                <List>
                    {elements.map((item) => {
                        
                        if (item.fork){
                            return <li key={item.id}>
                                 <a href={item.html_url}>
                                    {item.name}
                                </a> (fork)
                            </li>
                        } else {
                            return (
                            <li key={item.id}>
                                <a href={item.html_url}>
                                    {item.name}
                                </a>  
                            </li>)
                        }
 
                    })}
                </List>
            </DisplayList>
        </DisplayBody>
    );
}

export default Display;