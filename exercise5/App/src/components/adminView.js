import React, { useState } from 'react'



export default function AdminView(props) {

  const [newItemName, setNewItemName] = useState("");
  const [newItemType, setnewItemType] = useState("");
  const [newItemPrice, setNewItemPrice] = useState("");
  const [newItemRating, setNewItemRating] = useState("");
  const [newItemImage, setNewItemImage] = useState("");
  const [newItemDesc, setNewItemDesc] = useState("");

  const addNewItem = () => {
    props.addNewItem(newItemName, newItemType, newItemPrice, 
        newItemRating, newItemImage, newItemDesc);
  }

  const onDeleteItemClick = (itemId) => {
    console.log("clicked delete for item id " + itemId);
    props.deleteItem(itemId);
  }

  const addStar = () => {
    var input = document.querySelector("#your-input-id")
    var buttons = document.querySelectorAll("button.number-button")
    var star ="★";

    if (input.value === "★★★★★") {
      input.value = null;
    }

    for (let index = 0; index < buttons.length; index++) {
      input.value = star + input.value;
    }


    setNewItemRating(input.value)

    


  }
 


  return (
    <div>
      <div>
          <h1>Add new product</h1>
          <div>
            Name <input type="text" onChange={ (event) => setNewItemName(event.target.value) } />
          </div>
          <div>
            Type <input type="text" onChange={ (event) => setnewItemType(event.target.value) } />
          </div>
          <div>
            Price <input type="text" onChange={ (event) => setNewItemPrice(event.target.value) } />
          </div>
          <div>
            Rating
                    <button onClick={ addStar } class="number-button" value="★">★</button>
                    <input id="your-input-id" type="text" onChange={ (event) => setNewItemRating(event.target.value) } />
          </div>
          <div>
            Image url <input type="text" onChange={ (event) => setNewItemImage(event.target.value) } />
          </div>
          <div>
            Description <input type="text" onChange={ (event) => setNewItemDesc(event.target.value) } />
          </div>
          <button onClick={ addNewItem }>Add Item</button>

        </div>
        <button onClick={ props.disableAdminMode }>Disable Admin Mode</button>

        <h1>Products on the list</h1>
        { props.items.map((item, index) =>
          <div key={index}>
            <button onClick={() => onDeleteItemClick(item.id)}>X</button> {item.name}, {item.type}, {item.price}
          </div>)}
    </div>
  )
}
