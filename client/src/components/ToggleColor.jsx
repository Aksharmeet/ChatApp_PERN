import { Button, useColorMode } from '@chakra-ui/react'
import { MoonIcon, SunIcon } from '@chakra-ui/icons'

function ToggleColor() {
	const { colorMode, toggleColorMode } = useColorMode()

	return (
		<Button
			onClick={() => toggleColorMode()}
			pos='absolute'
			top='0'
			right='0'
			m='1rem'
			borderRadius='10px'
			overflow={'hidden'}
			backgroundColor={colorMode === 'dark' ? 'blackAlpha.100' : 'blue.100'}
		>
			{colorMode === 'dark' ? <SunIcon color='orange.400' /> : <MoonIcon color='blue.700' />}
		</Button>
	)
}

export default ToggleColor
