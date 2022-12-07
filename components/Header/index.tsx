import { Stack } from "@mui/material"
import { ReactNode } from "react"
import Logo from "./Logo"
import NavigationBar from "./NavigationBar"

type Props = {
  children?: ReactNode
}

const Header = ({ children }: Props): JSX.Element => {
  return (
    <header>
      <Stack direction='row' justifyContent={'space-between'}>
        <Logo />
        <NavigationBar />
      </Stack>
    </header>
  )
}

export default Header