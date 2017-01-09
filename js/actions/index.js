var INPUT_GUESS = 'INPUT_GUESS';
var inputGuess = function(guess) {
    return {
        type: INPUT_GUESS,
        value: value
    }
};

var CREATE_NUMBER = 'CREATE_NUMBER';
var createNumber = function(number) {
    return {
        type: CREATE_NUMBER,
        number: number
    };
};

var GIVE_RESPONSE = 'GIVE_RESPONSE';
var giveResponse = function(response){
	return {
		type: GIVE_RESPONSE,
		response: response
	}
}

exports.INPUT_GUESS = INPUT_GUESS;
exports.inputGuess = inputGuess;
exports.CREATE_NUMBER = CREATE_NUMBER;
exports.createNumber = createNumber;