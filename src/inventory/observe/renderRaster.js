const displayInventory = (inventory)=>{
    console.log(inventory._inventory);

    const app = document.querySelector("#app");
    console.log(app);

    const header = document.createElement('h1')
    header.innerText = "Inventory";
    app.appendChild(header);

    const lineBreak = document.createElement('br');
    const lineBreak2 = document.createElement('br');
    app.appendChild(lineBreak);
    app.appendChild(lineBreak2);

    const inventoryDiv = document.createElement('div');
    app.appendChild(inventoryDiv);
    
    const title = document.createElement('h2');
    title.innerText = inventory._inventory._name;
    inventoryDiv.appendChild(title);

    const list = document.createElement('ul');
    inventory._inventory._items.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element
        list.appendChild(li);
    });
    inventoryDiv.appendChild(list);

    //header.innerText = "Inventory";
    
}

export {displayInventory};