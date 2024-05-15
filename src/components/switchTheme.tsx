import { Switch } from "./ui/switch"
import { useTheme } from "@/components/theme-provider";
import { Moon, Sun } from "lucide-react"


const SwitchTheme = (props: {className?:string}) => {
  const { theme, setTheme } = useTheme();
  
  return (
    <div className={props.className}>
      <Sun className="h-[1.1rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
      <Switch
        defaultChecked={(window.matchMedia("(prefers-color-scheme: dark)").matches)}
        onCheckedChange={(checked) => {
          if (checked) setTheme("dark")
          if (!checked) setTheme("light")
        }} />
      <Moon className=" h-[1.1rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
    </div>
  )
}

export { SwitchTheme }
