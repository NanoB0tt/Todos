import { Button, useColorMode, useColorModeValue } from "@chakra-ui/react";
import { BsFillMoonFill, BsFillSunFill } from "react-icons/bs";


const ThemeSwitcher = () => {

  const { colorMode, toggleColorMode } = useColorMode();
  const SwitchIcon = useColorModeValue(BsFillSunFill, BsFillMoonFill)

  return (
    <Button
      onClick={toggleColorMode}
      leftIcon={<SwitchIcon />}
    >
      Theme {colorMode === 'light' ? 'Light' : 'Dark'}
    </Button>
  )

}


export default ThemeSwitcher;
