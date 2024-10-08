import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';
import GameCardSkeleton from './GameCardSkeleton';
import GameCardContainer from './GameCardContainer';
import { GameQuery } from '../App';


interface Props{
    gameQuery: GameQuery;
}


const GameGrid = ({ gameQuery } : Props) => {

    const { data, error, isLoading } = useGames(gameQuery);
    const skeletons = [1,2,3,4,5,6,7,8];


    if (error) return <Text>{error}</Text>

    return (
        <>
            {/* Game Cards  */}
            <SimpleGrid 
                columns={{ 
                    sm: 1, 
                    md: 2, 
                    lg: 3,
                    xl: 4 
                }} 
                padding={'10px'} 
                spacing={6}
            >
                {/* GameCard Skeletons  */}
                {isLoading && skeletons.map((_, index) => 
                    (
                        <GameCardContainer key={index}>
                            <GameCardSkeleton/>
                        </GameCardContainer>
                    )
                )}

                {/* GameCards  */}
                {data.map(game => 
                    (
                        <GameCardContainer key={game.id}>
                            <GameCard game={game}/>
                        </GameCardContainer>
                    )
                )}
            </SimpleGrid>
        </>

    )
}

export default GameGrid