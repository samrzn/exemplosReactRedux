function categories() {
    let category = [
        { nome: "Acessórios", quantidade: 2 },
        { nome: "Placas de Vídeo", quantidade: 3 },
        { nome: "Armazenamento", quantidade: 2 },
        { nome: "Processadores", quantidade: 4 },
        { nome: "Memórias", quantidade: 2 },
        { nome: "Telas", quantidade: 1 },
        { nome: "Outros", quantidade: 2 }
    ];

    let categoriesList = category.map(
        (categoria, index) =>
            <li key={index}>{categoria.nome} ({categoria.quantidade})</li>
    );

    return (
        <section className="categoria">
            <h3>Categorias</h3>
            <ul>{categoriesList}</ul>
        </section>
    );

}

export default categories;