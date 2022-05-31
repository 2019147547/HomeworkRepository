fetch('product.json')
.then(response => {
    if (!response.ok) {
        throw new Error();
    }
    return response.json();
})
.then(json => initialize(json))
.catch(err => console.error());