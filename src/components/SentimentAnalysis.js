// import { ApiKeyCredentials } from '@azure/ms-rest-js';
import { TextAnalyticsClient, AzureKeyCredential } from '@azure/ai-text-analytics'

const key = process.env.REACT_APP_AZURE_API_KEY;
const endpoint = process.env.REACT_APP_AZURE_ENDPOINT;

const client = new TextAnalyticsClient(endpoint, new AzureKeyCredential(key));


export const textAnalysis = async (text) => {
  const results = await client.analyze("SentimentAnalysis", text);

  for (const result of results) {
    if (result.error === undefined) {
      console.log("Overall sentiment:", result.sentiment);
      console.log("Scores:", result.confidenceScores);
    } else {
      console.error("Encountered an error:", result.error);
    }
  }
}

export const keyPhraseExtraction = async(text) =>{
  const results = await client.analyze("KeyPhraseExtraction", text, "en");

  for (const result of results) {
    if (result.error === undefined) {
      console.log(" -- Extracted key phrases for input", result.id, "--");
      console.log(result.keyPhrases);
    } else {
      console.error("Encountered an error:", result.error);
    }
  }
}