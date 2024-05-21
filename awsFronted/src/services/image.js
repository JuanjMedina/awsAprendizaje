export const uploadImage = async ({ formData }) => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/recognition/upload',
      {
        method: 'POST',
        body: formData,
      },
    )
    const json = await response.json()
    return json
  } catch (error) {
    throw new Error('Error subiendo la imagen :D')
  }
}

export const getAllCategories = async () => {
  try {
    const response = await fetch(
      'http://localhost:3000/api/recognition/categorys',
    )
    const json = await response.json()
    return json
  } catch (err) {
    throw new Error('Error obteniendo las categorias :D')
  }
}
export const getAllImagesByCategory = async ({ categories }) => {
  try {
    // Convertir el array de categorías a un string JSON y codificarlo para URL
    const queryParams = `categories=${encodeURIComponent(
      JSON.stringify(categories),
    )}`

    // Construir la URL completa con los query params
    const url = `http://localhost:3000/api/recognition/query?${queryParams}`

    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (err) {
    throw new Error('Error obteniendo las imagenes por categoria :D')
  }
}
