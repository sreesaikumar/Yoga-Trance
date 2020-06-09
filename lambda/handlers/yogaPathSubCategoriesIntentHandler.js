const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');
const constdata = require('../data/constdata');

const YogaPathSubCategoriesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YogaPathSubCategoriesIntent';
    },
    handle(handlerInput) {
      const slot = handlerInput.requestEnvelope.request.intent.slots.path_sub_name.value.toLowerCase();
       
      if(constdata.sakamakarma.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SAKAMAKARMA_BRIEF;
        const repromptOutput = speechdata.SAKAMAKARMA_BRIEF_REPROMPT;
        
           
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
       
      else if (constdata.nishkamakarma.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.NISHKARMA;
        const repromptOutput = speechdata.NISHKARMA_REPROMPT;
          
           
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
       
      else if (constdata.aparabhakti.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.APARABHAKTI;
        const repromptOutput = speechdata.APARABHAKTI_REPROMPT;
        
           
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
       
      else if (constdata.parabhakti.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.PARABHAKTI;
        const repromptOutput = speechdata.PARABHAKTI_REPROMPT;
        
           
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
      
      else if (constdata.yama.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.YAMA;
        const repromptOutput = speechdata.YAMA_REPROMPT;
        
           
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
       
      else if (constdata.niyama.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.NIYAMA_BRIEF;
        const repromptOutput = speechdata.NIYAMA_BRIEF_REPROMPT;
        
           
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
       
      else if (constdata.asana.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.ASANA;
        const repromptOutput = speechdata.ASANA_REPROMPT;
        
           
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
      
      else if (constdata.pranayam.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.PRANAYAM;
        const repromptOutput = speechdata.PRANAYAM_REPROMPT;
        
           
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
       
      else if (constdata.pratyahara.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.PRATYAHARA;
        const repromptOutput = speechdata.PRATYAHARA_REPROMPT;
        
           
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
       
      else if (constdata.dharana.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.DHARANA;
        const repromptOutput = speechdata.DHARANA_REPROMPT;
        
           
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
      
      else if (constdata.dhyana.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.DHYANA;
        const repromptOutput = speechdata.DHYANA_REPROMPT;
        
           
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
       
      else if (constdata.samadhi.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SAMADHI;
        const repromptOutput = speechdata.SAMADHI_REPROMPT;
        
           
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
       
      else if (constdata.viveka.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.VIVEKA;
        const repromptOutput = speechdata.VIVEKA_REPROMPT;
        
           
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

      else if (constdata.vairagya.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.VAIRAGYA;
        const repromptOutput = speechdata.VAIRAGYA_REPROMPT;
        
           
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
       
      else if (constdata.shatsampatti.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SHATSAMPATTI;
        const repromptOutput = speechdata.SHATSAMPATTI_REPROMPT;
        
           
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
       
      else if (constdata.mumukshtva.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.MUMUKSHTVA;
        const repromptOutput = speechdata.MUMUKSHTVA_REPROMPT;
        
           
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
        const speakOutput = speechdata.ERROR_PATHSUBCATEGORY;
        const repromptOutput = speechdata.ERROR_PATHSUBCATEGORY_REPROMPT;
        
           
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

module.exports = YogaPathSubCategoriesIntentHandler;