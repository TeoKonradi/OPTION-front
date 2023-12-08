export interface SideBarOption {
  title: string;
  link: string;
  number?: number;
}

export interface OptionsBarEl {
  title: string;
  value: string;
  link?: string;
}

export interface ItemI {
  id: number;
  name: string;
  price: string;
  priceSell: string;
  sizes: number[];
  selected?: boolean | undefined;
}
