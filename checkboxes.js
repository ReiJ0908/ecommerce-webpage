const checkboxes=[
    {
        id:1,
        category:'adidas'
    },
    {
        id:2,
        category:'Nike'
    },
    {
        id:3,
        category:'PUMA'
    }]

    const filters = [...new Set(checkboxes.map((checkbox)=>
        {return checkbox}))]

    document.getElementById('checkboxes').innerHTML=filters.map((checkbox)=>{
        var {name, id} = checkbox;
        return(
            "<button class='fil-b' onclick='filterItems("+(id)+`)'>${category}</button>`
            )
    }).join('');

    alert(product.category);

    const filterbrands = (b)=>{
        const fltercat = categories.filter(item);
        function item(value){
            if(value.id==b){
                return(
                    value.id
                )
            }
        }
    }