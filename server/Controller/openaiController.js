const express = require('express')

const { Configuration, OpenAIApi } = require("openai");


const configuration = new Configuration({
  organization: "org-w5XMZvaWQMQGsk5MjDS6176t",
  apiKey: process.env.OPENAI_API_KEY,
});
const openai = new OpenAIApi(configuration);

const callApi = async (req, res) => {
  const message = req.body.message
  // console.log('message:', message)
  try {
    const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: message,
        max_tokens: 100,
        temperature: 0,
      })
    
    const data =  response.data.choices[0].text             
    if(data) res.status(200).json({
      success:true,
      data:data
    })
    else res.status(400).json({success:false, data:"no response recieved!"})
   
  }catch(error){
    if(error.response){
      console.log(error.response.status)
      console.log(error.response.data)
    }else{
      console.log(error.message)
    }
    res.status(400).json({
      success:false,
      data:"No response acquired!"
    })
  }

}
 
module.exports = {callApi};