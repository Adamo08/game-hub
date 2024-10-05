import { Button, HStack, Image, List, ListItem, Spinner, Text } from '@chakra-ui/react';
import useGenres, { Genre } from '../hooks/useGenres';
import getCroppedImageUrl from '../services/image-url';
import GenreSkeleton from './GenreSkeleton';

interface Props{
    onSelectGenre: (genre: Genre) => void; // To notify the parent or the consumer of this component that a genre has been delected
}

const GenreList = ({onSelectGenre}: Props) => {

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
                                <Button 
                                    fontSize='large' 
                                    variant='link'
                                    onClick={() => onSelectGenre(genre)}
                                >{genre.name}</Button>
                            </HStack>
                        </ListItem>
                    )
                )}

            </List>
        </>
    )
}

export default GenreList