var actions = require('../actions/index');

var initialState = {
	number: , 
	guess: [],
	win: false,
};


export default function HotColdReducer(state = initialState, action) {
  switch(action.type) {
     case CREATE_NUMBER:
      return {
        ...state,
        randomNumber = Math.floor(Math.random()*(100-1)+1)
        console.log("randomNumber")
        
      };
    case INPUT_GUESS:
      return {
        ...state,
        if (userGuess = randomNumber){
        	win = true;
        } else {
          win=false;
        }
      };
   
      case GIVE_RESPONSE:
      return {
      	...state,
        var difference = (randomNumber-userGuess);
    if (difference >=1 && difference < 5) {
      props.response ="the bowels of hell";
    }
    if (difference >= 5 && difference < 10) {
      props.response ="july heat wave, no AC";
    }
    if (difference >= 10 && difference < 20) {
      props.response ="the first sunny day in may";
    }
    if (difference >= 20 && difference < 40){
      props.response ="fall evenings with crunchy leaves";
    }
    if (difference >=40 && difference < 60){
      props.response ="stepping out of the shower in the winter";
    }
    if (difference > 60) {
      props.response ="Bacteria frozen in an Antarctic ice shelf";
    }


      }
    default:
      return state;
  }
}