// Criar o container principal
const container = document.createElement("div");
container.style.textAlign = "center";
document.body.appendChild(container);

// Criar um título
const titulo = document.createElement("h1");
titulo.textContent = "Página Dinâmica com JavaScript";
container.appendChild(titulo);

// Criar um botão para adicionar itens
const botao = document.createElement("button");
botao.textContent = "Adicionar Item";
botao.style.padding = "10px";
botao.style.margin = "10px";
botao.style.cursor = "pointer";
container.appendChild(botao);

// Criar uma lista não ordenada
const lista = document.createElement("ul");
container.appendChild(lista);

// Adicionar funcionalidade ao botão
botao.addEventListener("click", () => {
    const item = document.createElement("li");
    item.textContent = `Item ${lista.children.length + 1}`;
    item.style.fontSize = "18px";
    item.style.margin = "5px";
    item.style.padding = "5px";
    item.style.border = "1px solid #000";
    
    // Adiciona um evento de remoção ao clicar no item
    item.addEventListener("click", () => {
        lista.removeChild(item);
    });

    lista.appendChild(item);
});