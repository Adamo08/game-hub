import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';




const GameGrid = () => {

    const { games, error, isLoading } = useGames();
    const skeletons = [1,2,3,4,5,6,7,8];



    return (

        <>



            {error && <Text>{error}</Text>}

            {/* Game Cards  */}
            <SimpleGrid 
                columns={{ 
                    sm: 1, 
                    md: 2, 
                    xl: 3 
                }} 
                padding={'10px'} 
                spacing={10}
            >
                {isLoading && skeletons.map((_, index) => <GameCardSkeleton key={index} />)}
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>

        </>

    )
}

export default GameGrid