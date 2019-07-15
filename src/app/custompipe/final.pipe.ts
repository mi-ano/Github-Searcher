import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'final'
})
export class FinalPipe implements PipeTransform {
  transform(value: any): string {
    var wordsLength = value.length;
    var getWord =''
    for(var i=0;i<wordsLength;i++){
      if(value.charAt(i)===" "){
        getWord=''
      } else if(value.charAt(i)!==" "){
        getWord = getWord + value.charAt(i);
      }
  
    }
    return getWord;
  }
}
