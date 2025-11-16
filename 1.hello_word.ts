import {Agent,run} from '@openai/agents'

const agent = new Agent({
    // model: 'gpt-4o', //specify the model to use
    name: 'hello-world-agent',
    // instructions: 'You are a friendly agent that greets the user.',

    // instructions should  also be dyanamic functions
    instructions: function() {
        if (window.location  === 'India') {
            return 'Greet the user with "Namaste World!"'
        } else {
            return 'Greet the user with "Hello World!"'
        }   
    }


})

// to run this there is a function to this llm

const resut = await run (agent, 'Say hello to the world!')

console.log (resut)





// The Agent constructor takes a single configuration object. The most commonly‑used properties are shown below.

// Property  ||	Required ||	Description
// name	     ||Yes	     ||A short human‑readable identifier.
// instructions	||   yes ||	System prompt (string or function – see Dynamic instructions).
// model	|| no ||	Model name or a custom Model implementation.
// modelSettings	no	Tuning parameters (temperature, top_p, etc.). If the properties you need aren’t at the top level, you can include them under providerData.
// tools	no	Array of Tool instances the model can call.