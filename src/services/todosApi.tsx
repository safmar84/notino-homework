export const getTodos = async () => {
  try { 
    const data = await fetch('http://localhost:3001/todos')
    return await data.json()
  } catch (error) {
      console.log("Fetching of todos failed. ", error)
  }
}