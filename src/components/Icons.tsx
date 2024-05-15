import { useTheme } from "@/components/theme-provider";

export const LogoNameWhite = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/logo-white.svg" alt="Entregação" className={props.className} />
  )
};

export const LogoNameBlack = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/logo-black.svg" alt="Entregação" className={props.className} />
  )
};

export const LogoIconWhite = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/symbol-white.svg" className={props.className} />
  )
};

export const LogoIconBlack = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/symbol-black.svg" className={props.className} />
  );
};

export const ResponsiveName = (props: { className?: string }) => {
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <img src="./src/assets/images/logo-white.svg" className={props.className} />
    );
  } else {
    return (
      <img src="./src/assets/images/logo-black.svg" className={props.className} />
    );
  }
}