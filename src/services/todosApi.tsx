export const getTodos = async () => {
  try { 
    const data = await fetch('http://localhost:3001/todos')
    return await data.json()
  } catch (error) {
      console.log('Fetching of TODOs failed. ', error)
  }
}

export const getTodo = async (id: string | undefined) => {
  try {
    const data = await fetch(`http://localhost:3001/todos?id=${id}`)
    return await data.json()
  } catch (error) {
      console.log(`Fetching of TODO number ${id} failed. `, error)
  }
}
