// Array de objetos representando os itens do cardápio

const menuItems = [
    {
        id: 1,
        nome: "Frango Frito",
        descricao: "Uma deliciosa porção de frango.",
        preco: 13.70,
        imagemUrl: "tamanho-padrao.jpg" // URL relativa ou absoluta da imagem
    },
    {
        id: 2,
        nome: "Batata Frita",
        descricao: "Porção deliciosa de batatas fritas.",
        preco: 10.50,
        imagemUrl: "Batata-frita.jpg" // URL relativa ou absoluta da imagem
    },
    {
        id: 3,
        nome: "Churrasco",
        descricao: "Um delicioso churrasco.",
        preco: 12.00,
        imagemUrl: "agro_churrasco.jpg" // URL relativa ou absoluta da imagem
    },
    {
        id: 4,
        nome: "Prato Feito",
        descricao: "Um prato feito delicioso.",
        preco: 16.90,
        imagemUrl: "prato feitissimo.jpg" // URL relativa ou absoluta da imagem
    }
    // Adicione mais itens conforme necessário
];

// Exporta o array como o export padrão do módulo
export default menuItems;