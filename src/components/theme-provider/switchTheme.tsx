import { Switch } from "@/components/ui/switch"
import { useTheme } from "@/components/theme-provider/theme-provider";
import { Moon, Sun } from "lucide-react"

const SwitchTheme = (props: {className?:string}) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={props.className}>
      <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        defaultChecked={theme === "dark" ? true : false}
        onCheckedChange={(checked) => {
          if (checked) setTheme("dark")
          if (!checked) setTheme("light")
        }} />
      <Moon className=" h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}

export default SwitchTheme
