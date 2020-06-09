const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');

const HelpIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.HelpIntent';
    },
    handle(handlerInput) {
        const speakOutput = `You can say, Start my yoga practice or you can ask, What is Gyana Yoga? or you can ask What is nishkama karma? 
                             What would you like to know?`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};

module.exports = HelpIntentHandler;