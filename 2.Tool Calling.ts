import {Agent,run} from '@openai/agents'

const agent = new Agent({
    name: 'tool-calling-agent',
    instructions: 'You are an agent that can call tools but currently has none available.',
  tools: [],
  model: 'gpt-4o',
})