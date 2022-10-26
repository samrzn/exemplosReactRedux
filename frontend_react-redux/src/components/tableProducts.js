function tableProducts(props) {
    return (
        <div className="product">
            <div className="desc_prod">
            <img src={props.img} />
            <br />{props.descricao}
            </div>
            <hr />
            <span className="preco"><del>{props.valor}</del></span><br />
            <span className="desconto">{props.desconto}</span><br />
        </div>
    );
}

export default tableProducts;