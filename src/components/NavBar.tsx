
import { HStack, Image, Text } from "@chakra-ui/react"
import logo from '../assets/logo.webp'
import SearchInput from "./SearchInput"

import ColorModeSwitch from "./ColorModeSwitch"


interface Props {
    onSearch: (searchText: string) => void;
}



const Navbar = ({ onSearch }: Props) => {
    return (
        <HStack padding='10px'>
            <HStack>
                <Image src={logo} boxSize='60px'/>
                <Text fontSize='lg' fontWeight='bold' whiteSpace='nowrap'>G-H</Text>
            </HStack>
            <SearchInput onSearch={onSearch}/>
            <ColorModeSwitch/>
        </HStack>
    )
}

export default Navbar