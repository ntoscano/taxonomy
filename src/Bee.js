var Bee = function() {
  Grub.call(this); // the contents of Grub are being applied to the context of an instantiation of a bee
  this.age = 5;
  this.color = "yellow";
  this.job = "keep on growing";
};

Bee.prototype = Object.create(Grub.prototype);
Bee.prototype.constructor = Bee;