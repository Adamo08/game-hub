import { Input, InputGroup, InputLeftElement } from '@chakra-ui/react'
import React, { useRef } from 'react'
import { BsSearch } from 'react-icons/bs'


interface Props {
    onSearch: (searchText: string) => void;
}


const SearchInput = ({ onSearch }: Props) => {

    const ref = useRef<HTMLInputElement>(null);

    return (
        <form
            onSubmit={
                (e) => {
                    e.preventDefault();
                    if (ref.current) {
                        const value = ref.current.value.trim();
                        onSearch(value);
                    }
                }
            }
        >
            <InputGroup marginLeft={10}>
                <InputLeftElement children={<BsSearch />} />
                <Input
                    borderRadius={20}
                    placeholder="Search games ..."
                    variant="filled"
                    ref={ref}
                />
            </InputGroup>
        </form>
    );
}

export default SearchInput