const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');
const constdata = require('../data/constdata');

const PracticeYogaAsanasIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'PracticeYogaAsanasIntent';
    },
    handle(handlerInput) {
      const slot = handlerInput.requestEnvelope.request.intent.slots.level_type.value.toLowerCase();
      const confirmationStatus = handlerInput.requestEnvelope.request.intent.confirmationStatus;
      const sessionAttributes = handlerInput.attributesManager.getSessionAttributes();
      const { position } = sessionAttributes;
      
      
      if ((confirmationStatus === 'CONFIRMED') && (constdata.beginner.includes(slot)) ) {
    
      let speakOutput = '';
      
            if (typeof position === 'undefined') {
              speakOutput = speechdata.TADASANA_BEGINNER_ONE;
              sessionAttributes.position = speechdata.URDHVAHASTASANA_BEGINNER_TWO;
            //   sessionAttributes.position = {
            //     'asana_name' : speechdata.URDHVAHASTASANA_BEGINNER_TWO,
            //     'level_type': 'beginner'
            //   };
            }
            
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        // const speakOutput = speechdata.ASANA_BEGINNER_ONE;
        // const repromptOutput = speechdata.ASANA_BEGINNER_ONE_REPROMPT;
        
        
           
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
      
      else if ((confirmationStatus === 'CONFIRMED') && (constdata.intermediate.includes(slot)) ) {
    
      let speakOutput = '';
      
            if (typeof position === 'undefined') {
              speakOutput = speechdata.ASANA_INTERMEDIATE_ONE;
              sessionAttributes.position = speechdata.ASANA_INTERMEDIATE_TWO;
            //   sessionAttributes.position = {
            //     'asana_name' : speechdata.ASANA_TWO,
            //     'level_type': 'beginner'
            //   };
            }
            
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        // const speakOutput = speechdata.ASANA_INTERMEDIATE_ONE;
        // const repromptOutput = speechdata.ASANA_INTERMEDIATE_ONE_REPROMPT;
        
        
           
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
      
      else if ((confirmationStatus === 'CONFIRMED') && (constdata.advanced.includes(slot)) ) {
    
      let speakOutput = '';
      
            if (typeof position === 'undefined') {
              speakOutput = speechdata.ASANA_ADVANCED_ONE;
              sessionAttributes.position = speechdata.ASANA_ADVANCED_TWO;
            //   sessionAttributes.position = {
            //     'asana_name' : speechdata.ASANA_TWO,
            //     'level_type': 'beginner'
            //   };
            }
            
      handlerInput.attributesManager.setSessionAttributes(sessionAttributes);
      
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        // const speakOutput = speechdata.ASANA_ADVANCED_ONE;
        // const repromptOutput = speechdata.ASANA_ADVANCED_ONE_REPROMPT;
        
        
           
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
      
      else {
        
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.ERROR_ASANA_LEVEL;
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
       
    }
};

module.exports = PracticeYogaAsanasIntentHandler;