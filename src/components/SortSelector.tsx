import { Button, Menu, MenuButton, MenuItem, MenuList } from '@chakra-ui/react'
import { BsChevronDown } from 'react-icons/bs'



interface Props{
    sortOrder: string;
    onSelectSortOrder: (sortOrder: string) => void
}


const SortSelector = ({ onSelectSortOrder, sortOrder }: Props) => {

    const sortOrders = [
        {
            value: '',
            label: 'Relevence'
        },
        {
            value: '-added',
            label: 'Date added'
        },
        {
            value: 'name',
            label: 'Name'
        },
        {
            value: '-released',
            label: 'Released date'
        },
        {
            value: '-metacritic',
            label: 'Popilarity'
        },
        {
            value: '-rating',
            label: 'Average rating'
        },
    ]

    const currentSortOrder = sortOrders.find(order => order.value === sortOrder)?.label || 'Relevence'


    return (
        <Menu>
            <MenuButton as={Button} rightIcon={<BsChevronDown />}>
                Order by : {currentSortOrder}
            </MenuButton>
            <MenuList>
                {
                    sortOrders.map(
                        (order,index) => (
                            <MenuItem 
                                key={index}
                                value={order.value}
                                onClick={() => onSelectSortOrder(order.value)}
                            >
                                {order.label}
                            </MenuItem>
                        )
                    )
                }
            </MenuList>
        </Menu>
    )
}

export default SortSelector