# Node.js API for Number Classification API

This is a simple Node.js API, it is a get request that takes a number and returns interesting mathematical properties about it, along with a fun fact.

## Setup Instructions

1. Clone this repository:
   ```bash
   git clone https://github.com/Uthmanduro/hng_2025_S2.git
   ```
2. Navigate to the project repository

   ```bash
   cd hng_2025_S2

   ```

3. install required dependencies
   ```bash
    npm install
   ```
4. start the server
   ```bash
    npm run dev
   ```
5. access the api locally with:
   ` http://localhost:8000`

## API Documentation

Endpoint:

`GET /`

## Response:

```json
{
  "number": 371,
  "is_prime": false,
  "is_perfect": false,
  "properties": ["armstrong", "odd"],
  "digit_sum": 11, // sum of its digits
  "fun_fact": "371 is an Armstrong number because 3^3 + 7^3 + 1^3 = 371" //gotten from the numbers API
}
```

## Response Codes:

`200 OK`: Data returns successfully

`404 Not Found`: when the endpoint is unavailabe

## Example Usage

```text
curl https://hng-2025-s1.vercel.app/
```

## Backlinks

[Hire Node.js Developers](https://hng.tech/hire/nodejs-developers)

## Deployment

The API has been deployed to a publicly accessible endpoint:

https://hng-2025-s1.vercel.app/
