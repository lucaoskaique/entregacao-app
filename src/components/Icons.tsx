import { useTheme } from "@/components/theme-provider";

export const LogoLight = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-light.svg" alt="Entregação" className={props.className} />
  )
};

export const LogoDark = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-dark.svg" alt="Entregação" className={props.className} />
  )
};

export const LogoIconLight = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-icon-light.svg" className={props.className} />
  )
};

export const LogoIconDark = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-icon-dark.svg" className={props.className} />
  );
};

export const LogoIconGreen = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-icon-green.svg" className={props.className} />
  );
};

export const LogoNameLight = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-name-light.svg" className={props.className} />
  );
};

export const LogoNameDark = (props: { className?: string }) => {
  return (
    <img src="./src/assets/images/brand/logo-name-dark.svg" className={props.className} />
  );
};

export const ResponsiveLogoName = (props: { className?: string }) => {
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <img src="./src/assets/images/brand/logo-name-light.svg" className={props.className} />
    );
  } else {
    return (
      <img src="./src/assets/images/brand/logo-name-dark.svg" className={props.className} />
    );
  }
}

export const ResponsiveLogoIcon = (props: { className?: string }) => {
  const { theme } = useTheme();

  if (theme === "dark") {
    return (
      <img src="./src/assets/images/brand/logo-icon-light.svg" className={props.className} />
    );
  } else {
    return (
      <img src="./src/assets/images/brand/logo-icon-dark.svg" className={props.className} />
    );
  }
}