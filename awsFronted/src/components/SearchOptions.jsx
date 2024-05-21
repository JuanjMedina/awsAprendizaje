/* eslint-disable react/prop-types */
import { Button, Select, SelectItem } from "@nextui-org/react"
import { useEffect, useState } from "react"
import { getAllCategories, getAllImagesByCategory } from "../services/image"

function SearchOptions({ setImagesData, setIsLoading }) {
  const [categories, setCategories] = useState([])
  const [selectedCategories, setSelectedCategories] = useState(new Set([]))

  useEffect(() => {
    const responseCategories = async () => {
      const responseImages = await getAllCategories()
      setCategories(responseImages)
    }
    responseCategories()
  }, [])

  const handleSubmit = async e => {
    e.preventDefault()
    if (selectedCategories.size === 0)
      return alert("Selecciona al menos una categoria")
    const ArraySelectedCategories = Array.from(selectedCategories)
    setIsLoading(true)
    const responseImages = await getAllImagesByCategory({
      categories: ArraySelectedCategories,
    })
    setIsLoading(false)
    setImagesData(responseImages)
    console.log(responseImages.map(value => value.url.S))
  }
  const handleSelectionChange = e => {
    setSelectedCategories(new Set(e.target.value.split(",")))
  }
  return (
    <form action='' className='flex items-center gap-3' onSubmit={handleSubmit}>
      <Select
        isRequired
        label='Categorias de imagenes'
        placeholder='Categorias'
        selectionMode='multiple'
        className='w-72 max-w-full'
        size='sm'
        onChange={handleSelectionChange}
      >
        {categories.map(category => (
          <SelectItem key={category} value={category}>
            {category}
          </SelectItem>
        ))}
      </Select>
      <Button type='submit' color='primary' variant='solid'>
        Buscar
      </Button>
      <p></p>
    </form>
  )
}

export default SearchOptions
