function Categories() {

    let allCategories = [
        { nome: "Acessórios", quantidade: 2 },
        { nome: "Placas de Vídeo", quantidade: 3 },
        { nome: "Armazenamento", quantidade: 2 },
        { nome: "Processadores", quantidade: 4 },
        { nome: "Memórias", quantidade: 2 },
        { nome: "Telas", quantidade: 1 },
        { nome: "Outros", quantidade: 2 }
    ]

    let listCategories = allCategories.map(
        (category, index) => <li key={index}>{category.nome} ({category.quantidade})</li>
    );

    return (
        <section className="categoria">
            <h3>Categorias</h3>
            <ul>{listCategories}</ul>
        </section>
    );

}

export default Categories;