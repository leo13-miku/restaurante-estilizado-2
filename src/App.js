// src/App.js
import React from 'react';

// Importe o componente MenuItem
import MenuItem from './components/MenuItem';


import menuItems from './data'; // <-- Linha CORRETA (busca o arquivo src/data.js) // <-- Ajuste aqui
// Importe estilos se necessário (ex: './App.css' ou seu arquivo SCSS)
 import './assets/scss/app.scss'; // Descomente se ainda estiver usando o SCSS

const App = () => {
  return (
    // Elemento div principal com a classe cardapio-container
    <div className="cardapio-container">

      {/* Título do cardápio */}
      <h1>Nosso Cardápio</h1>

      {/* Div para conter a lista de itens */}
      <div className="lista-itens-cardapio">
        {/* Mapeia o array menuItems */}
        {menuItems.map(item => (
          // Renderiza um componente MenuItem para cada item
          // Passa o 'item' atual como prop
          // Usa o 'item.id' como a 'key' única para o React
          <MenuItem key={item.id} item={item} />
        ))}
      </div>

    </div>
  );
};

export default App;