// src/components/MenuItem.js (Versão para IMAGENS LOCAIS)

import React from 'react';

const MenuItem = ({ item }) => {
  // Função para formatar o preço
  const formatPrice = (price) => {
    if (typeof price !== 'number') return 'N/A';
    return `R$ ${price.toFixed(2).replace('.', ',')}`;
  };

  // Verifica se o item é válido
  if (!item || !item.nome) {
    console.warn('Tentativa de renderizar MenuItem sem dados válidos:', item);
    return null;
  }

  // Lógica para carregar a imagem LOCALMENTE
  let imageSource = null;
  if (item.imagemUrl) {
    try {
      // *** ATENÇÃO AO CAMINHO RELATIVO ***
      // Ajuste '../assets/images/' se MenuItem.js não estiver em src/components/
      imageSource = require(`../assets/images/${item.imagemUrl}`);
    } catch (error) {
      console.error(`Erro ao carregar imagem local: ${item.imagemUrl}. Verifique o caminho e se o arquivo existe em src/assets/images/`, error);
      // Opcional: Definir uma imagem padrão em caso de erro
      // imageSource = require('../assets/images/placeholder.jpg');
    }
  }

  // Renderização do componente
  return (
    <div className="menu-item">
      {imageSource && (
        <img
          src={imageSource} // Usa a imagem carregada pelo require()
          alt={item.nome}
          className="menu-item-imagem"
        />
      )}
      <div className="menu-item-info">
        <h3>{item.nome}</h3>
        {item.descricao && <p>{item.descricao}</p>}
        <span className="menu-item-preco">
          {formatPrice(item.preco)}
        </span>
      </div>
    </div>
  );
};

export default MenuItem;