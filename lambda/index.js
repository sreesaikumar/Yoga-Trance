const Alexa = require('ask-sdk-core');
const speechdata = require('./data/speechdata');
const constdata = require('./data/constdata');

// const {
//   LaunchRequestHandler
  
// } = require('./handlers/');

const LaunchRequestHandler = require('./handlers/launchRequestHandler');
const YogaIntroIntentHandler = require('./handlers/yogaIntroIntentHandler');
const YogaPathsIntentHandler = require('./handlers/yogaPathsIntentHandler');
const MoreAboutPathsIntentHandler = require('./handlers/moreAboutPathsIntentHandler');
const YogaPathSubCategoriesIntentHandler = require('./handlers/yogaPathSubCategoriesIntentHandler');
const YogaPathPrinciplesIntentHandler = require('./handlers/yogaPathPrinciplesIntentHandler');
const PracticeYogaAsanasIntentHandler = require('./handlers/practiceYogaAsanasIntentHandler');
const HelpIntentHandler = require('./handlers/helpIntentHandler');
const YesNoIntentHandler = require('./handlers/yesNoIntentHandler');
const CancelAndStopIntentHandler = require('./handlers/cancelAndStopIntentHandler');


const SessionEndedRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'SessionEndedRequest';
    },
    handle(handlerInput) {
        return handlerInput.responseBuilder.getResponse();
    }
};

// Captures different error situations like any syntax or routing errors or errors stating the request handler chain is not found or not implementing a handler for the intents that are being invoked or included it in the skill builder below.
const ErrorHandler = {
    canHandle() {
        return true;
    },
    handle(handlerInput, error) {
        console.log(`~~~~ Error handled: ${error.stack}`);
        const speakOutput = `Sorry, I had trouble doing what you asked. Please try again.`;

        return handlerInput.responseBuilder
            .speak(speakOutput)
            .reprompt(speakOutput)
            .getResponse();
    }
};


//SkillBuilder acts as the entry point for the skill, routing all request, response and payloads to the above defined handlers.
exports.handler = Alexa.SkillBuilders.custom()
    .addRequestHandlers(
        LaunchRequestHandler,//All above defined handlers are included below. The order of handlers are only processed from top to bottom order.
        YogaIntroIntentHandler,
        YogaPathsIntentHandler,
        MoreAboutPathsIntentHandler,
        YogaPathSubCategoriesIntentHandler,
        YogaPathPrinciplesIntentHandler,
        PracticeYogaAsanasIntentHandler,
        YesNoIntentHandler,
        HelpIntentHandler,
        CancelAndStopIntentHandler,
        SessionEndedRequestHandler,
    )
    .addErrorHandlers(
        ErrorHandler,
    )
    .lambda();