interface Window {
  ENV: Record<string, string>;
}

interface ShoppableProduct {
  productId: number;
  productName: string;
  startTime: number;
  endTime: number;
  publicId: string;
  onHover: OnHover;
  onClick: OnClick;
}
interface OnHover {
  action: string;
  args: string;
}
interface OnClick {
  action: string;
  args: Args;
}
interface Args {
  url: string;
}

interface ShoppableProductList {
  products: ShoppableProduct[];
}
