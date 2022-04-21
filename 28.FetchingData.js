const func = async () => {
   try {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts')
    const data = await response.json()
    console.log(data[0]);
   } catch (error) {
       console.log(error);
   }
}
func()