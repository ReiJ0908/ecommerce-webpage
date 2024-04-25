const rangeInput = document.querySelectorAll(".range-input input"),
  priceInput = document.querySelectorAll(".price-input input"),
  range = document.querySelector(".slider .progress");
let priceGap = 10;

priceInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    var minPrice = parseInt(priceInput[0].value),
      maxPrice = parseInt(priceInput[1].value);

    if (maxPrice - minPrice >= priceGap && maxPrice <= rangeInput[1].max) {
      if (e.target.className === "input-min") {
        rangeInput[0].value = minPrice;
        range.style.left = (minPrice / rangeInput[0].max) * 100 + "%";
      } else {
        rangeInput[1].value = maxPrice;
        range.style.right = 100 - (maxPrice / rangeInput[1].max) * 100 + "%";
      }
    }
    
  });
});

rangeInput.forEach((input) => {
  input.addEventListener("input", (e) => {
    let minVal = parseInt(rangeInput[0].value),
      maxVal = parseInt(rangeInput[1].value);

    if (maxVal - minVal < priceGap) {
      if (e.target.className === "range-min") {
        rangeInput[0].value = maxVal - priceGap;
      } else {
        rangeInput[1].value = minVal + priceGap;
      }
    } else {
      priceInput[0].value = minVal;
      priceInput[1].value = maxVal;
      range.style.left = (minVal / rangeInput[0].max) * 100 + "%";
      range.style.right = 100 - (maxVal / rangeInput[1].max) * 100 + "%";
    }
  });
});

function priceCheck() {
    //x equals item price - make a loop that gets all of the prices
    let message = ""
    //let x = (product[0].price)
    let minPrice = parseInt(priceInput[0].value), maxPrice = parseInt(priceInput[1].value)

    product.forEach(function(products){
      if (products.price >= minPrice && products.price <= maxPrice){
        var flterPrice = categories.filter(item);
        function item(value){
          if(value.price>= minPrice && value.price <= maxPrice){
            return(value.price)
          }
        }
        displayItem(flterPrice)

        message += products.title +"\n";
      }
    }); alert("Products within range:\n" + message);
  }

const btns=[
    {
        id: 1,
        name: 'Footwear'
    },
    {
        id: 2,
        name: 'Jerseys'
    },
    {
        id: 3,
        name: 'Equipment'
    }
    ]

    const filters = [...new Set(btns.map((btn)=>
        {return btn}))]
    
    document.getElementById('btns').innerHTML=filters.map((btn)=>{
        var {name, id} = btn;
        return(
            "<button class='fil-p' onclick='filterItems("+(id)+`)'>${name}</button>`
            )
    }).join('');

;
    
const btns2=[
    {
        id_b: 1,
        name: 'adidas'
    },
    {
        id_b: 2,
        name: 'Nike'
    },
    {
        id_b: 3,
        name: 'PUMA'
    }
    ]

    const filters2 = [...new Set(btns2.map((btn2)=>
        {return btn2}))]
    
    document.getElementById('btns2').innerHTML=filters2.map((btn2)=>{
        var {name, id_b} = btn2;
        return(
            "<button class='fil-p' onclick='filterItems2("+(id_b)+`)'>${name}</button>`
            )
    }).join('');


    var product = [
    {
        id: 1,
        id_b:1,
        image: 'images/adidas-cleats.webp',
        title: 'adidas Precision+ Cleats',
        price: 180,
        category: 'adidas'
    },
    {
        id: 2,
        id_b:1,
        image: 'images/messi-jersey.webp',
        title: 'adidas Lionel Messi #10 Jersey',
        price: 130,
        category: 'adidas'
    },
    {
        id: 2,
        id_b:1,
        image: 'images/cowell-jersey.webp',
        title: 'adidas Cade Cowell #44 Jersey',
        price: 120,
        category: 'adidas'
    },
    {
        id: 3,
        id_b:2,
        image: 'images/nike-bag.webp',
        title: 'Nike Soccer Backpack',
        price: 57,
        category: 'Nike'
    },
    {
        id: 1,
        id_b:2,
        image: 'images/nike-fgc.png',
        title: 'Nike Firm Ground Cleats',
        price: 180,
        category: 'Nike'
    },
    {
        id: 2,
        id_b:2,
        image: 'images/mbappe-jersey.webp',
        title: 'Nike Kylian Mbappé #10 Jersey',
        price: 120,
        category: 'Nike'
    },
    {
        id: 3,
        id_b:1,
        image: 'images/adidas-ball.webp',
        title: 'adidas Soccer Ball',
        price: 20,
        category: 'adidas'
    },
    {
        id: 2,
        id_b:2,
        image: 'images/ronaldo-jersey.webp',
        title: 'Nike Cristiano Ronaldo #7 Jersey',
        price: 135,
        category: 'Nike'
    },
    {
        id: 3,
        id_b:2,
        image: 'images/nike-ball.webp',
        title: 'Nike Premier Soccer Ball',
        price: 40,
        category: 'Nike'
    },
    {
        id: 3,
        id_b:1,
        image: 'images/adidas-gloves.webp',
        title: 'adidas Goalkeeper Gloves',
        price: 50,
        category: 'adidas'
    },
    {
        id: 1,
        id_b:3,
        image: 'images/puma-tfc.png',
        title: 'PUMA Turf Ground Cleats',
        price: 85,
        category: 'PUMA'
    },
    ];
    
    const categories = [...new Set(product.map((item)=>
        {return item}))]

    
    const filterItems = (a)=>{
        var flterCategories = categories.filter(item);
        function item(value){
            if(value.id==a){
                return(
                    value.id
                    )
            }
        }
        displayItem(flterCategories)
    }

    const filterItems2 = (b)=>{
        var flterCategories2 = categories.filter(item);
        function item(value){
            if(value.id_b==b){
                return(
                    value.id_b
                    )
            }
        }
        displayItem(flterCategories2)
    }
    
    
    const displayItem = (items) => {
        document.getElementById('root').innerHTML = items.map((item)=>
        {
            var {image, title, price} = item;
            return(
                `<div class='box'>
                <h3>${title}</h3>
                <div class='img-box'>
                <img class='images' src=${image}></img>
                </div>
                <div class='bottom'>
                <h2>$ ${price}.00</h2>
                <button>Add to cart</button>
                </div>
                </div>`)
        }).join('');
    }
    displayItem(categories);
