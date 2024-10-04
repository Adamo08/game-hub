import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import GameGrid from './components/GameGrid'



function App() {
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"` // >= 1024
      }}
    >
      <GridItem pl='2' area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem pl='2' bg='pink.300' area='aside'>
          Aside
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  )   
}

export default App
