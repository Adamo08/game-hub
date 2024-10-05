import { FaWindows, FaPlaystation, FaLinux, FaXbox, FaAndroid, FaApple } from 'react-icons/fa'
import { IoIosArrowBack } from 'react-icons/io'
import { MdPhoneIphone } from 'react-icons/md'
import { SiNintendo } from 'react-icons/si'
import { BsGlobe } from 'react-icons/bs'
import { AiOutlineArrowRight, AiOutlineArrowLeft, AiOutlineMail } from 'react-icons/ai'

import { Platform } from '../hooks/useGames';
import { HStack, Icon, Text } from '@chakra-ui/react';
import { IconType } from 'react-icons'

interface Props {
    platforms: Platform[];
}

const PlatformIconList = ({ platforms }: Props) => {

    const iconMap: {[key: string] : IconType} = {
        pc: FaWindows,
        playstation: FaPlaystation,
        nintendo: SiNintendo,
        xbox: FaXbox,
        android: FaAndroid,
        ios: MdPhoneIphone,
        linux: FaLinux,
        mac: FaApple,
        web: BsGlobe
    }

    return (
        <HStack spacing={2} marginY={1}>
            {platforms.map((platform) => (
                <Icon 
                    key={platform.id} 
                    as={iconMap[platform.slug]} 
                    color='gray.500'
                />
            )
            
            )}
        </HStack>
    )
}

export default PlatformIconList