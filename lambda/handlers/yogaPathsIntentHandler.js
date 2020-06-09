const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');
const constdata = require('../data/constdata');

const YogaPathsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YogaPathsIntent';
    },
    handle(handlerInput) {
      const slot = handlerInput.requestEnvelope.request.intent.slots.path_name.value.toLowerCase();
       
      if(constdata.karmayoga.includes(slot)) {
           
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.KARMAYOGA_BRIEF;
        const repromptOutput = speechdata.KARMAYOGA_BRIEF_REPROMPT;
        
           
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
            .reprompt(repromptOutput)
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
       
      else if (constdata.bhakthiyoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.BHAKTHIYOGA_BRIEF;
        const repromptOutput = speechdata.BHAKTHIYOGA_BRIEF_REPROMPT;
        
           
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
            .reprompt(repromptOutput)
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
       
      else if (constdata.rajayoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.RAJAYOGA_BRIEF;
        const repromptOutput = speechdata.RAJAYOGA_BRIEF_REPROMPT;
        
           
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
            .reprompt(repromptOutput)
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      } 
       
      else if (constdata.gyanayoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.GYANAYOGA_BRIEF;
        const repromptOutput = speechdata.GYANAYOGA_BRIEF_REPROMPT;
        
           
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
            .reprompt(repromptOutput)
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
      
      else {
        const data = require('../apl/data/intro.json');
        const layout = require('../apl/layouts/intro.json');
        const speakOutput = speechdata.BRIEF;
        const repromptOutput = speechdata.BRIEF_REPROMPT;
        
           
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
            .reprompt(repromptOutput)
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
       
    }
};

module.exports = YogaPathsIntentHandler;