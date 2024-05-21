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
