import { Image } from "react-native"
import { LogoContainer } from "./styles"

export const Logo = () => {
    return (
        <LogoContainer>
            <Image source={require('../../assets/Logo.png')} />
        </LogoContainer>
    )
}