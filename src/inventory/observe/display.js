const displayInventory = (inventory)=>{
    console.log(inventory);

    const app = document.querySelector("#app");

    const header = document.createElement('header');
    app.appendChild(header);

    const heading = document.createElement('h1')
    heading.innerText = "Inventory";
    header.appendChild(heading);

    const lineBreak = document.createElement('br');
    app.appendChild(lineBreak);

    const inventoryDiv = document.createElement('div');
    inventoryDiv.classList.add("inventory");
    app.appendChild(inventoryDiv);
    
    const title = document.createElement('h2');
    title.innerText = `Inventory name: ${inventory.name}`;
    inventoryDiv.appendChild(title);

    const list = document.createElement('ul');
    list.innerText = "Items:"
    inventory.items.forEach(element => {
        const li = document.createElement('li');
        li.innerText = element
        list.appendChild(li);
    });
    inventoryDiv.appendChild(list);

    //header.innerText = "Inventory";
    
}

export {displayInventory};