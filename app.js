

// const meals = [
//     {
//         id: 0,
//         category: "breakfast",
//         name: "Buttermilk Pancakes",
//         price: 15.99,
//         img: './img/pancakes.jpg',
//         details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque rerum suscipit repellendus rem, eaque maiores. Nemo, sed voluptatum dicta sint deserunt fugiat?",
//     },
//     {
//         id: 1,
//         category: "lunch",
//         name: "Beef Burger",
//         price: 19.99,
//         img: './img/burger.jpg',
//         details: "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
//     },
//     {
//         id: 2,
//         category: "breakfast",
//         name: "Manakeesh",
//         price: 13.99,
//         img: './img/manakeesh.jpg',
//         details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil",
//     },
//     {
//         id: 3,
//         category: "shakes",
//         name: "Banana Milkshake",
//         price: 9.99,
//         img: './img/banana-shake.jpg',
//         details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
//     },
//     {
//         id: 4,
//         category: "lunch",
//         name: "Original Pizza",
//         price: 16.99,
//         img: './img/pizza.jpg',
//         details: "occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum",
//     },
//     {
//         id: 5,
//         category: "breakfast",
//         name: "Turkish Shakshouka",
//         price: 12.99,
//         img: './img/Shakshuka.jpg',
//         details: "optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe",
//     },
//     {
//         id: 6,
//         category: "shakes",
//         name: "Choclate Milkshake",
//         price: 9.99,
//         img: './img/choclate-shake.jpg',
//         details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
//     },
//     {
//         id: 7,
//         category: "lunch",
//         name: "Fettuccine Alfredo",
//         price: 15.99,
//         img: './img/pasta.jpg',
//         details: "eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores",
//     },
//     {
//         id: 8,
//         category: "breakfast",
//         name: "Fried Eggs",
//         price: 9.99,
//         img: './img/fried eggs.jpg',
//         details: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
//     },
//     {
//         id: 9,
//         category: "lunch",
//         name: "Beef Steak",
//         price: 24.99,
//         img: './img/steak.jpg',
//         details: "sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
//     },
// ];

// const menu = document.querySelector(".menu");
// const btns = document.querySelectorAll(".btn");


// function addItem(img, name, price, details){
//   let text = `<article class="item">
//             <div class="img-div">
// <img src="${img}" alt="pancakes">
//             </div>
//             <div class="info">
//                 <div class="name-div">
//                     <h4 class="name">${name}</h4>
//                     <h4 class="price">$${price}</h4>
//                 </div>
//                 <p class="details">${details}</p>
//             </div>
//         </article>`;
// menu.insertAdjacentHTML("beforeend", text);

// }
// window.addEventListener("DOMContentLoaded", ()=>{
//     for(let i = 0; i< meals.length; i++){
// img = meals[i].img;
// name = meals[i].name;
// price = meals[i].price;
// details = meals[i].details;
//   addItem(img, name, price, details);
//     }
  
// })


// btns.forEach((btn) => {
//     btn.addEventListener("click", () =>{
//         menu.innerHTML = " ";
// if (btn.classList.contains("breakfast")){
// for(let i = 0; i < meals.length; i++){
//         if(meals[i].category === "breakfast"){
// img = meals[i].img;
// name = meals[i].name;
// price = meals[i].price;
// details = meals[i].details;
//   addItem(img, name, price, details);
//         }
//     }
// }else if (btn.classList.contains("lunch")){
// for(let i = 0; i < meals.length; i++){
//         if(meals[i].category === "lunch"){
// img = meals[i].img;
// name = meals[i].name;
// price = meals[i].price;
// details = meals[i].details;
//   addItem(img, name, price, details);
//         }
//     }
// }else if (btn.classList.contains("shakes")){
// for(let i = 0; i < meals.length; i++){
//         if(meals[i].category === "shakes"){
// img = meals[i].img;
// name = meals[i].name;
// price = meals[i].price;
// details = meals[i].details;
//   addItem(img, name, price, details);
//         }
//     }
// }else if (btn.classList.contains("all")){
// for(let i = 0; i < meals.length; i++){
// img = meals[i].img;
// name = meals[i].name;
// price = meals[i].price;
// details = meals[i].details;
//   addItem(img, name, price, details);  
//     }
// }
//     })
// });

//************************************************
 //**********************************************
 //*********************************************************
  // ******************************************************





// const meals = [
//     {
//         id: 0,
//         category: "breakfast",
//         name: "Buttermilk Pancakes",
//         price: 15.99,
//         img: './img/pancakes.jpg',
//         details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque rerum suscipit repellendus rem, eaque maiores. Nemo, sed voluptatum dicta sint deserunt fugiat?",
//     },
//     {
//         id: 1,
//         category: "lunch",
//         name: "Beef Burger",
//         price: 19.99,
//         img: './img/burger.jpg',
//         details: "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
//     },
//     {
//         id: 2,
//         category: "breakfast",
//         name: "Manakeesh",
//         price: 13.99,
//         img: './img/manakeesh.jpg',
//         details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil",
//     },
//     {
//         id: 3,
//         category: "shakes",
//         name: "Banana Milkshake",
//         price: 9.99,
//         img: './img/banana-shake.jpg',
//         details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
//     },
//     {
//         id: 4,
//         category: "lunch",
//         name: "Original Pizza",
//         price: 16.99,
//         img: './img/pizza.jpg',
//         details: "occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum",
//     },
//     {
//         id: 5,
//         category: "breakfast",
//         name: "Turkish Shakshouka",
//         price: 12.99,
//         img: './img/Shakshuka.jpg',
//         details: "optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe",
//     },
//     {
//         id: 6,
//         category: "shakes",
//         name: "Choclate Milkshake",
//         price: 9.99,
//         img: './img/choclate-shake.jpg',
//         details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
//     },
//     {
//         id: 7,
//         category: "lunch",
//         name: "Fettuccine Alfredo",
//         price: 15.99,
//         img: './img/pasta.jpg',
//         details: "eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores",
//     },
//     {
//         id: 8,
//         category: "breakfast",
//         name: "Fried Eggs",
//         price: 9.99,
//         img: './img/fried eggs.jpg',
//         details: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
//     },
//     {
//         id: 9,
//         category: "lunch",
//         name: "Beef Steak",
//         price: 24.99,
//         img: './img/steak.jpg',
//         details: "sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
//     },
// ];

// const menu = document.querySelector(".menu");
// const btns = document.querySelectorAll(".btn");


// window.addEventListener("DOMContentLoaded", ()=>{
//     addItem(meals);
//     })

// btns.forEach((btn) => {
//     btn.addEventListener("click", (e)=>{
//         menu.innerHTML = " ";
// const category = e.currentTarget.dataset.id;
// const filterDisplay = meals.filter((menuItem) => {
//     if (menuItem.category === category){
//         return menuItem;
        
//     }
// })
// if (category === "all"){
//     addItem(meals);
// }else {
//     addItem(filterDisplay);
// }
//     })
// })

// function addItem(menuItem){
//       menuItem.map(item => {
// let text = `<article class="item">
//             <div class="img-div">
// <img src="${item.img}" alt="pancakes">
//             </div>
//             <div class="info">
//                 <div class="name-div">
//                     <h4 class="name">${item.name}</h4>
//                     <h4 class="price">$${item.price}</h4>
//                 </div>
//                 <p class="details">${item.details}</p>
//             </div>
//         </article>`
//          menu.insertAdjacentHTML("beforeend", text)
//       }
     
//       )}



      
//************************************************
 //**********************************************
 //*********************************************************
  // ******************************************************
  
const meals = [
    {
        id: 0,
        category: "breakfast",
        name: "Buttermilk Pancakes",
        price: 15.99,
        img: './img/pancakes.jpg',
        details: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima itaque rerum suscipit repellendus rem, eaque maiores. Nemo, sed voluptatum dicta sint deserunt fugiat?",
    },
    {
        id: 1,
        category: "lunch",
        name: "Beef Burger",
        price: 19.99,
        img: './img/burger.jpg',
        details: "consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem",
    },
    {
        id: 2,
        category: "breakfast",
        name: "Manakeesh",
        price: 13.99,
        img: './img/manakeesh.jpg',
        details: "Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil",
    },
    {
        id: 3,
        category: "shakes",
        name: "Banana Milkshake",
        price: 9.99,
        img: './img/banana-shake.jpg',
        details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
    },
    {
        id: 4,
        category: "lunch",
        name: "Original Pizza",
        price: 16.99,
        img: './img/pizza.jpg',
        details: "occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum",
    },
    {
        id: 5,
        category: "breakfast",
        name: "Turkish Shakshouka",
        price: 12.99,
        img: './img/Shakshuka.jpg',
        details: "optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe",
    },
    {
        id: 6,
        category: "shakes",
        name: "Choclate Milkshake",
        price: 9.99,
        img: './img/choclate-shake.jpg',
        details: "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint",
    },
    {
        id: 7,
        category: "lunch",
        name: "Fettuccine Alfredo",
        price: 15.99,
        img: './img/pasta.jpg',
        details: "eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores",
    },
    {
        id: 8,
        category: "breakfast",
        name: "Fried Eggs",
        price: 9.99,
        img: './img/fried eggs.jpg',
        details: "Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat",
    },
    {
        id: 9,
        category: "lunch",
        name: "Beef Steak",
        price: 24.99,
        img: './img/steak.jpg',
        details: "sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    },
    {
        id: 10,
        category: "dinner",
        name: "Tacos",
        price: 22.99,
        img: './img/tacos.jpg',
        details: "sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio.",
    },
];

  const menu = document.querySelector(".menu");
  
  const btnDev = document.querySelector(".btns");
  

  window.addEventListener("DOMContentLoaded", ()=>{
    
addItem(meals);
displayMenuBtns()  

  })



  function addItem(menuItem){
menuItem.map((item) => {
    let text = `
    <article class="item">
            <div class="img-div">
<img src="${item.img}" alt="pancakes">
            </div>
            <div class="info">
                <div class="name-div">
                    <h4 class="name">${item.name}</h4>
                    <h4 class="price">$${item.price}</h4>
                </div>
                <p class="details">${item.details}</p>
            </div>
        </article>
    `
    menu.insertAdjacentHTML("beforeend", text);
})
  }

 function displayMenuBtns(){
const categories = meals.reduce((values, item)=>{
      if(!values.includes(item.category)){
          values.push(item.category);
      }
return values;

      },["all"])

    categories.map(item =>{
let btn = `
    <button class="btn lunch" data-id=${item}>${item}</button>
    `
    btnDev.insertAdjacentHTML("beforeend", btn);
    })
   

 const btns = document.querySelectorAll(".btn")
     btns.forEach((btn) =>{
     btn.addEventListener("click", (e)=>{
         menu.innerHTML = " ";
    const category = e.currentTarget.dataset.id;
    const displayFilter = meals.filter(item =>{
        if (item.category === category){
            return item;
        }
    })
    if (category === "all"){
        addItem(meals);
    }else{
        addItem(displayFilter);
    }
     })
 }) 

 }