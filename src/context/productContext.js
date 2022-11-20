import { createContext } from 'react';

const ProductContext = createContext({
    products: [],
    onDelete: () => {},
    onInCrement: () => {},
    onDeCrement: () => {},
    onRset: () => {},
});



export default ProductContext;