import { Box, Flex, Grid, GridItem, Show, useColorModeValue  } from '@chakra-ui/react'
import Navbar from './components/NavBar'
import GameGrid from './components/GameGrid'
import GenreList from './components/GenreList'
import { useState } from 'react'
import { Genre } from './hooks/useGenres'
import PlatformSelector from './components/PlatformSelector'
import { Platform } from './hooks/usePlatforms'
import SortSelector from './components/SortSelector'



export interface GameQuery {
  genre: Genre | null;
  platform: Platform | null;
  sortOrder: string;
}


function App() {

  const [gameQuery, setGameQuery] = useState<GameQuery>({} as GameQuery);

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
      <GridItem 
        area='nav'
        position='sticky'
        top={0}
        zIndex={1}
        backgroundColor={useColorModeValue('white', 'gray.800')} 
        boxShadow='md'
      >
        <Navbar />
      </GridItem>

      <Show above='lg'>
        <GridItem  
          area='aside'
          paddingX={5}
          paddingTop={5}
        >
          <GenreList 
            selectedGenre={gameQuery.genre} 
            onSelectGenre={genre => setGameQuery({...gameQuery, genre})}
          />
        </GridItem>
      </Show>
      <GridItem area='main' paddingTop={5}>
        <Flex paddingLeft={2} marginBottom={5}>
          <PlatformSelector
              selectedPlatform={gameQuery.platform}
              onSelectPlatform={platform => setGameQuery({...gameQuery, platform})}
          />
          <Box marginLeft={5}>
            <SortSelector 
              sortOrder = {gameQuery.sortOrder}
              onSelectSortOrder={sortOrder => setGameQuery({ ...gameQuery, sortOrder })}
            />
          </Box>
        </Flex>
        <GameGrid 
          gameQuery={gameQuery}
        />
      </GridItem>
    </Grid>
  )   
}

export default App
