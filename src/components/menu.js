import '../App.css';

function Menu() {
    return (
        <nav className='menu'>
            <a href="index.html" title="Página principal"><img src="./public/imagens/dev.Point_Tech (logo).png" /></a>
            <a href="produtos.html" title="Catálogo de produtos">Produtos</a>
            <a href="loja.html" title="Nossas lojas">Lojas</a>
            <a href="contato.html" title="Informações de contato">Fale Conosco</a>
        </nav>
    );
}

export default Menu;