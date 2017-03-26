
var setRadius = function(newRadius){
  if(newRadius<minRad){
    newRadius = maxRad;
  }
  else if(newRadius > maxRad) {
    newRadius = maxRad;
    context.lineWidth = radius*2;

    // input radius size
    radSpan.innerHTML = radius;
  }

};

var minRad = 0.5,
    maxRad = 100,
    defaultRad = 20,
    radSpan = document.getElementById('radval'),
    decRad = document.getElementById('decrad'),
    incRad = document.getElementById('incrad');
    interval = 5;


decRad.addEventListener('click', function(){
  setRadius(radius-interval);
});


decRad.addEventListener('click', function(){
  setRadius(radius+interval);
});
