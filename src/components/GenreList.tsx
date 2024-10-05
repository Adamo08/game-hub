import { HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';


const GenreList = () => {

    const { data, error, isLoading } = useGenres();
    const skeletons = Array.from({ length: 19 }, (v, i) => i + 1);

    if (error) return null;
    return (
        <>
            <List>
                {/* Genre Skeletons on loading state */}
                {isLoading && skeletons.map((_, index) => <GenreSkeleton key={index}/>)}

                {/* Displaying genres  */}
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
        </>
    )
}

export default GenreList