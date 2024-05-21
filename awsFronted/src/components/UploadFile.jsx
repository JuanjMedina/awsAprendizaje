import { useState } from "react"
import { uploadImage } from "../services/image"
import { Spinner } from "./Spinner"
import { useAlert } from "react-alert"
import { Button, Chip, chip } from "@nextui-org/react"

export default function UploadFile() {
  const alert = useAlert()
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
      alert.error("Por favor, selecciona un archivo para cargar.")
      setLoading(false)
      return
    }

    const formData = new FormData()
    formData.append("file", file)

    try {
      const responseUploadmovie = await uploadImage({ formData })
      if (responseUploadmovie) {
        alert.success("Imagen subida correctamente")
        setFile(null)
        setResponseData(responseUploadmovie.data)
      }
    } catch (error) {
      alert.error("Error al subir la imagen. Inténtalo de nuevo.")
    } finally {
      setLoading(false)
    }
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
          className='flex flex-col gap-4'
        >
          <input
            className='block w-full text-sm text-gray-900 border border-gray-300 rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400'
            id='file_input'
            type='file'
            accept='image/*'
            onChange={handleFileChange}
          />
          {loading && <Spinner />}
          <Button type='submit' color='success'>
            Cargar imagen
          </Button>
        </form>
      </div>

      {responseData && (
        <div className='bg-gray-800 rounded-lg p-6 mt-4'>
          <h3 className='text-lg font-bold mb-4'>Imagen Cargada</h3>
          <img
            src={responseData.url}
            alt='Imagen Aws'
            className='h-auto max-w-full rounded-lg'
          />
          <div className='mt-5'>
            <h4 className='pb-3'> Labels asociados</h4>
            <div className='flex flex-row flex-wrap gap-2'>
              {responseData.labels.map((label, index) => (
                <Chip key={index} size='sm' color='primary'>
                  {label}
                </Chip>
              ))}
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
