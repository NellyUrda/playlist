// Ex : input :eminem       output: eminem
//      input: taylor swift output: taylor%20swift
export function transformInput(input){
    let inputArray = [];

    try { 
      inputArray = input.split(" ");
      if(inputArray.length>1){
        const newArray = [];
        for (let i=0; i< inputArray.length ; i++){
          if(i === inputArray.length -1){
            newArray.push(inputArray[i]);
          
          }else newArray.push(`${inputArray[i]}%20`);
        }  

      let newInput = "";
      newInput = newArray.join("");
      return newInput;

      } else return input;
      
        
    }catch (error) {
      console.log('No string input', error);
    }

}


let nextId = 0;
export function generateId() {
  const result = nextId;
  nextId += 1;
  return result;
}