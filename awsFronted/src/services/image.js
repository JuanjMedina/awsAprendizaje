// const API_URL = `http://18.234.210.148:3000`
const API_URL = `http://loadbalancerrekognition-1029510903.us-east-1.elb.amazonaws.com`
// const API_URL_LOCAL = `http://localhost:3000`
export const uploadImage = async ({ formData }) => {
  try {
    const response = await fetch(`${API_URL}/api/recognition/upload`, {
      method: 'POST',
      body: formData,
    })
    const json = await response.json()
    return json
  } catch (error) {
    throw new Error('Error subiendo la imagen :D')
  }
}

export const getAllCategories = async () => {
  try {
    const response = await fetch(`${API_URL}/api/recognition/categorys`)
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
    const url = `${API_URL}/api/recognition/query?${queryParams}`

    const response = await fetch(url)
    const json = await response.json()
    return json
  } catch (err) {
    throw new Error('Error obteniendo las imagenes por categoria :D')
  }
}
