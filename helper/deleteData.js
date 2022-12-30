import axios from "axios";
export async function deleteData(id) {
  console.log("deletefn")
  // Make a GET request to the API to retrieve the current array of objects
  // axios.get('/api/items')
  //   .then(response => {
  //     // Modify the array by removing the object you want to delete
  //     const updatedArray = response.data.filter(item => item.id !== itemIdToDelete);

  //     // Make a PUT request to the API to update the array with the modified version
  //     axios.put('/api/items', updatedArray)
  //       .then(response => {
  //         console.log('Successfully deleted item from array');
  //       })
  //       .catch(error => {
  //         console.error(error);
  //       });
  //   })
  //   .catch(error => {
  //     console.error(error);
  //   });

//   try {
//     const data = await axios.get(`http://localhost:3000/api/books`);
//     const newData = data.data.filter((val) => val.id !== id);

// try {
//     const afterDeleteData= await axios.put(`http://localhost:3000/api/books`,newData);
//     if (afterDeleteData.status !== 201) {
//         throw new Error('Failed to delete data');
//       }
//       return afterDeleteData.data
    
// } catch (error) {
//     console.log("error",error)
// }

//   } catch (error) {
//     console.log("there is an error", error.message);
//   }

try {
  const config = {
    params: {
      "id": id,
    },
  };
  const response = await axios.delete('http://localhost:3000/api/books', config);
 if(response.status!==201){
  throw new Error("error in deleting your data")
 }
//  console.log("response",response.data)
 return response.data
} catch (error) {
  console.error(error);
}
}
