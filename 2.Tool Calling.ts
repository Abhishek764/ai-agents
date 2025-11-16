import {Agent,run, tool} from '@openai/agents'
import { exec } from 'child_process';
import { get } from 'http';
import { z } from "zod";
import axios from 'axios';

// --------------------
// WEATHER TOOL
// --------------------

const getWeatherTool = tool( {    name: 'get-weather',
    description: 'Get the current weather for a given location.',
    parameters: z.object({
        location: z.string().describe('The city and state, e.g. San Francisco, CA'),
    }), 
    // execute: async ({ location }) => {
    //     return new Promise((resolve, reject) => {
    //         exec(`curl wttr.in/${location}?format=3`, (error, stdout, stderr) => {
    //             if (error) {
    //                 reject(`Error fetching weather: ${stderr}`);
    //             } else {
    //                 resolve(stdout.trim());
    //             }
    //         });
    //     });

    
    execute :async function ({city}) {
        const url =  `https://wttr.in/${city.tolowerCase()}?format=%C+%t+%w`
        const response = axios.get (url, {responseType: 'text'})
        return ` The weather in ${city} is ${response.data}`
        
    }

})

// --------------------
// AGENT SETUP
// --------------------

const agent = new Agent({
    name: 'Weather-Agent',
    instructions: 'You are an agent that can get the weather .',
  tools: [getWeatherTool],
  model: 'gpt-4o',
})

// --------------------
// MAIN FUNCTION
// --------------------
async function main (query = '') {
    const result = await run(agent, query)
    console.log(result.finalOutput);

}

main('What is the weather in New York today?')
























// formatted code 
import { Agent, run, tool } from '@openai/agents';
import axios from 'axios';
import { z } from "zod";

// --------------------
// WEATHER TOOL
// --------------------
const getWeatherTool = tool({
  name: "get-weather",
  description: "Get the current weather for a given location.",
  parameters: z.object({
    city: z.string().describe("City name, e.g. New York"),
  }),

  execute: async function ({ city }) {
    const formattedCity = city.toLowerCase();

    const url = `https://wttr.in/${formattedCity}?format=%C+%t+%w`;

    const response = await axios.get(url, { responseType: "text" });

    return `The weather in ${city} is: ${response.data}`;
  },
});

// --------------------
// AGENT SETUP
// --------------------
const agent = new Agent({
  name: "Weather-Agent",
  instructions: "You are an agent that can fetch weather information.",
  tools: [getWeatherTool],
  model: "gpt-4o",
});

// --------------------
// MAIN FUNCTION
// --------------------
async function main(query = "") {
  const result = await run(agent, query);
  console.log(result.finalOutput);
}

main("What is the weather in New York today?");
