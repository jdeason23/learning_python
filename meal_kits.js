/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**

 /***********************************************************
 To Do
 
 Create templates for each screen for the demo
 Test navigating between screens (must keep session open)
 add a video player option
 
 ************************************************************/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).

const languageStrings = {
    'en': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
            ],
            SKILL_NAME: 'Chick-fil-A Meal Kits',
            GET_FACT_MESSAGE: "Here's the meal information ",
            HELP_MESSAGE: 'You can say tell me how to make the flatbread, or, you can say exit... What can I help you with?',
            HELP_REPROMPT: 'What can I help you with?',
            STOP_MESSAGE: 'Goodbye!',
        },
    },
    'en-US': {
        translation: {
            FACTS: [
                'A year on Mercury is just 88 days long.',
                'Despite being farther from the Sun, Venus experiences higher temperatures than Mercury.',
                'Venus rotates counter-clockwise, possibly because of a collision in the past with an asteroid.',
            ],
            SKILL_NAME: 'Chick-fil-A Meal Kits',
        },
    },
};

const handlers = {
    'LaunchRequest': function () {
        console.log("*** inside LaunchRequest ***")
        this.emit('WelcomeIntent');
     },
    'GetNewFactIntent': function () {
        this.emit('GetFact');
    },
    'GetFact': function () {
        console.log("*** inside GetFactIntent ***")
        // Get a random space fact from the space facts list
        // Use this.t() to get corresponding language data
        const factArr = this.t('FACTS');
        const factIndex = Math.floor(Math.random() * factArr.length);
        const randomFact = factArr[factIndex];

        // Create speech output
        var speechOutput = this.t('GET_FACT_MESSAGE') + randomFact;

        //check to see if the device we're working with supports display directives
        //enable the simulator if you're testing
        if(supportsDisplay.call(this)||isSimulator.call(this)) {
          console.log("has display:"+ supportsDisplay.call(this));
          console.log("is simulator:"+isSimulator.call(this));
          var content = {
             "hasDisplaySpeechOutput" : speechOutput,
             "hasDisplayRepromptText" : randomFact,
             "simpleCardTitle" : this.t('SKILL_NAME'),
             "simpleCardContent" : "",
             "bodyTemplateTitle" : this.t('GET_FACT_MESSAGE'),
             "bodyTemplateContent" : "",
             "templateToken" : "factBodyTemplate",
             "askOrTell" : ":tell",
             "sessionAttributes": {}
          };
          renderTemplate.call(this, content);
        } else {
        // Just use a card if the device doesn't support a card.
          this.response.cardRenderer(this.t('SKILL_NAME'), randomFact);
          this.response.speak(speechOutput);
          this.emit(':responseReady');
        }
    },
    'AMAZON.HelpIntent': function () {
        console.log("*** inside HelpIntent ***")
        const speechOutput = this.t('HELP_MESSAGE');
        const reprompt = this.t('HELP_MESSAGE');
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        console.log("*** inside CancelIntent ***")
        const reprompt = this.t('STOP_MESSAGE');
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.MoreIntent': function () {
        console.log("*** inside MoreIntent ***")
        const reprompt = this.t('STOP_MESSAGE');
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        console.log("*** inside StopIntent ***")
        this.response.speak(this.t('STOP_MESSAGE'));
        this.emit(':responseReady');
    },
    'WelcomeIntent': function () {
        console.log("*** inside WelcomeIntent ***")
        // Create speech output
        var speechOutput = "Thank you for choose a Chick-fil-A Meal Kit";

        //check to see if the device we're working with supports display directives
        //enable the simulator if you're testing
        if(supportsDisplay.call(this)||isSimulator.call(this)) {
          console.log("has display:"+ supportsDisplay.call(this));
          console.log("is simulator:"+isSimulator.call(this));
          var content = {
             "hasDisplaySpeechOutput" : speechOutput,
             "hasDisplayRepromptText" : "Reprompt Text",
             "simpleCardTitle" : "",
             "simpleCardContent" : "",
             "bodyTemplateTitle" : 'Welcome to Chick-fil-A',
             "bodyTemplateContent" : "",
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/Sample_Welcome.jpg",
             "templateToken" : "WelcomeTemplate",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
          renderTemplate.call(this, content);
        } else {
        // Just use a card if the device doesn't support a card.
          this.response.cardRenderer("Thanks");
          this.response.speak(speechOutput);
          this.emit(':responseReady');
        }
    },
    'ShowMealsIntent': function () {
        console.log("*** inside ShowMealsIntent ***")
        // Create speech output
        var speechOutput = "Here are the various Meal Kits.";
        
        //check to see if the device we're working with supports display directives
        //enable the simulator if you're testing
        if(supportsDisplay.call(this)||isSimulator.call(this)) {
          console.log("has display:"+ supportsDisplay.call(this));
          console.log("is simulator:"+isSimulator.call(this));
          var content = {
             "hasDisplaySpeechOutput" : speechOutput,
             "hasDisplayRepromptText" : "Reprompt Text",
             "simpleCardTitle" : "",
             "simpleCardContent" : "",
             "bodyTemplateTitle" : 'Welcome to Chick-fil-A',
             "bodyTemplateContent" : "",
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/Sample_Menu.jpg",
             "templateToken" : "MenuTemplate",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
          renderTemplate.call(this, content);
        } else {
        // Just use a card if the device doesn't support a card.
          this.response.cardRenderer("Thanks");
          this.response.speak(speechOutput);
          this.emit(':responseReady');
        }
    },
    'PlayVideoIntent': function () {
        console.log("*** inside PlayVideoIntent ***")
        // Create speech output
        var speechOutput = "Here are the various Meal Kits.";
        
        //check to see if the device we're working with supports display directives
        //enable the simulator if you're testing
        if(supportsDisplay.call(this)||isSimulator.call(this)) {
          console.log("has display:"+ supportsDisplay.call(this));
          console.log("is simulator:"+isSimulator.call(this));
          var content = {
             "hasDisplaySpeechOutput" : speechOutput,
             "hasDisplayRepromptText" : "Reprompt Text",
             "simpleCardTitle" : "",
             "simpleCardContent" : "",
             "bodyTemplateTitle" : 'Welcome to Chick-fil-A',
             "bodyTemplateContent" : "",
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/Sample_Menu.jpg",
             "templateToken" : "PlayVideoTemplate",
             "askOrTell" : ":ask",
             "sessionAttributes": {}
          };
          renderTemplate.call(this, content);
        } else {
        // Just use a card if the device doesn't support a card.
          this.response.cardRenderer("Thanks");
          this.response.speak(speechOutput);
          this.emit(':responseReady');
        }
    },
    'GetInfoIntent': function () {
        console.log("*** inside GetInfoIntent ***")
        this.response.speak(this.t('STOP_MESSAGE'));
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    alexa.resources = languageStrings;
    alexa.registerHandlers(handlers);
    alexa.execute();
};


//==============================================================================
//=========================== Helper Functions  ================================
//==============================================================================

function supportsDisplay() {
  var hasDisplay =
    this.event.context &&
    this.event.context.System &&
    this.event.context.System.device &&
    this.event.context.System.device.supportedInterfaces &&
    this.event.context.System.device.supportedInterfaces.Display

  return hasDisplay;
}

function isSimulator() {
  var isSimulator = !this.event.context; //simulator doesn't send context
  return isSimulator;
}

function renderTemplate (content) {

  //create a template for each screen you want to display.
  //This example has one that I called "factBodyTemplate".
  //define your templates using one of several built in Display Templates
  //https://developer.amazon.com/public/solutions/alexa/alexa-skills-kit/docs/display-interface-reference#display-template-reference


   switch(content.templateToken) {
       case "WelcomeTemplate":
           var response = {
             "version": "1.0",
             "response": {
               "directives": [
                 {
                "type": "Hint",
                "hint": {
                    "type": "PlainText",
                    "text": "Show Meal Kits"
                    }
                },
                 {
                   "type": "Display.RenderTemplate",
                   "template": {
                     "type": "BodyTemplate6",
                     "title": content.bodyTemplateTitle,
                     "token": content.templateToken,
                     "backgroundImage":{
                            "contentDescription":"background Image",
                            "sources":[
                                {
                                "url": content.backgroundImage
                                }
                                ]
                    },
                     "textContent": {
                       "primaryText": {
                         "type": "RichText",
                         "text": "<font size = '5'>"+content.bodyTemplateContent+"</font>"
                       }
                     },
                     "backButton": "HIDDEN"
                   }
                 }
               ],
               "outputSpeech": {
                 "type": "SSML",
                 "ssml": "<speak>"+content.hasDisplaySpeechOutput+"</speak>"
               },
               "reprompt": {
                 "outputSpeech": {
                   "type": "SSML",
                   "ssml": "<speak>"+content.hasDisplayRepromptText+"</speak>"
                 }
               },
               "shouldEndSession": content.askOrTell==":tell",
               "card": {
                 "type": "Simple",
                 "title": content.simpleCardTitle,
                 "content": content.simpleCardContent
               }
             },
             "sessionAttributes": content.sessionAttributes
           }
           this.context.succeed(response);
           break;
       case "MenuTemplate":
           console.log("*** Content passed in = ", content);
           var response = {
             "version": "1.0",
             "response": {
               "directives": [
                   
            {
                "type": "Hint",
                "hint": {
                    "type": "PlainText",
                    "text": "show number 1"
                }
            },
                    {
                      "type": "Display.RenderTemplate",
                      "template": {
                        "type": "ListTemplate2",
                        "token": "list_template_two",
                        "title": "Meal Kits",
                        "backButton": "VISIBLE",
                        "backgroundImage": {
                            "contentDescription": "Mt Fuji",
                            "sources": [
                                {
                                    "url": "https://s3.amazonaws.com/cfa-meal-kit-images/background-2.jpg"
                                }
                            ]
                        },
                        "listItems": [
                            {
                                "token": "item_1",
                                "image": {
                                    "sources": [
                                        {
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/280x280.jpg"
                                        }
                                    ],
                                    "contentDescription": "strawberry jam"
                                },
                                "textContent": {
                                    "primaryText": {
                                        "type": "PlainText",
                                        "text": "Bacon Chicken Flatbread"
                                    },
                                    "secondaryText": {
                                        "type": "RichText",
                                        "text": "<font size='2'><i>850 Calories</i></font>"
                                    }
                                }
                            },
                            {
                                "token": "item_2",
                                "image": {
                                    "sources": [
                                        {
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/menu_item_1.png"
                                        }
                                    ],
                                    "contentDescription": "garlic oil"
                                },
                                "textContent": {
                                    "primaryText": {
                                        "type": "PlainText",
                                        "text": "Southern Picnic Chicken"
                                    },
                                    "secondaryText": {
                                        "type": "RichText",
                                        "text": "<font size='2'><i>710 Calories</i></font>"
                                    }
                                }
                            },
                            {
                                "token": "item_2",
                                "image": {
                                    "sources": [
                                        {
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/280x280.jpg"
                                        }
                                    ],
                                    "contentDescription": "strawberry jam"
                                },
                                "textContent": {
                                    "primaryText": {
                                        "type": "PlainText",
                                        "text": "Kale Salad"
                                    },
                                    "secondaryText": {
                                        "type": "RichText",
                                        "text": "<font size='2'><i>500 Calories</i></font>"
                                    }
                                }
                            },
                            {
                                "token": "item_4",
                                "image": {
                                    "sources": [
                                        {
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/280x280.jpg"
                                        }
                                    ],
                                    "contentDescription": "garlic oil"
                                },
                                "textContent": {
                                    "primaryText": {
                                        "type": "PlainText",
                                        "text": "Chicken Sandwich"
                                    },
                                    "secondaryText": {
                                        "type": "RichText",
                                        "text": "<font size='2'><i>700 Calories</i></font>"
                                    }
                                }
                }

            ]
        }
                    }
               ],
               "outputSpeech": {
                 "type": "SSML",
                 "ssml": "<speak>"+content.hasDisplaySpeechOutput+"</speak>"
               },
               "reprompt": {
                 "outputSpeech": {
                   "type": "SSML",
                   "ssml": "<speak>"+content.hasDisplayRepromptText+"</speak>"
                 }
               },
               "shouldEndSession": content.askOrTell==":tell",
               "card": {
                 "type": "Simple",
                 "title": content.simpleCardTitle,
                 "content": content.simpleCardContent
               }
             },
             "sessionAttributes": content.sessionAttributes
           }
           this.context.succeed(response);
           break;
           
           case "PlayVideoTemplate":
            console.log("*** Inside the PlayVideoTemplate ***");
           console.log("*** Content passed in = ", content);
           var response = {
             "version": "1.0",
             "response": {
               "directives": [
                   {//beginning of videoItem directive
                    "type": "VideoApp.Launch",
                    "videoItem":
                        {
                        "source": "https://s3.amazonaws.com/cfa-meal-kit-images/alexa_test.mp4",
                        "metadata": {
                            "title": "Title for Sample Video",
                            "subtitle": "Secondary Title for Sample Video"
                                    }
                        }   
                    },//end of videoItem directive
                    {//beginning of BodyTemplate6 directive
                    "type": "Display.RenderTemplate",
                    "template": {
                        "type": "BodyTemplate6",
                        "token": "bt6",
                        "backButton": "VISIBLE",
                        "backgroundImage": {
                            "contentDescription": "Mt Fuji",
                            "sources": [
                                {
                                    "url": "https://s3.amazonaws.com/cfa-meal-kit-images/background-1.jpg"
                                }
                            ]
                        },
                        "textContent": {
                            "primaryText": {
                                "text": "Primary_Text",
                                "type": "PlainText"
                            },
                            "secondaryText": {
                                "text": "Secondary_Text",
                                "type": "PlainText"
                            }
                        }
                    }
                }//end of BodyTemplate6 directive
            
               ],
               "outputSpeech": {
                 "type": "SSML",
                 "ssml": "<speak>"+content.hasDisplaySpeechOutput+"</speak>"
               },
               "reprompt": {
                 "outputSpeech": {
                   "type": "SSML",
                   "ssml": "<speak>"+content.hasDisplayRepromptText+"</speak>"
                 }
               },
               "shouldEndSession": content.askOrTell==":tell",
               "card": {
                 "type": "Simple",
                 "title": content.simpleCardTitle,
                 "content": content.simpleCardContent
               }
             },
             "sessionAttributes": content.sessionAttributes
           }
           this.context.succeed(response);
           break;

           
       default:
          this.response.speak("Thanks for chatting, goodbye");
          this.emit(':responseReady');
   }

}