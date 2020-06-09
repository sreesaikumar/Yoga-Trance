const Alexa = require('ask-sdk-core');
const speechdata = require('../data/speechdata');
const constdata = require('../data/constdata');

const YogaPathPrinciplesIntentHandler = {
    canHandle(handlerInput) {
        return Alexa.getRequestType(handlerInput.requestEnvelope) === 'IntentRequest'
            && Alexa.getIntentName(handlerInput.requestEnvelope) === 'YogaPathPrinciples';
    },
    handle(handlerInput) {
      const slot = handlerInput.requestEnvelope.request.intent.slots.principle_name.value.toLowerCase();
       
      if(constdata.satsang.includes(slot)) {
           
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SATSANG;
        const repromptOutput = speechdata.SATSANG_REPROMPT;
        
           
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
       
      else if (constdata.harikatha.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.HARIKATHA;
        const repromptOutput = speechdata.HARIKATHA_REPROMPT;
        
           
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
       
    //   else if (constdata.shraddha.includes(slot)) {
    //     const data = require('../apl/data/ChristtheRedeemer.json');
    //     const layout = require('../apl/layouts/ChristtheRedeemer.json');
    //     const speakOutput = speechdata.SHRADDHA;
    //     const repromptOutput = speechdata.SHRADDHA_REPROMPT;
        
    //       if (supportsAPL(handlerInput)) {
    //          handlerInput.responseBuilder
    //          .addDirective({
    //             type: 'Alexa.Presentation.APL.RenderDocument',
    //             version: '1.0',
    //             document: layout,
    //             datasources: data
    //         })
    //     }
    //     return handlerInput.responseBuilder
    //         .speak(speakOutput)
    //         .reprompt(repromptOutput)
    //         .withSimpleCard('COLOSSEUM', speakOutput)
    //         .getResponse();
    //   } 
       
      else if (constdata.ishvarabhajana.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.ISHVARABHAJANA;
        const repromptOutput = speechdata.ISHVARABHAJANA_REPROMPT;
        
           
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
      
      else if (constdata.mantrajapa.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.MANTRAJAPA;
        const repromptOutput = speechdata.MANTRAJAPA_REPROMPT;
        
           
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
       
      else if (constdata.shamadama.includes(slot)) {
        const data = require('../apl/data/ChristtheRedeemer.json');
        const layout = require('../apl/layouts/ChristtheRedeemer.json');
        const speakOutput = speechdata.SHAMADAMA;
        const repromptOutput = speechdata.SHAMADAMA_REPROMPT;
        
           
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
       
      else if (constdata.santokaadar.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.SANTOKAADAR;
        const repromptOutput = speechdata.SANTOKAADAR_REPROMPT;
        
           
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
      
      else if (constdata.santosha.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SANTOSHA;
        const repromptOutput = speechdata.SANTOSHA_REPROMPT;
        
           
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
       
    //   else if (constdata.ishavarapranidhana.includes(slot)) {
    //     const data = require('../apl/data/ChristtheRedeemer.json');
    //     const layout = require('../apl/layouts/ChristtheRedeemer.json');
    //     const speakOutput = speechdata.ISHVARAPRANIDHANA;
    //     const repromptOutput = speechdata.ISHVARAPRANIDHANA_REPROMPT;
        
    //       if (supportsAPL(handlerInput)) {
    //          handlerInput.responseBuilder
    //          .addDirective({
    //             type: 'Alexa.Presentation.APL.RenderDocument',
    //             version: '1.0',
    //             document: layout,
    //             datasources: data
    //         })
    //     }
    //     return handlerInput.responseBuilder
    //         .speak(speakOutput)
    //         .reprompt(repromptOutput)
    //         .withSimpleCard('COLOSSEUM', speakOutput)
    //         .getResponse();
    //   } 
       
      else if (constdata.ahimsa.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.AHIMSA;
        const repromptOutput = speechdata.AHIMSA_REPROMPT;
        
           
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
      
      else if (constdata.satya.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SATYA;
        const repromptOutput = speechdata.SATYA_REPROMPT;
        
           
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
       
      else if (constdata.asteya.includes(slot)) {
        const data = require('../apl/data/ChristtheRedeemer.json');
        const layout = require('../apl/layouts/ChristtheRedeemer.json');
        const speakOutput = speechdata.ASTEYA_BRIEF;
        const repromptOutput = speechdata.ASTEYA_BRIEF_REPROMPT;
        
           
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
       
      else if (constdata.brahmacharya.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.BRAHMACHARYA_BRIEF;
        const repromptOutput = speechdata.BRAHMACHARYA_BRIEF_REPROMPT;
        
           
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
      
      else if (constdata.aparigraha.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.APARIGRAHA;
        const repromptOutput = speechdata.APARIGRAHA_REPROMPT;
        
           
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
       
      else if (constdata.saucha.includes(slot)) {
        const data = require('../apl/data/ChristtheRedeemer.json');
        const layout = require('../apl/layouts/ChristtheRedeemer.json');
        const speakOutput = speechdata.SAUCHA;
        const repromptOutput = speechdata.SAUCHA_REPROMPT;
        
           
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
       
      else if (constdata.santosh.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.SANTOSH;
        const repromptOutput = speechdata.SANTOSH_REPROMPT;
        
           
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
      
      else if (constdata.tapa.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.TAPA;
        const repromptOutput = speechdata.TAPA_REPROMPT;
        
           
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
      
        else if (constdata.svadhyaya.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.SVADHYAYA;
        const repromptOutput = speechdata.SVADHYAYA_REPROMPT;
        
           
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
            .withSimpleCard('SVADHYAYA', speakOutput)
            .getResponse();
      }
      
        else if (constdata.ishavarapranidhana.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.ISHVARAPRANIDHANA;
        const repromptOutput = speechdata.ISHVARAPRANIDHANA_REPROMPT;
        
           
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
      
      else if (constdata.shama.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.SHAMA;
        const repromptOutput = speechdata.SHAMA_REPROMPT;
        
           
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
       
      else if (constdata.dama.includes(slot)) {
        const data = require('../apl/data/ChristtheRedeemer.json');
        const layout = require('../apl/layouts/ChristtheRedeemer.json');
        const speakOutput = speechdata.DAMA;
        const repromptOutput = speechdata.DAMA_REPROMPT;
        
           
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
       
      else if (constdata.uparati.includes(slot)) {
        const data = require('../apl/data/Petra.json');
        const layout = require('../apl/layouts/Petra.json');
        const speakOutput = speechdata.UPARATI;
        const repromptOutput = speechdata.UPARATI_REPROMPT;
        
           
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
      
      else if (constdata.titiksha.includes(slot)) {
        const data = require('../apl/data/MachuPicchu.json');
        const layout = require('../apl/layouts/MachuPicchu.json');
        const speakOutput = speechdata.TITIKSHA;
        const repromptOutput = speechdata.TITIKSHA_REPROMPT;
        
           
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
      
    //   else if (constdata.shraddha.includes(slot)) {
    //     const data = require('../apl/data/MachuPicchu.json');
    //     const layout = require('../apl/layouts/MachuPicchu.json');
    //     const speakOutput = speechdata.SHRADDHA;
    //     const repromptOutput = speechdata.SHRADDHA_REPROMPT;
        
    //       if (supportsAPL(handlerInput)) {
    //          handlerInput.responseBuilder
    //          .addDirective({
    //             type: 'Alexa.Presentation.APL.RenderDocument',
    //             version: '1.0',
    //             document: layout,
    //             datasources: data
    //         })
    //     }
    //     return handlerInput.responseBuilder
    //         .speak(speakOutput)
    //         .reprompt(repromptOutput)
    //         .withSimpleCard('COLOSSEUM', speakOutput)
    //         .getResponse();
    //   }
       
      else if (constdata.samadhana.includes(slot)) {
        const data = require('../apl/data/ChristtheRedeemer.json');
        const layout = require('../apl/layouts/ChristtheRedeemer.json');
        const speakOutput = speechdata.SAMADHANA;
        const repromptOutput = speechdata.SAMADHANA_REPROMPT;
        
           
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
        const speakOutput = speechdata.ERROR_PRINCIPLE;
        const repromptOutput = speechdata.ERROR_PRINCIPLE_REPROMPT;
        
           
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

module.exports = YogaPathPrinciplesIntentHandler;