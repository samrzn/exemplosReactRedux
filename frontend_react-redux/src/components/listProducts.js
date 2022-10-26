import Products from "./products";
import { useSelector } from 'react-redux';

function ListProducts() {

    const itensList = useSelector(state => state.products.map(
        (product, index) =>
            <Products key={index}
                img={product.img}
                descricao={product.descricao}
                valor={product.valor}
                desconto={product.desconto} />
    )
);

    return (
        <section className="products">
            {itensList}
        </section>
    );

}

export default ListProducts;