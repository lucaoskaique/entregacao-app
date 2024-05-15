import { Switch } from "./ui/switch"
import { Moon, Sun } from "lucide-react"


const SwitchTheme = () => {
  return(
    <>
      <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch />
      <Moon className="absolute h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </>
  )
}

export { SwitchTheme }
