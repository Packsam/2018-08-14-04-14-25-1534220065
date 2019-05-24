module.exports = function main() {
    console.log("Debug Info");
    var led = [["._.","...","._.","._.","...","._.","._.","._.","._.","._."],["|.|","..|","._|","._|","|_|","|_.","|_.","..|","|_|","|_|"],["|_|","..|","|_.","._|","..|","._|","|_|","..|","|_|","..|"]];
    var output = '';
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