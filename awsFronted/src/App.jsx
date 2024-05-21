import SearchImage from "./components/SearchImage"
import UploadFile from "./components/UploadFile"

function App() {
  return (
    <div className=' h-screen w-screen bg-neutral-950 bg-[radial-gradient(ellipse_80%_80%_at_50%_-20%,rgba(120,119,198,0.3),rgba(255,255,255,0))] text-white'>
      <main className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-6xl mx-auto px-4 py-12'>
        <UploadFile />
        <SearchImage />
      </main>
    </div>
  )
}

export default App
