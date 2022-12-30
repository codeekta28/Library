 export const updateData = async (api,data) => {
    try {
      // Send the POST request to the API
      const res = await fetch(`${api}`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      const dataJson=await res.json();
      // Check the status code of the response
      if (res.status !== 201) {
        throw new Error('Failed to update data');
      }
    
      return dataJson;

    } catch (error) {
      console.error(error);
    }
  };
