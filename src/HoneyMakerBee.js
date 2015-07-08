var HoneyMakerBee = function() {
  Bee.call(this);
  this.age = 10;
  this.job = "make honey";
  this.honeyPot = 0;
};

HoneyMakerBee.prototype = Object.create(Bee.prototype);
HoneyMakerBee.prototype.constructor = HoneyMakerBee;
HoneyMakerBee.prototype.makeHoney = function(){
  this.honeyPot++;
}
HoneyMakerBee.prototype.giveHoney = function(){ // use .prototype so that potential later modifications to "givehoney" affect all instances
  this.honeyPot--;
}