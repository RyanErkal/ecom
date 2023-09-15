import { create } from "zustand";
import { produce } from "immer";

interface StoreState {
	cart: any;
	product: any;
	openModal: boolean;
	setOpenModal: () => void;
	setProduct: (params: any) => void;
	addItemToCart: (params: any) => void;
	removeItemFromCart: (params: any) => void;
	emptyCart: () => void;
}

const useCart = create<StoreState>((set) => ({
	cart: [],
	product: {},
	openModal: false,
	setOpenModal: () => {
		set((state: any) => {
			return {
				...state,
				openModal: !state.openModal
			};
		});
	},
	setProduct: (params: any) => {
		const { newProduct } = params;
		set((state: any) => ({ ...state, product: newProduct }));
	},
	addItemToCart: (params: any) => {
		const { newItem } = params;
		set((state) => {
			const foundItem = state.cart.find(
				(cartItem: any) => cartItem.product.id === newItem.product.id
			);
			if (foundItem) {
				return {
					...state,
					cart: state.cart.map((item: any) =>
						item.product.id === newItem.product.id
							? {
									...item,
									quantity: item.quantity + newItem.quantity
							  }
							: item
					)
				};
			}
			return {
				...state,
				cart: [...state.cart, newItem]
			};
		});
	},
	incrementItemInCart: (params: any) => {
		const { itemIndex } = params;
		set((state: any) => {
			const newCart = state.cart.map(
				(element: any, elementIndex: any) => {
					if (elementIndex === itemIndex) {
						return {
							...element,
							quantity: element.quantity + 1
						};
					} else {
						return element;
					}
				}
			);
			return {
				...state,
				cart: newCart
			};
		});
	},
	removeItemFromCart: (params: any) => {
		const { itemIndex } = params;
		set((state: any) => {
			const newCart = state.cart.filter(
				(element: any, elementIndex: any) => {
					return elementIndex !== itemIndex;
				}
			);
			return {
				...state,
				cart: newCart
			};
		});
	},
	emptyCart: () => {
		set((state: any) => {
			const newCart: any = [];
			return {
				...state,
				cart: newCart
			};
		});
	}
}));

export default useCart;
