# ChatGpt2.1
chat gpt web app build with nodejs and express on the backend and react on front end
that is integrated with OpenAi'text-davinci-003' model to generates a random image based on the input text

**Documentation to OpenAi is [here](https://platform.openai.com/docs/introduction)**
## Build
Clone this repository and import into text editor
```bash
git clone https://github.com/bishwasshrestha/ChatGpt2.1.git
```

## Screenshot
![image](https://user-images.githubusercontent.com/29711192/221233512-befedee7-98f0-460e-ae0b-49f4a9c104b9.png)

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
