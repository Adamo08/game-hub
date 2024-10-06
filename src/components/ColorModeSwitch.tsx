import { HStack, IconButton, Text, useColorMode } from '@chakra-ui/react';
import { SunIcon, MoonIcon } from '@chakra-ui/icons';


const ColorModeSwitch = () => {
    const { toggleColorMode, colorMode } = useColorMode();

    return (
            <IconButton
                aria-label="Toggle color mode"
                icon={colorMode === 'dark' ? <MoonIcon /> : <SunIcon />}
                onClick={toggleColorMode}
                // variant="outline"
                colorScheme={colorMode === 'dark' ? 'gray' : 'yellow'}
                borderRadius="50%"
            />
    );
};

export default ColorModeSwitch;
