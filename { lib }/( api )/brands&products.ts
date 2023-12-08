import { api, useMutation, useQuery } from '.';

// Brand Interfaces

export interface BrandCreationRequest {
  name: string;
  tag: string;
  picture: string;
}

export interface Brand {
  ID: number;
  name: string;
  tag: string;
  picture: string;
}

export interface BrandListResponse {
  items: Brand[];
  total: number;
}

// Product Interfaces

export interface ProductSize {
  size: string;
  available_now: number | string;
}

export interface ProductCreationRequest {
  header: string;
  product_tag: string;
  short_description: string;
  description: string;
  price: number | string;
  picture: string[];
  brand: number[] | string[];
  show_in_market: boolean;
  available: boolean;
  size: ProductSize[];
}

export interface Product {
  ID: number;
  header: string;
  product_tag: string;
  short_description: string;
  description: string;
  price: number;
  picture: string[];
  brand: Brand[];
  size: ProductSize[];
  show_in_market: boolean;
  available: boolean;
}

export interface ProductListResponse {
  items: Product[];
  total: number;
}

// Brand requests

// POST /admin/brand/reg
export const useCreateBrand = () => {
  return useMutation({
    mutationFn: (json: BrandCreationRequest) => {
      return api.post(`admin/brand/reg`, { json });
    },
    mutationKey: ['brand', 'create'],
  });
};

// POST /admin/brand/{id}/del
export const useDeleteBrand = () => {
  return useMutation({
    mutationFn: (brandId: string | number) => {
      // Add brandId as parameter
      return api.post(`admin/brand/${brandId}/del`);
    },
    mutationKey: ['brand', 'delete'],
  });
};

// GET /admin/brand/{id}
export const useCurrentBrand = (brandId: string | number) => {
  return useQuery<Brand>({
    queryFn: () => {
      return api.get(`admin/brand/${brandId}`).json();
    },
    queryKey: ['brand', brandId.toString()],
  });
};

// GET /admin/brand/
export const useBrands = () => {
  return useQuery<BrandListResponse>({
    queryFn: () => {
      return api.get('admin/brand/').json();
    },
    queryKey: ['brands'],
  });
};

// Product requests

// POST /admin/product/reg
export const useCreateProduct = () => {
  return useMutation({
    mutationFn: (json: ProductCreationRequest) => {
      return api.post(`admin/product/reg`, { json });
    },
    mutationKey: ['product', 'create'],
  });
};

// POST /admin/product/{id}/del
export const useDeleteProduct = () => {
  return useMutation({
    mutationFn: (productId: string | number) => {
      return api.post(`admin/product/${productId}/del`);
    },
    mutationKey: ['product', 'delete'],
  });
};

// GET /admin/product/{id}
export const useCurrentProduct = (productId: string | number) => {
  return useQuery<Product>({
    queryFn: () => {
      return api.get(`admin/product/${productId}`).json();
    },
    queryKey: ['product', productId.toString()],
  });
};

// GET /admin/product/
export const useProducts = () => {
  return useQuery<ProductListResponse>({
    queryFn: () => {
      return api.get('admin/product/').json();
    },
    queryKey: ['products'],
  });
};
