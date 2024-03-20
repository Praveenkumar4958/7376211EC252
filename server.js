const express=require('express');
const app=express();
const bodyParser=require('body-parser');
const PORT=3002;
app.use(express.json())
 
app.post('/products/register',(req,res)=>{
    res.json({
        "companyName":req.body.companyName,
        "clientId":"37bb493c-73d3-47ea-8675-21f66ef9b735",
        "clientSecret":"HVIQBVbqmTGEmaED",
        "ownerName":req.body.ownerName,
        "ownerEmail":req.body.ownerEmail,
        "rollNo":req.body.rollNo
    })
})


app.post('/products/auth',(req,res)=>{
    const {companyName,clientID,clientSecret,ownerName,ownerEmail,rollNo}=req.body;
    res.json({
        "token_type":"Bearer",
        "access_token":"jasgehfblwekfiukfdsfk",
        "expires_in":1710835268
    })
})


app.post('/products/companies/categories/Laptop/products/minPrice/maxPrice',(req,res)=>{
    const {productName,price,rating,discount,availability}=req.body;
    for(i=0;i<n;i++)
    {
        if(availability==="yes" && minPrice===req.body.minPrice && maxPrice===req.body.maxPrice){
    res.json({
        "productName":productName,
        "price":price,
        "rating":rating,
        "discount":discount,
        "availability":availability
    
    })}
}

})

app.listen(PORT,()=>{
    console.log('Listening on port 3002');
})

