export type NavBarElement = {
  label: string;
  link?: string;
  disabled?: boolean;
};
export type NavBarElements = Array<NavBarElement>;
export type NavBarLogo = { logo?: string; link?: string; onClick?: () => void };
