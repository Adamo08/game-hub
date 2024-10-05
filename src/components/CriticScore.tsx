import { Badge } from '@chakra-ui/react';
import React from 'react'

interface Props{
    score : number;
}

const CriticScore = ({ score }: Props) => {

    const color = score > 75 ? 'green' : score > 60 ? 'yellow' : score > 30 ? 'orange' : 'red'

    return (
        <Badge 
            size='14px' 
            px={2} 
            borderRadius={'4px'}
            colorScheme={color}
        >{score}</Badge>
    )
}

export default CriticScore