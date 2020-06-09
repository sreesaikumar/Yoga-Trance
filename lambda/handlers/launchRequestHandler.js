const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');


const LaunchRequestHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'LaunchRequest';
    },
    handle(handlerInput) {
        const data = require('../apl/data/samp.json');
        const layout = require('../apl/layouts/samp.json');
        const speakOutput = speechdata.LAUNCH_WELCOME;
 
        //Checks if user's "Alexa Device" has screen i.e echo spot, echo show, Fire TV Stick. 
        function supportsAPL(handlerInput) {
            const supportedInterfaces = handlerInput.requestEnvelope.context.System.device.supportedInterfaces;
            const aplInterface = supportedInterfaces['Alexa.Presentation.APL'];
            return aplInterface !== null && aplInterface !== undefined;
        }
        //If its Screen Devices then renders display
        if (supportsAPL(handlerInput)) {
             handlerInput.responseBuilder
             .addDirective({
                type: 'Alexa.Presentation.APL.RenderDocument',
                version: '1.0',
                document: layout, // Display Screen
                datasources: data   // Display Screen
            })
        return handlerInput.responseBuilder
            .speak(` `)
            .reprompt(` `)
            .getResponse();
        }
        else { 
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .reprompt(speakOutput)
                .getResponse();
        }
        
    }
};

module.exports = LaunchRequestHandler;