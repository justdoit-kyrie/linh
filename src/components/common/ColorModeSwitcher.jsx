import React from 'react';
import { useColorModeValue, IconButton } from '@chakra-ui/react';
import { FaMoon, FaSun } from 'react-icons/fa';

export default function ColorModeSwitcher(props) {
  const text = useColorModeValue('dark', 'light');
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);


  return (
    <IconButton
      size="md"
      fontSize="lg"
      aria-label={`Switch to ${text} mode`}
      color="current"
      marginLeft="2"
      onClick={props.handlecolormode}
      icon={<SwitchIcon />}
    />
  );
};
