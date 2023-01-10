import * as fs from "fs";
import { v4 as uuidv4 } from "uuid";
export default function handler(req, res) {
  switch (req.method) {
    case "GET":
      readOrders(req, res);
      break;
    case "POST":
      addOrders(req, res);
      break;
    case "PUT":
      updateOrders(req, res);
      break;
    default:
      break;
  }
}

function readOrders(req, res) {
  fs.readFile("Jsons/Orders/orders.json", "utf-8", (err, data) => {
    if (err) {
      res.status(500).json({ error: "Internal server error" });
    } else {
      let array = JSON.parse(data);
   
      if (req.query && req.query.userName) {
        array = array.filter((val) => val.userName == req.query.userName);
      }
      // read books and get array of books
      const bookJson = JSON.parse(
        fs.readFileSync("Jsons/Books/books.json", "utf-8")
      );
  

      // loop on orders
      array = array.map((item1) => {
        const bookobj = bookJson.find((item2) => item2.id === item1.bookId);
        

        return {
          ...item1,
          bookDetail: {
            name: bookobj.name,
            author: bookobj.author,
            total: bookobj.total,
          },
        };
      });

      res.status(200).json(array);
    }
  });
}

function addOrders(req, res) {
  const orderId = uuidv4();
  let { bookId,bill, userName, qty, status } = req.body;

  // read the data from json
  const jsonOrderData = fs.readFileSync("Jsons/Orders/orders.json", "utf-8");

  let objOrderData = JSON.parse(jsonOrderData);
  objOrderData.push({ orderId: orderId, bookId, userName, qty, status,bill });
 
  // // write the data to json
  fs.writeFileSync("Jsons/Orders/orders.json", JSON.stringify(objOrderData));
  res.status(201).json({ msg: "tell me what you need" });
}

function updateOrders(req, res) {
  fs.writeFileSync("Jsons/Orders/orders.json", JSON.stringify(req.body));
  res.status(201).json(req.body);
}

// orderid bookid username qty status
