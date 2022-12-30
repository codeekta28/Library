import React from "react";
import axios from "axios";

export async function EditAPIData(api, data, id) {
  console.log("id",id);
  try {
    const res = await axios.get(`${api}`);
    const updatedData = res.data.map((val) => {
      if (val.id === id || val.orderId==id) {
     
        return { ...val, ...data };
      }
      return val;
    });
    try {
      const returnNewData = await axios.put(`${api}`, updatedData);
      if (returnNewData.status !== 201) {
        throw new Error("Failed to Edit data");
      }
     return returnNewData.data 
     
    } catch (error) {
      console.log("editing error", error);
    }
  } catch (error) {
    console.log("error:", error.message);
  }
}
