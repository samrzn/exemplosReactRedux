import { useSelector } from 'react-redux';
import TableProducts from './tableProducts'

function ListProducts() {
    let itensInfo = [];

    useSelector((ponto) => {
        itensInfo = ponto.produtos.map(
            (produto, index) =>
                <TableProducts key={index}
                    img={produto.img}
                    descricao={produto.descricao}
                    valor={produto.valor}
                    desconto={produto.desconto} />
        );
    });

    return (
        <section className="sale">
            {itensInfo}
        </section>
    );
}

export default ListProducts;
