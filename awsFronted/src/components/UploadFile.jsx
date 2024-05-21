import { useState } from "react"
import { uploadImage } from "../services/image"
import { Spinner } from "./Spinner"

export default function UploadFile() {
  const [file, setFile] = useState("")
  const [loading, setLoading] = useState(false)
  const [responseData, setResponseData] = useState("")

  const handleFileChange = e => {
    setFile(e.target.files[0])
  }

  const handleSubmit = async e => {
    e.preventDefault()
    setLoading(true)
    if (!file) {
      return alert("No hay archivos seleccionados")
    }

    const formData = new FormData()
    formData.append("file", file)

    const responseUploadmovie = await uploadImage({ formData })
    if (responseUploadmovie) {
      alert("Imagen subida correctamente")
      setLoading(false)
      setFile(null)
      console.log(responseUploadmovie)
      setResponseData(responseUploadmovie.data)
      console.log(`responseData : ${responseUploadmovie.data}`)
    }
    console.log(responseUploadmovie)
  }
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4'>Cargar Imágenes</h2>
      <div className='bg-gray-800 rounded-lg p-6 flex flex-col items-center justify-center border-2 border-dashed border-gray-600 cursor-pointer hover:bg-gray-700 transition-colors'>
        <label
          className='block mb-2 text-sm font-medium text-gray-900 text-white'
          htmlFor='file_input'
        >
          selecciona un archivo para cargar!
        </label>
        <form
          onSubmit={handleSubmit}
          id='uploadFile'
          className='flex flex-col gap-4 '
        >
          <input
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
            accept='image/*'
            onChange={handleFileChange}
          />
          {loading && <Spinner />}
          <button
            type='submit'
            id='file_input_button'
            className='text-white bg-gradient-to-r from-green-400 via-green-500 to-green-600 hover:bg-gradient-to-br focus:ring-4 focus:outline-none focus:ring-green-300 dark:focus:ring-green-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 '
          >
            Enviar archivos
          </button>
        </form>
      </div>

      {responseData && (
        <div className='bg-gray-100 dark:bg-gray-800 rounded-lg p-6 mt-4'>
          <h3 className='text-lg font-bold mb-4'>imagen Cargada</h3>
          <img
            src={responseData.url}
            alt='Imagen Aws'
            className='h-auto max-w-full rounded-lg'
          />
        </div>
      )}
    </section>
  )
}
