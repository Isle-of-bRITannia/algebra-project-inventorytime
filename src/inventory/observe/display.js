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
        console.log(element);
        const li = document.createElement('li');
        list.appendChild(li);
        
        const nested = document.createElement('ul');
        nested.innerText = element.name;
        li.appendChild(nested);
        
        const nestedLi = document.createElement('li');
        nestedLi.innerText = `Category: ${element.category}`
        nested.appendChild(nestedLi);

        const nestedLi2 = document.createElement('li');
        nestedLi2.innerText = `Quantity: ${element.quantity}`
        nested.appendChild(nestedLi2);
    });
    inventoryDiv.appendChild(list);

    //header.innerText = "Inventory";
    
}

export {displayInventory};