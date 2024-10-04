import React, { useEffect, useState } from 'react'
import { SimpleGrid, Text } from '@chakra-ui/react';
import useGames from '../hooks/useGames';
import GameCard from './GameCard';




const GameGrid = () => {

    const { games, error } = useGames();

    return (

        <>
            {error && <Text>{error}</Text>}

            {/* Game Cards  */}
            <SimpleGrid columns={{ sm: 1, md: 2, xl: 3 }} padding={'10px'} spacing={10}>
                {games.map(game => <GameCard key={game.id} game={game}/>)}
            </SimpleGrid>

        </>

    )
}

export default GameGrid