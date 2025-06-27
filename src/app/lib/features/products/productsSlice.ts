import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface Product {
  _id: string
  name: string
  image: string
  price: number
  rating: number
  numReviews: number
  brand: string
  category: string
  description: string
}

interface ProductsState {
  products: Product[]
  loading: boolean
  error: string | null
}

const initialState: ProductsState = {
  products: [],
  loading: false,
  error: null,
}

export const productsSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    setProducts: (state, action: PayloadAction<Product[]>) => {
      state.products = action.payload
      state.loading = false
    },
    setLoading: (state, action: PayloadAction<boolean>) => {
      state.loading = action.payload
    },
    addToCart: (state, action: PayloadAction<string>) => {
      console.log('Added to cart:', action.payload)
    },
  },
})

export const { setProducts, setLoading, addToCart } = productsSlice.actions
export default productsSlice.reducer
