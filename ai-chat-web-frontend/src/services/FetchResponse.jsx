import axios from 'axios';
import React from 'react'

const API_URL = "http://localhost:8081/api/v1/ai/ask";

export const FetchResponse = async (question) => {

  try {
    const response = await axios.post(API_URL, { question });
    return response;
  } catch (error) {
    console.log(error);
  }
}
