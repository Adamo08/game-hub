import { Grid, GridItem, Show } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'



function App() {
  
  return (
    <Grid
      templateAreas={{
        base: `"nav" "main"`,
        lg: `"nav nav""aside main"` // >= 1024
      }}
      templateColumns={{
        base: '1fr',
        lg: '200px 1fr'
      }}
    >
      <GridItem area='nav'>
        <Navbar />
      </GridItem>
      <Show above='lg'>
        <GridItem  
          area='aside'
          paddingX={5}
        >
          <GenreList />
        </GridItem>
      </Show>
      <GridItem area='main'>
        <GameGrid />
      </GridItem>
    </Grid>
  )   
}

export default App
