export type Cupcakes = {
  id: number;
  accessory_id: string;
  accessory: string;
  color1: string;
  color2: string;
  color3: string;
  name: string;
};
type CupcakeArray = Cupcake[];

export interface AccessCupcake {
  id: number;
  name: string;
  slug: string;
}
