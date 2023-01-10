import * as fs from "fs";

export default function handler(req, res) {
  if (req.method === "GET") {
    fs.readFile("Jsons/adminCredential.json", "utf8", (err, data) => {
      if (err) {
        // Handle the error
        res.status(500).json({ error: "Internal server error" });
      } else {
        const array = JSON.parse(data);
        res.status(200).json(array);
      }
    });
  }
  // if(req.method==="POSt"){
  //     let adminData=fs.readFile("Jsons/adminCredential.json", "utf8");
  //      adminData=JSON.parse(adminData);

  // }
}
