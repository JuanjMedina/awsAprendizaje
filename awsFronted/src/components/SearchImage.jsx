import { useState } from "react"
import SearchOptions from "./SearchOptions"
import { Image, Spinner } from "@nextui-org/react"

export default function SearchImage() {
  const [imagesData, setImagesData] = useState([])
  const [isLoading, setIsLoading] = useState(false)

  const changeImageData = data => {
    setImagesData(data)
  }

  return (
    <section className='max-h-[80vh]'>
      <h2 className='text-2xl font-bold mb-4'>Buscar Imágenes</h2>
      <div className='bg-gray-800 rounded-lg p-6 max-h-full flex flex-col'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center gap-2'>
            <SearchOptions
              setImagesData={changeImageData}
              setIsLoading={setIsLoading}
            />
          </div>
        </div>
        <div className='overflow-y-auto max-h-full'>
          <div className='grid grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-4'>
            {isLoading && (
              <div className='col-span-full flex justify-center'>
                <Spinner />
              </div>
            )}
            {imagesData.map((image, index) => (
              <Image
                key={index}
                src={image.url.S}
                width={300}
                height={300}
                layout='responsive'
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
