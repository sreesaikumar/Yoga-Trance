const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');
const constdata = require('../data/constdata');

const MoreAboutPathsIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'MoreAboutPathsIntent';
    },
    handle(handlerInput) {
      const slot = handlerInput.requestEnvelope.request.intent.slots.path_name.value.toLowerCase();
       
      if(constdata.karmayoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.KARMAYOGA_MOREINFO;
                              
           
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
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
       
      else if (constdata.bhakthiyoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.BHAKTHIYOGA_MOREINFO;
                              
           
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
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
       
      else if (constdata.rajayoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.RAJAYOGA_MOREINFO;
                              
           
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
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      } 
       
      else if (constdata.gyanayoga.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.GYANAYOGA_MOREINFO;
          
           
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
            .withSimpleCard('COLOSSEUM', speakOutput)
            .getResponse();
      }
      
      else {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.ERROR_MOREINFO;
        const repromptOutput = speechdata.ERROR_MOREINFO_REPROMPT;
        
           
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
            .withSimpleCard('Error', speakOutput)
            .getResponse();
      }
       
    }
};

module.exports = MoreAboutPathsIntentHandler;