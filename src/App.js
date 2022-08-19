import { Container, ContainerItems, InputRam, Button, Label } from './styles'
import api from './api'
import { useState, useEffect, useRef } from 'react'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';




function App() {

  //Select genero

  const ITEM_HEIGHT = 48;
  const ITEM_PADDING_TOP = 8;
  const MenuProps = {
    PaperProps: {
      style: {
        maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
        width: 250,
      },
    },
  };

  const genre = [
    'mmorpg', 'shooter', 'strategy', 'moba', 'racing', 'sports', 'social', 'sandbox', 'open-world', 'survival', 'pvp', 'pve', 'pixel',
    'voxel', 'zombie', 'turn-based', 'first-person', 'third-Person', 'top-down', 'tank', 'space', 'sailing', 'side-scroller', 'superhero',
    'permadeath', 'card', 'battle-royale', 'mmo', 'mmofps', 'mmotps', '3d', '2d', 'anime', 'fantasy', 'sci - fi', 'fighting',
    'action - rpg', 'action', 'military', 'martial - arts', 'flight', 'low - spec', 'tower - defense', 'horror', 'mmorts'
  ]


  function getStyles(name, generName, theme) {
    return {
      fontWeight:
      generName.indexOf(name) === -1
          ? theme.typography.fontWeightRegular
          : theme.typography.fontWeightMedium,
    };
  }


  const theme = useTheme();
  const [genreName, setGenreName] = React.useState([]);

  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,  
    ) 
    
  
    // useEffect(() => {

    // }, []);
   

    //array vazio????

   
    
  }


//teste get api 

  const [games, setGames] = useState([])

  useEffect(() => {
    api
      .get('/game?id=452')
      .then((response) => setGames(response.data))
      .catch((err) => {
        console.error("ops! ocorreu um erro" + err);
      });
  }, []);

  //select opção pc ou navegador

  const [option, setOption] = React.useState('');

  function changePcOrBrowser (event) {
    setOption(event.target.value);
    console.log(setOption)
  };

  // pegar os dados do input 

const inputGB = useRef()
console.log(inputGB.current.valueAsNumber)


//botao de busca 



// const [search, setSearch] = useState()
// function resultSearch(){
//   setSearch()
// }

// regras: o sistema deve retornar apenas 1 resultado, filtrar os generos escolhidos, pc ou browser e GB > ou =


return (

      <Container>
        <ContainerItems>
          <h1>Descubra seu próximo jogo</h1>
          <Label>Escolha quantos gêneros desejar:</Label>

          <FormControl sx={{ m: 1, width: 342 }} >
            <InputLabel id="demo-multiple-chip-label">Escolha o Gênero:</InputLabel>
            <Select
              labelId="demo-multiple-chip-label"
              id="demo-multiple-chip"
              multiple
              value={genreName}
              onChange={handleChange}
              input={<OutlinedInput id="select-multiple-chip" label="Chip" />}
              renderValue={(selected) => (
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selected.map((value) => (
                    <Chip key={value} label={value} />
                  ))}
                </Box>
              )}
              MenuProps={MenuProps}
            >
              {genre.map((name) => (
                <MenuItem
                  key={name}
                  value={name}
                  style={getStyles(name, genreName, theme)}
                >
                  {name}
                </MenuItem>
              ))}
            </Select>
          </FormControl>

  {/* ACEITAR APENAS NUMEROS INTEIROS */}

          <Label>Quantos GB de memória ram você tem?</Label>
          <InputRam ref={inputGB} placeholder='Apenas o número. Ex: 4' type='number' ></InputRam>

          <Label>Deseja jogar no PC ou Navegador?</Label>
          <Box sx={{ minWidth: 342 }}>
      <FormControl fullWidth>
        <InputLabel id="demo-simple-select-label">Opcional</InputLabel>
        <Select
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={option}
          label="option"
          onChange={changePcOrBrowser}
        >
          <MenuItem value={10}>PC</MenuItem>
          <MenuItem value={20}>Browser</MenuItem>
          <MenuItem value={30}>Tanto Faz</MenuItem>
        </Select>
      </FormControl>
    </Box>
  

          
          <Button>Buscar</Button>


          <p> Nome: {games?.title}</p>
          <p> Link: {games?.game_url}</p>
          <p> busca: {}</p>
          <Button onClick={() => window.location.reload()}>Nova Pesquisa</Button>
        </ContainerItems>
      </Container>
  )}



export default App





