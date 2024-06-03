import { create } from "zustand"

interface Product {
  id: number
  producent: string
  model: string
  totalValue: number
  pieceValue: number
  boughtValue: number
}

interface State {
  product: Product | null
  productList: Product[] | null
  increasePieceValue: () => void
  decreasePieceValue: () => void
  addProduct: (product: Product) => void
  removeProduct: (id: number) => void
  getProductById: (id: number) => Product | undefined
  setProduct: (product: Product | null) => void
}

export const useStoreProducts = create<State>((set, get) => ({
  product: null,
  productList: [
    {
      id: 1,
      producent: "Patek Philippe",
      model: "Nautilus",
      totalValue: 1000000,
      pieceValue: 100,
      boughtValue: 8024,
    },
  ],
  increasePieceValue: () =>
    set((state) => ({
      product: state.product
        ? { ...state.product, pieceValue: state.product.pieceValue + 1 }
        : null,
    })),
  decreasePieceValue: () =>
    set((state) => ({
      product: state.product
        ? { ...state.product, pieceValue: state.product.pieceValue - 1 }
        : null,
    })),
  addProduct: (product: Product) =>
    set((state) => ({
      productList: state.productList
        ? [...state.productList, product]
        : [product],
    })),
  removeProduct: (id: number) =>
    set((state) => ({
      productList: state.productList
        ? state.productList.filter((product) => product.id !== id)
        : null,
    })),
  getProductById: (id: number) => {
    const state = get()
    return state.productList
      ? state.productList.find((product) => product.id === id)
      : undefined
  },
  setProduct: (product: Product | null) => set({ product }),
}))
