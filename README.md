# chatGPT2.0

## OverView
chatGPT2.0 is a simple webapp built with Node.js and Express
that is integrated with OpenAi "text-davinci-003" model to generates a response to user input queries.

**Documentation to OpenAi is [here](https://platform.openai.com/docs/introduction)**
## Build
Clone this repository and import into text editor
```bash
git clone https://github.com/bishwasshrestha/chatGPT2.0.git
```

## Screenshot
![image](https://user-images.githubusercontent.com/29711192/221224987-9f47a28f-2df5-4e9c-9678-8da9fe51926a.png)
## Usage

Generate an API KEY at OpenAI and add it to the .env file.

Install the dependencies

 ``` bash
 npm install  
```
Run server

``` bash
npm start
```

Visit http://localhost:3000 in your browser.

The endpoint is at POST http://localhost:3002/openai/callapi.
