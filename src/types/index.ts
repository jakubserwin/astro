export interface AstroIcon {
  name: string;
  pack?: string;
}

export interface Service {
  id: number;
  icon: AstroIcon;
  title: string;
  label: string;
}
