import express from 'express';

const PORT = 3000;
const app = express();

const customers = [
    {id: 1, name: 'Ann', age:17},
    {id: 2, name: 'Ann2', age:18},
    {id: 3, name: 'Ann3', age:19},
    {id: 4, name: 'Ann4', age:10},
    {id: 5, name: 'Ann5', age:11},
    {id: 6, name: 'Ann6', age:12},
    {id: 7, name: 'Ann7', age:13},
    {id: 8, name: 'Ann8', age:15},
    {id: 9, name: 'Ann9', age:15},
    {id: 10, name: 'Ann0', age:16},
    
]


app.use(express.json())

app.listen(PORT, () => {
    console.log('Server runs on http://localhost:${PORT}')
})



// GET 
app.get("/users", (req, res) => {
    res.status(200).json(users)
})

// GET BY ID
app.get("/users:id", (req, res) => {
    const id = res.params.id;
    const user = users.find(user => user.id === id)

    if(!user) {
        return res.status(404).json({message: "User not found"})
    }
    res.status(200).json(user)
})

// POST 

// PUT BY ID

// DELETE BY ID