const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');
const constdata = require('../data/constdata');

const YesNoIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && (Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.YesIntent'
                || Alexa.getIntentName(handlerInput.requestEnvelope) === 'AMAZON.NoIntent');
    },
    handle(handlerInput) {
        const YesIntent = handlerInput.requestEnvelope.request.intent.name === 'AMAZON.YesIntent';
        const NoIntent = handlerInput.requestEnvelope.request.intent.name === 'AMAZON.NoIntent';
        
        const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
        const { position } = sessionAttributes;
        let currentAsanasPosition = null;
        
        if(YesIntent) {
           
           let speakOutput = ``;
           currentAsanasPosition = sessionAttributes.position;
           console.log('This position in YesIntent at Initialization Section' + currentAsanasPosition);
           
           if ((YesIntent) && (currentAsanasPosition === speechdata.URDHVAHASTASANA_BEGINNER_TWO)) {
                speakOutput = speechdata.URDHVAHASTASANA_BEGINNER_TWO;
                sessionAttributes.position = speechdata.ARTHAUTTANASANA_BEGINNER_THREE;
                    const data = require('../apl/data/MachuPicchu.json');
                    const layout = require('../apl/layouts/MachuPicchu.json');
                    // const speakOutput = speechdata.ERROR_ASANA_LEVEL;
                    // const repromptOutput = speechdata.ERROR_ASANA_LEVEL_REPROMPT;
           
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
                    }
                    return handlerInput.responseBuilder
                        .speak(speakOutput)
                        // .reprompt(repromptOutput)
                        .withSimpleCard('Yoga Asanas', speakOutput)
                        .getResponse();
            } 
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ARTHAUTTANASANA_BEGINNER_THREE)) {
                speakOutput = speechdata.ARTHAUTTANASANA_BEGINNER_THREE;
                sessionAttributes.position = speechdata.ASANA_BEGINNER_FOUR;
                    const data = require('../apl/data/MachuPicchu.json');
                    const layout = require('../apl/layouts/MachuPicchu.json');
                    // const repromptOutput = speechdata.ERROR_ASANA_LEVEL_REPROMPT;
                    
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
                    }
                        return handlerInput.responseBuilder
                            .speak(speakOutput)
                            // .reprompt(repromptOutput)
                            .withSimpleCard('Yoga Asanas', speakOutput)
                            .getResponse();
            }
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_BEGINNER_FOUR)) {
                speakOutput = speechdata.ASANA_BEGINNER_FOUR;
            }
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_INTERMEDIATE_TWO)) {
                speakOutput = speechdata.ASANA_INTERMEDIATE_TWO;
                sessionAttributes.position = speechdata.ASANA_INTERMEDIATE_THREE;
                console.log('Updated from asan-2 to asana-3. This is in YesIntent If-Else Section.' + currentAsanasPosition);
            } 
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_INTERMEDIATE_THREE)) {
                speakOutput = speechdata.ASANA_INTERMEDIATE_THREE;
                sessionAttributes.position = speechdata.ASANA_INTERMEDIATE_FOUR;
                console.log('Updated from asan-3 to asana-4. This is in YesIntent If-Else Section.' + currentAsanasPosition);
            }
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_INTERMEDIATE_FOUR)) {
                speakOutput = speechdata.ASANA_INTERMEDIATE_FOUR;
            }
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_ADVANCED_TWO)) {
                speakOutput = speechdata.ASANA_ADVANCED_TWO;
                sessionAttributes.position = speechdata.ASANA_ADVANCED_THREE;
                console.log('Updated from asan-2 to asana-3. This is in YesIntent If-Else Section.' + currentAsanasPosition);
            } 
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_ADVANCED_THREE)) {
                speakOutput = speechdata.ASANA_ADVANCED_THREE;
                sessionAttributes.position = speechdata.ASANA_ADVANCED_FOUR;
                console.log('Updated from asan-3 to asana-4. This is in YesIntent If-Else Section.' + currentAsanasPosition);
            }
            else if ((YesIntent) && (currentAsanasPosition === speechdata.ASANA_ADVANCED_FOUR)) {
                speakOutput = speechdata.ASANA_ADVANCED_FOUR;
                console.log('No Update its last asana-4. This is in YesIntent If-Else Section.' + currentAsanasPosition);
            }
            
            return handlerInput.responseBuilder
                .speak(speakOutput)
                .getResponse();
        }
        
        if(NoIntent) {
           
           const speakOutput = `That was great interacting with you. Have a nice day.`;
          sessionAttributes.position = undefined ;
           
           return handlerInput.responseBuilder
                .speak(speakOutput)
                // .withShouldEndSession(true)
                .getResponse();
        }
        
    }
};

module.exports = YesNoIntentHandler;