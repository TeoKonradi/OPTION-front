export interface SideBarOption {
  link: string;
  number?: number;
  title: string;
}

export interface OptionsBarEl {
  link?: string;
  title: string;
  value: string;
}

export interface ItemI {
  id: number;
  name: string;
  price: string;
  priceSell: string;
  selected?: boolean | undefined;
  sizes: number[];
}
