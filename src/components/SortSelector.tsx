import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'

const SortSelector = () => {
    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by: Relevence
            </MenuButton>
            <MenuList>
                <MenuItem>Relevence</MenuItem>
                <MenuItem>Date ddded</MenuItem>
                <MenuItem>Name</MenuItem>
                <MenuItem>Released date</MenuItem>
                <MenuItem>Popilarity</MenuItem>
                <MenuItem>Average rating</MenuItem>
            </MenuList>
        </Menu>
    )
}

export default SortSelector