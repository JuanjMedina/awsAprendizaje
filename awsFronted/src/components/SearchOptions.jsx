import { Select, SelectItem } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { getAllCategories } from "../services/image"

function SearchOptions() {
  const [categories, setCategories] = useState([])
  useEffect(() => {
    const responseCategories = async () => {
      const responseImages = await getAllCategories()
      setCategories(responseImages)
    }
    responseCategories()
  }, [])

  return (
    <Select
      label='Categorias de imagenes'
      placeholder='Categorias'
      selectionMode='multiple'
      className='min-w-max w-48'
      size='sm'
    >
      {categories.map(category => (
        <SelectItem key={crypto.randomUUID()} value={category}>
          {category}
        </SelectItem>
      ))}
    </Select>
  )
}

export default SearchOptions
