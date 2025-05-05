export interface ProductType {
    id: number;
    name: string;
    is_liked: boolean;
    category_id: string;
    description: string;
    nasiya: string;
    summary: string;
    price: number;
    rating: number;
    is_aksiya: boolean;
    brand_id: string;
    image: string;
    createdAt: string;
    updatedAt: string;
    comments: any[];
    like: any[];
    category: {
      id: number;
      name: string;
      image: string;
      icon: string;
      parentCategoryId: number | null;
      createdAt: string;
      updatedAt: string;
    };
    product_item: {
      id: number;
      price: string;
      image: string;
      product_id: string;
      color_id: string;
      createdAt: string;
      updatedAt: string;
      configurations: {
        id: number;
        product_item_id: string;
        variation_option_id: string;
        createdAt: string;
        updatedAt: string;
        variationOption: {
          id: number;
          variation_id: string;
          value: string;
          createdAt: string;
          updatedAt: string;
        };
      }[];
    }[];
  }