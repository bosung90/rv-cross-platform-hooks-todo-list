import { useState } from 'react'

export const useChatApp = () => {
  const [input, setInput] = useState('')
  const [items, setItems] = useState([])

  function addItem() {
    setItems((prevData) => {
      return [...prevData, input]
    })

    setInput('')
  }

  function removeItem(id) {
    setItems((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id
      })
    })
  }

  return {
    input,
    setInput,
    items,
    setItems,
    addItem,
    removeItem,
  }
}
