module.exports = function main() {
    console.log("Debug Info");
    var output = '';
    if(arguments.length!=1){
        output+='Only one input is valid';
        return output;
    }else if(isNaN(arguments[0])){
        output+='Input should be a number';
        return output;
    }
    var led = [["._.","...","._.","._.","...","._.","._.","._.","._.","._."],["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]];
    var inputnumber = arguments[0];
    for(i = 0;i<3;i++){
        for(j = 0;j<arguments[0].length;j++){
            output += (led[i][inputnumber[j]]);
            output = AddSeparator(output,j,arguments[0].length-1);
        }
    }
    return output;
};

function AddSeparator(input,index,length){
    if(index<length){
        input+=' ';
    }else{
        input+='\n';
    }
    return input;
}