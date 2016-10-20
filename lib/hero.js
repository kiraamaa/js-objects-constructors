'use strict';

const Hero = function Hero(name, alias, power) {
  this.name = name;
  this.alias = alias;
  this._power = power;
  this.usePower = function () {
    return this._Power;
  };
  };

  wonderWoman = new Hero('Diana Prince',
                             'Wonder Woman',
                             'Deflect bullets with bracelets');
};

module.exports = Hero;
