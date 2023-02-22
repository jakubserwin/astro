export interface AstroIcon {
  pack?: string;
  name: string;
}

export interface Service {
  id: number;
  icon: AstroIcon;
  title: string,
  label: string,
}
