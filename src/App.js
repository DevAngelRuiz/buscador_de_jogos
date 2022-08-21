import { Container, ContainerItems, InputRam, Button, Label, Result } from './styles'
import { useState } from 'react'
import * as React from 'react';
import { useTheme } from '@mui/material/styles';
import Box from '@mui/material/Box';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Chip from '@mui/material/Chip';
import axios from 'axios'




function App() {

  //Select genero
  const [games, setGames] = useState([])
  const [genreName, setGenreName] = React.useState([]);
  const [option, setOption] = React.useState('');
  const [gb, setGb] = useState()

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


  const handleChange = (event) => {
    const {
      target: { value },
    } = event;
    setGenreName(
      // On autofill we get a stringified value.

      typeof value === 'string' ? value.split(',') : value,

    )
  }


  //teste get api 
  const category = genreName.join('.')
  function selectGame() {
    var parametros = null;
    if (category === "") {
      alert("😰 Algo deu errado, prencha os campos e tente novamente");
      return;
    }

    if (option !== "") { //se tiver valor
      parametros = { tag: category, platform: option };
    }
    else {
      parametros = { tag: category };
    }
    const options = {
      method: 'GET',
      url: 'https://www.freetogame.com/api/filter',
      params: parametros,
    };

    axios.request(options).then(function (response) {

      const jogos = Object.values(response.data)
      const jogoRandom = jogos[Math.floor(Math.random() * jogos.length)];
      console.log(jogoRandom);
      setGames(jogoRandom)
    }).catch(function (error) {
      console.error(error);
    });

  }

  //select opção pc ou navegador


  function changePcOrBrowser(event) {
    setOption(event.target.value);

  };
  // pegar os dados do input 


  function onChange(ev) {
    setGb(ev.target.value)
  }



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



        <Label>Quantos GB de memória ram você tem?</Label>
        <InputRam placeholder='Apenas o número. Ex: 4' type='number' onChange={onChange}></InputRam>




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
              <MenuItem value={'pc'}>PC</MenuItem>
              <MenuItem value={'browser'}>Browser</MenuItem>
            </Select>
          </FormControl>
        </Box>



        <Button onClick={selectGame} >Buscar</Button>

        <Result>
          <p>  {games?.title}</p>
          <img alt='imagem-game' src={`https://www.freetogame.com/g/${games.id}/thumbnail.jpg`} />
          <p>  {games?.game_url}</p>
        </Result>
        <Button onClick={() => window.location.reload()}>Nova Pesquisa</Button>
      </ContainerItems>
    </Container>
  )
}



export default App





