Enhanced Calculator Microservice

This project extends a basic calculator microservice by adding support for:
- Exponentiation
- Square Root
- Modulo

Built using Node.js and Express.js.


Requirements

- [Node.js](https://nodejs.org/en/download/)
- [Postman](https://www.postman.com/downloads/) (for testing)
- Git



Setup Instructions

1. Clone the Repository

bash
git clone https://github.com/alenantony6363/sit323-2025-prac4c.git
cd sit323-2025-prac4c

2. Install Dependencies

npm install

3. Run the Server
node index.js

Server runs at:
http://localhost:3000


API Endpoints

Request Body:
                 /power
json

{
  "base": 2,
  "exponent": 3
}

Result
{
  "result": 8
}

                /sqrt

{
  "number": 25
}

Result
{
  "result": 5
}

              /modulo

{
  "dividend": 10,
  "divisor": 3
}

Result
{
  "result": 1
}

Test with Postman

Open Postman and create a new POST request.

Enter the endpoint URL, http://localhost:3000/power.

Go to Body → Select raw → Set type to JSON.

Enter the sample JSON input.

Click Send to see the response.