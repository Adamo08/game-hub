import { Heading } from "@chakra-ui/react"
import { GameQuery } from "../App"


interface Props{
    gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {

    // Games
    // Action Games 
    // Xbox Games
    // XBox Action Games

    const heading = `${gameQuery.platform?.name || ''} ${gameQuery.genre?.name || ''} Games`

    return (
        <Heading 
            as='h1'
            size='lg'
            marginY={5}
        >
            {heading}
        </Heading>
    )
}

export default GameHeading