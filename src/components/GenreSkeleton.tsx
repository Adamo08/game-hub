import { HStack, Skeleton, SkeletonText } from '@chakra-ui/react';

const GenreSkeleton = () => {
    return (
        <HStack paddingY="5px">
            {/* Skeleton for image with height and width */}
            <Skeleton height="40px" width="40px" borderRadius={8} />

            {/* Skeleton for text */}
            <SkeletonText noOfLines={1} width="100px" />
        </HStack>
    );
};

export default GenreSkeleton;
