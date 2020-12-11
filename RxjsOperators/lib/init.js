import {observable,subject} from './script.js'
export const init = (function(){
    function initOf (){
        subject.subOne$.subscribe(
            v => console.log("after initOf " + v)
          );
      observable.one$.subscribe(
        v => console.log(v)
      );
     }
   
     function initFrom (){
        subject.subOne$.subscribe(
            v => console.log("after initFrom " + v)
          );
       observable.observableFrom$.subscribe(
         v => console.log(v)
       );
      };
      function initSubOne (){
        subject.subOne$.next('next');
       };


    return {initOf, initFrom, initSubOne}
  })();

 
 

  subject.subOne$.subscribe(
    v => console.log(v)
  ); 
  