# govdata-dashboard

A simple dashboard thats shows data sets each federal ministry has made available on GovData


## How it looks 

![Screenshot 2024-09-15 at 16 56 31](https://github.com/user-attachments/assets/0b4f8f5e-6a6f-4148-a33c-26b1168800d8)

## Installation and Basic Instructions

Clone down this repository. You will need `node` and `npm` installed globally on your machine.  

### run and work on development mode

Installation:

Please make sure to run this command:

```bash
npm run prepare
```

this will install all precommit hooks needed to work on this repo

Install dependencies:
```bash 
npm install
```  

To Start dev server:

```bash
npm run dev
```  

Visit App on this url:

```bash 
http://localhost:3000
```  

Run tests in watch mode:

```bash 
npm run test
```

Run linter:

```bash
npm run lint
```

Fix linted error: 

```bash
npm run lint:fix
```

Run Prettier: 

```bash
npm run prettier
```


### run a production version 
To build for production:

```bash
npm run build
```

To run production version:

```bash
npm run start
```

Visit running instance on
```bash
http://localhost:9000
```


## Reflection

  - I used [Express](https://expressjs.com/) configuation to have a minimalistic approach
  - I used serverside rendering to keep it simple, using an isomorphic approach would speed up user experience  
  - Husky precommit hook will help consistency in styling and comments
  - the project makes use of the following project/tools :
      - [typescript](https://www.typescriptlang.org/)
      - [eslint](https://eslint.org/)
      - [tailwind](https://tailwindcss.com/)
      - [supertest](https://www.npmjs.com/package/supertest)
      - [jest](https://jestjs.io/)
      - [prettier](https://prettier.io/)
      - [husky](https://typicode.github.io/husky)
   
        
## License

[MIT License](https://opensource.org/licenses/MIT) © [Lorenc Estrefi](https://jlorenc1986.github.io)

<p align="right">(<a href="#readme-top">back to top</a>)</p>
