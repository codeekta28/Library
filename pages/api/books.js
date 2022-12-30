import * as fs from "fs";
import { v4 as uuidv4 } from 'uuid';
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      readBooks(req, res);
      break;
    case "POST":
      addBook(req, res);
      break;
    case "DELETE":
      deleteBook(req, res);
      break;
    case "PUT":
      editBook(req, res);
      break;
    default:
      break;
  }
}

function readBooks(req, res) {
  // reading the json
  fs.readFile("Jsons/Books/books.json", "utf8", (err, data) => {
    if (err) {
      // Handle the error
      res.status(500).json({ error: "Internal server error" });
    } else {
      const array = JSON.parse(data);
      res.status(200).json(array);
    }
  });

}

function addBook(req, res) {
  const data = fs.readFileSync("Jsons/Books/books.json","utf-8");
  const storedBooks = JSON.parse(data);
  let {name, author, total} = req.body;
  // const ID = storedBooks.length + 1;
  // console.log(uuid.v4())
  const ID=uuidv4()
  storedBooks.push({ id: ID, name, author, total })
  fs.writeFileSync('Jsons/Books/books.json', JSON.stringify(storedBooks));
  res.status(201).json({ id: ID, name, author, total });
}

function deleteBook(req,res){
  console.log("delted");
  const data=fs.readFileSync("Jsons/Books/books.json","utf-8");
  const storedBooks=JSON.parse(data);

  // Find object in array and remove it
  const index = storedBooks.findIndex(obj => obj.id == req.query.id);

  if (index !== -1) {
    storedBooks.splice(index, 1);
  }
  
    // Write modified array back to JSON file
  fs.writeFileSync('Jsons/Books/books.json', JSON.stringify(storedBooks))
  res.status(201).json(storedBooks)
}

function editBook(req,res){
  // console.log(req.body);
     // Read JSON file
    //  const data = await fs.promises.readFile('array.json', 'utf8');
    //  let array = JSON.parse(data);

    //     // Find object in array and update it
    // const index = array.findIndex(obj => obj.id === newObject.id);
    // if (index !== -1) {
    //   array[index] = newObject;
    // } else {
    //   // If object is not found, add it to the array
    //   array.push(newObject);
    // }

    // Write modified array back to JSON file
    fs.writeFileSync('Jsons/Books/books.json', JSON.stringify(req.body))
    res.status(201).json(req.body)
}
