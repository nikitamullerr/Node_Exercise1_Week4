import express from 'express';

const app = express();

app.use(express.json());

//  USERS ROUTES
app.get('/users', (req, res) => {
  res.json({ message: 'This is the GET user path' });
});

app.post('/users', (req, res) => {
  res.json({ message: 'This is the POST user path and something was added' });
});

app.put('/users/:id', (req, res) => {
  res.json({ message: `This is the PUT user path and user ${req.params.id} was fully updated` });
});

app.patch('/users/:id', (req, res) => {
  res.json({ message: `This is the PATCH user path and user ${req.params.id} was partially updated` });
});

app.delete('/users/:id', (req, res) => {
  res.json({ message: `This is the DELETE user path and user ${req.params.id} was removed` });
});

//  PRODUCTS ROUTES 
app.get('/products', (req, res) => {
  res.json({ message: 'This is the GET product path' });
});

app.post('/products', (req, res) => {
  res.json({ message: 'This is the POST product path and something was added' });
});

app.put('/products/:id', (req, res) => {
  res.json({ message: `This is the PUT product path and product ${req.params.id} was fully updated` });
});

app.patch('/products/:id', (req, res) => {
  res.json({ message: `This is the PATCH product path and product ${req.params.id} was partially updated` });
});

app.delete('/products/:id', (req, res) => {
  res.json({ message: `This is the DELETE product path and product ${req.params.id} was removed` });
});

app.listen(5050,()=>{
  console.log('http://localhost:5050');
})