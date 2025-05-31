import express from 'express'

// Crear una instancia de Express
const app = express()

// Configuramos un puerto donde el servidor escuchará
const PORT = 3000

/* ACTIVIDADES TP3 */

// Actividad 1: Manejo de Parámetros de Ruta
// Solicitud: http://localhost:3000/user/123
app.get('/user/:id', (req, res) => {
  const userId = req.params.id
  console.log(`ID del usuario recibido: ${userId}`)
  res.send(`Perfil de usuario con ID: ${userId}`)
})

// Actividad 2: Manejo de Parámetros de Consulta
// Solicitud: http://localhost:3000/profile?edad=30
app.get('/profile', (req, res) => {
  const edad = req.query.edad
  console.log(`Edad recibida: ${edad}`)
  res.send(`Edad del perfil: ${edad}`)
})



app.listen(PORT, () => console.log(`Servidor corriendo en http://localhost:${PORT}`))