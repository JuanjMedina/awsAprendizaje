import SearchOptions from "./SearchOptions"
export default function SearchImage() {
  return (
    <section>
      <h2 className='text-2xl font-bold mb-4'>Buscar Imágenes</h2>
      <div className='bg-gray-800 rounded-lg p-6'>
        <div className='flex items-center justify-between mb-4'>
          <div className='flex items-center  gap-2'>
            <SearchOptions />

            <button className='inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-9 rounded-md px-3'>
              Buscar
            </button>
          </div>
        </div>
        <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4'>
          <img
            alt='Imagen'
            width='300'
            height='300'
            className='rounded-lg object-cover w-full aspect-square'
          />

          <img
            alt='Imagen'
            width='300'
            height='300'
            className='rounded-lg object-cover w-full aspect-square'
          />
        </div>
      </div>
    </section>
  )
}
