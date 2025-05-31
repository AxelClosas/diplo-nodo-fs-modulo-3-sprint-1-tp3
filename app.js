import express from 'express'

// Crear una instancia de Express
const app = express()

// Configurar el puerto en que el servidor escuchará
const PORT = 3000

// Ruta básica - HOME - Página de Inicio
app.get('/', (req, res) => {
  res.send("Hola mundo!")
})

// Ruta GET para recibir datos simples
// Solicitud: http://localhost:3000/data
app.get('/data', (req, res) => {
  res.send('Datos recibidos')
})

// Ruta GET con parámetros de ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
  const userId = req.params.id
  res.send(`Perfil del usuario con ID: ${userId}`)
})

// Ruta GET con múltiples parámetros de ruta
// Solicitud: http://localhost:3000/product/electronics/456
app.get('/product/:category/:id', (req, res) => {
  const { category, id } = req.params
  res.send(`Categoría: ${category}, ID del Producto: ${id}`)
})

// Ruta GET con parámetro de consulta
// Solicitud: http://localhost:3000/search?q=javascript
app.get('/search', (req, res) => {
  const query = req.query.q
  res.send(`Resultados de busqueda para: ${query}`)
})

// Ruta GET con múltiples parámetro de consulta
// Solicitud: http://localhost:3000/filter?type=book&minPrice=10&maxPrice=50
app.get('/filter', (req, res) => {
  const { type, minPrice, maxPrice } = req.query
  res.send(`Filtrar por tipo: ${type}, rango de precios: ${minPrice} - ${maxPrice}`)
})



// Iniciar el servidor
app.listen(PORT, () => {
  console.log(`Servidor corriendo en http://localhost:${PORT}`)
})


