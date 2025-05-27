// src/App.js
import React from 'react';

// Importe o componente MenuItem
import MenuItem from './components/MenuItem.js'; // Adicionada extensão .js por clareza, opcional dependendo do bundler

// Importe os dados do menu do local correto
import menuItems from './components/data.js'; // <-- CORREÇÃO: O caminho agora aponta para src/components/data.js

// Importe estilos SCSS (assumindo que app.scss está em src/assets/scss/app.scss)
import './assets/scss/app.scss';

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