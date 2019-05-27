module.exports = function main() {
    console.log("Debug Info");
    var myInput = arguments;
    var myOutput = checkInput(myInput);
    if(myOutput){
        return myOutput;
    }
    myOutput = '';
    var myLed = [["._.","...","._.","._.","...","._.","._.","._.","._.","._."],["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]];
    var myNumber = myInput[0];
    myOutput = format(myNumber,myLed,myOutput);
    return myOutput;
};
 

function checkInput(input){
    if(input.length!=1){
        return 'Only one input is valid';
    }else if(isNaN(input[0])){
        return 'Input should be a number';
  
    }
}

function format(number,led,output){
    for(i = 0;i<3;i++){
        for(j = 0;j<number.length;j++){
            output += (led[i][number[j]]);
            output = addSeparator(output,j,number.length-1);
        }
    }
    return output;
}

function addSeparator(input,index,length){
    if(index<length){
        input+=' ';
    }else{
        input+='\n';
    }
    return input;
}  