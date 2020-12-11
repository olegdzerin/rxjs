

export var observable = (function(){
  const one$ = Rx.Observable.of(13)
  .map(x => x*x)
  .map(x => x*x);
  const observableFrom$ = Rx.Observable.from([21,22,23]) ;
  const pluck$ = Rx.Observable.fromEvent(document, 'click')
   .pluck('target');
 
  pluck$.subscribe(v => console.log(v));
  const skip$ = observableFrom$.skip(2);
  const skipWhile$ = observableFrom$.skipWhile(x => x < 22);
  
  return {one$, observableFrom$, pluck$, skip$, skipWhile$}
})();

export var subject = (function(){
   const subOne$ = new  Rx.Subject();
   return {subOne$}
})();
export var domElement = (function(){
    const btn = document.getElementById('btn');
    const btnFrom = document.getElementById('btnFrom');
    const btnSubOne = document.getElementById('btnSubOne');
    return {btn, btnFrom, btnSubOne};
})();





