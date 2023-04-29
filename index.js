fetch('https://dummyjson.com/products')
    .then((data) => {
        // console.log(data)
        return data.json()
    })
    .then((objectData) => {
        console.log(objectData)
        let tableData = ""
        objectData.products.map((values) => {
            tableData += `<tr>
            <td>${values.id}</td>
            <td>${values.title}</td>
            <td>${values.description}</td>
            <td>${values.price}$</td>
            <td> <img style = " width: 100px ;border-radius:10%" src="${values.images[0]}" alt=""></td>  
        </tr>`
        })
        document.getElementById('table_body').innerHTML = tableData
    })
