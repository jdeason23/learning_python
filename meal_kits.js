/* eslint-disable  func-names */
/* eslint quote-props: ["error", "consistent"]*/
/**

/* Echo Show image sizes:
 * Background image - 1024x600 - 500KB max
 * BodyTemplate1/2 - 340x340
 * Menu item for ListTemplate2 - 280x280 - 100KB max
 * 
 * 
 * 
*/

 /***********************************************************
 To Do
 
 Test navigating between screens (must keep session open)
 setup instructions template and pass in all content via the content parameter
 Add touch responses from the Menu screen - https://developer.amazon.com/docs/custom-skills/display-interface-reference.html#touch-selection-events
 Add VoiceLabs Analytics
 
 ************************************************************/

'use strict';

const Alexa = require('alexa-sdk');

const APP_ID = undefined;  // TODO replace with your app ID (OPTIONAL).
const SKILL_NAME ='Chick-fil-A Meal Kits';
const WELCOME_MESSAGE = "Thank you for choosing a Chick-fil-A Meal Kit";
const GET_FACT_MESSAGE = "Here's the meal information";
const STOP_MESSAGE = "Goodbye!";
const HELP_MESSAGE = 'You can say tell me how to make the flatbread, or, you can say exit... What can I help you with?';
const HELP_REPROMPT = 'What can I help you with?';
const UNHANDLED_MESSAGE = "I don't understand";

const handlers = {
    'LaunchRequest': function () {
        console.log("*** inside LaunchRequest ***");
        this.emit('WelcomeIntent');
     },
    'AMAZON.HelpIntent': function () {
        console.log("*** inside HelpIntent ***");
        const speechOutput = HELP_MESSAGE;
        const reprompt = HELP_MESSAGE;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.CancelIntent': function () {
        console.log("*** inside CancelIntent ***");
        const reprompt = STOP_MESSAGE;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.MoreIntent': function () {
        console.log("*** inside MoreIntent ***");
        const reprompt = STOP_MESSAGE;
        this.response.speak(speechOutput).listen(reprompt);
        this.emit(':responseReady');
    },
    'AMAZON.StopIntent': function () {
        console.log("*** inside StopIntent ***");
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    'WelcomeIntent': function () {
        console.log("*** inside WelcomeIntent ***");
        // Create speech output
        var speechOutput = WELCOME_MESSAGE;

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
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/cfa-background-black70.jpg",
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
        console.log("*** inside ShowMealsIntent ***");
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
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/chilled_grill_background_black70.jpg",
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
    'ShowInstructionsIntent': function () {
        console.log("*** inside ShowInstructionsIntent ***");
        // Create speech output
        var speechOutput = "We will walk through the steps to make a delicious meal.";
        
        //check to see if the device we're working with supports display directives
        //enable the simulator if you're testing
        if(supportsDisplay.call(this)||isSimulator.call(this)) {
          console.log("has display:"+ supportsDisplay.call(this));
          console.log("is simulator:"+isSimulator.call(this));
          var content = {
             "hasDisplaySpeechOutput" : speechOutput,
             "hasDisplayRepromptText" : "You can navigate the steps by saying Next or Back",
             "simpleCardTitle" : "",
             "simpleCardContent" : "",
             "bodyTemplateTitle" : 'Welcome to Chick-fil-A',
             "instructions" : "Preheat a clean non-stick saute pan over medium heat.  Add pan spray or 1 teaspoon of cooking oil",
             "bodyTemplateContent" : "Step 1...",
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/chilled_grill_background_black70.jpg",
             "templateToken" : "InstructionsTemplate",
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
        console.log("*** inside PlayVideoIntent ***");
        // Create speech output
        var speechOutput = "You can ask Alexa to pause, resume or restart the video once it begins.";
        
        //check to see if the device we're working with supports display directives
        //enable the simulator if you're testing
        if(supportsDisplay.call(this)||isSimulator.call(this)) {
          console.log("has display:"+ supportsDisplay.call(this));
          console.log("is simulator:"+isSimulator.call(this));
          var content = {
             "hasDisplaySpeechOutput" : speechOutput,
             "hasDisplayRepromptText" : speechOutput,
             "simpleCardTitle" : "",
             "simpleCardContent" : "",
             "bodyTemplateTitle" : 'Welcome to Chick-fil-A',
             "bodyTemplateContent" : "",
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/chilled_grill_background_black70.jpg",
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
        console.log("*** inside GetInfoIntent ***");
        this.response.speak(STOP_MESSAGE);
        this.emit(':responseReady');
    },
    "ElementSelected" : function() {
      // We will look for the value in this.event.request.token in the AnswerIntent call to compareSlots
      console.log("*** in ElementSelected function ***");
      this.emitWithState("ShowDetailsIntent");
    },
    "ShowDetailsIntent": function() {
        console.log("*** in ShowDetailsIntent function ***");
        var response = "";
        var item = this.attributes["quizitem"];
        var property = this.attributes["quizproperty"];
        console.log("*** this.attributes.mealkits = ", this.attributes.mealkits);
        
        //*** We should now setup the content and send to renderTemplate()
        //*** to show a screen with more details
        
        //Begin*************************************************************
        console.log("*** sending to Welcome message as a test ***");
        var speechOutput = WELCOME_MESSAGE;

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
             "backgroundImage" : "https://s3.amazonaws.com/cfa-meal-kit-images/cfa-background-black70.jpg",
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
        
        //END***************************************************************
        
        //var correct = compareSlots.call(this, item[property]);

        /*if (correct)
        {
            response = getSpeechCon(true);
            this.attributes["quizscore"]++;
        }
        else
        {
            response = getSpeechCon(false);
        }

        response += getAnswer(property, item);

        if (this.attributes["counter"] < 10)
        {
            response += getCurrentScore(this.attributes["quizscore"], this.attributes["counter"]);
            this.attributes["response"] = response;
            this.emitWithState("AskQuestion");
        }
        else
        {
          response += getFinalScore(this.attributes["quizscore"], this.attributes["counter"]);
          if (supportsDisplay.call(this)||isSimulator.call(this)) {
            //this device supports a display

            let content = {
                  "hasDisplaySpeechOutput" : response + " " + EXIT_SKILL_MESSAGE,
                  "bodyTemplateContent" : getFinalScore(this.attributes["quizscore"], this.attributes["counter"]),
                  "templateToken" : "FinalScoreView",
                  "askOrTell": ":tell",
                  "sessionAttributes" : this.attributes
              };
              if (USE_IMAGES_FLAG) {
                content["backgroundImageUrl"]=getBackgroundImage(item);
              }
              renderTemplate.call(this,content);



          } else {

            this.response.speak(response + " " + EXIT_SKILL_MESSAGE);
            this.emit(":responseReady");
          }
        }*/
    },

    'Unhandled': function () {
        console.log("*** inside Unhandled Intent ***");
        this.response.speak(UNHANDLED_MESSAGE);
        this.emit(':responseReady');
    },
};

exports.handler = function (event, context) {
    const alexa = Alexa.handler(event, context);
    alexa.appId = APP_ID;
    // To enable string internationalization (i18n) features, set a resources object.
    //alexa.resources = languageStrings;
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
                        "backButton": "HIDDEN",
                        "backgroundImage": {
                            "contentDescription": "Mt Fuji",
                            "sources": [
                                {
                                    "url": "https://s3.amazonaws.com/cfa-meal-kit-images/chilled_grill_background_black70.jpg"
                                }
                            ]
                        },
                        "listItems": [
                            {
                                "token": "item_1",
                                "image": {
                                    "sources": [
                                        {
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/southern-picnic-chicken-280x280.jpg"
                                        }
                                    ],
                                    "contentDescription": "Chicken and Kale"
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
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/chilled_grill_280x280.jpg"
                                        }
                                    ],
                                    "contentDescription": "Comfort Food"
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
                                        "url": "https://s3.amazonaws.com/cfa-meal-kit-images/mac_cheese_280x280.jpg"
                                        }
                                    ],
                                    "contentDescription": "Mac and Cheese"
                                },
                                "textContent": {
                                    "primaryText": {
                                        "type": "PlainText",
                                        "text": "Mac and Cheese"
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
                                    "contentDescription": "Hero Sandwich"
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
           
       case "InstructionsTemplate":
           var response = {
             "version": "1.0",
             "response": {
               "directives": [
                 {
                "type": "Hint",
                "hint": {
                    "type": "PlainText",
                    "text": "Play a video"
                    }
                },
                 {
                   "type": "Display.RenderTemplate",
                   "template": {
                     "type": "BodyTemplate3",
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
                    "image": {
                        "contentDescription": "Southern Chicken Picnic",
                        "sources": [
                            {
                                "url": "https://s3.amazonaws.com/cfa-meal-kit-images/southern-picnic-chicken-340x340.jpg"
                            }
                        ]
                    },
                     "textContent": {
                       "primaryText": {
                            "type": "RichText",
                            "text": "<font size = '3'>"+content.bodyTemplateContent+"</font>"
                       },
                        "secondaryText": {
                            "text": "<font size='3'>" + content.instructions + "</font>",
                            "type": "RichText"
                        },
                        "tertiaryText": {
                            "text": "",
                            "type": "PlainText"
                        }
                     },
                     "backButton": "VISIBLE"
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
                        "source": "https://s3.amazonaws.com/cfa-meal-kit-images/Flatbread.mp4",
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
                            "contentDescription": "Chilled Grill",
                            "sources": [
                                {
                                    "url": "https://s3.amazonaws.com/cfa-meal-kit-images/chilled_grill_background_black70.jpg"
                                }
                            ]
                        },
                        "textContent": {
                            "primaryText": {
                                "text": "Video Instructions",
                                "type": "PlainText"
                            },
                            "secondaryText": {
                                "text": "Ask to Pause or Resume",
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
               //"shouldEndSession": content.askOrTell==":tell", //DO NOT INCLUDE the shouldEndSession parameter in a Video template
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