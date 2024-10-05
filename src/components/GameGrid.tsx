import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';




const GameGrid = () => {

    const { data, error, isLoading } = useGames();
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
                spacing={3}
            >
                {/* GameCard Skeletons  */}
                {isLoading && skeletons.map((_, index) => 
                    (
                        <GameCardContainer><GameCardSkeleton key={index}/></GameCardContainer>
                    )
                )}

                {/* GameCards  */}
                {data.map(game => 
                    (
                        <GameCardContainer><GameCard key={game.id} game={game}/></GameCardContainer>
                    )
                )}
            </SimpleGrid>

        </>

    )
}

export default GameGrid