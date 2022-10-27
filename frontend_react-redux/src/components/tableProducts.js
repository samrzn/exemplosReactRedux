function TableProducts(props) {
    return (
        <div className="product">
            <img src={props.img} alt='' />
            <br />{props.descricao}
            <hr />
            <span className="preco"><del>{props.valor}</del></span><br />
            <span className="desconto">{props.desconto}</span><br />
        </div>
    );
}

export default TableProducts;