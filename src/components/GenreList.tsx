import { HStack, Image, List, ListItem, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';


const GenreList = () => {

    const { data, error, isLoading } = useGenres();

    return (
        <List>
            {data.map((genre) => 
                (
                    <ListItem 
                        key={genre.id}
                        paddingY='5px'
                    >
                        <HStack>
                            <Image
                                boxSize='40px'
                                borderRadius={8}
                                src={getCroppedImageUrl(genre.image_background)}
                            />
                            <Text fontSize='large'>{genre.name}</Text>
                        </HStack>
                    </ListItem>
                )
            )}

        </List>
    )
}

export default GenreList