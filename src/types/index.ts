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

export interface StaticPath {
  params: {
    [key in string]: string
  };
}
