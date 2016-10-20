'use strict';
const User = function (name, email) {
  this.name = name;
  this.email = email;
  this.runs = [];

  this.totalDistance = function () {
    let runs = this.runs;
    let total = 0;
    for (let i = 0; i < runs.length; i++) {
      total += runs[i].distance;
    }

    return total;
  },
  this.longestRun = function () {
    let runs = this.runs;
    let longest = 0;

    for (let i = 0; i < runs.length; i++) {
      if (runs[i].distance > longest) {
        longest = runs[i].distance;
      }
    }

    return longest;
  },
  this.totalTime = function () {
    let runs = this.runs;
    let total = 0;

    for (let i = 0; i < runs.length; i++) {
      total += runs[i].timeTaken;
    }

    return total;
  },
  this.averageSpeed = function () {
    return this.totalDistance() / this.totalTime();
  },
  averageDistance = function () {
    let runs = this.runs;

    return this.totalDistance() / runs.length;
  };
};
};

const Run = function (date, distance, timeTaken) {
  this.date = date;
  this.distance = distance;
  this.timeTaken = timeTaken;
};

module.exports = {
  Run,
  usePower
};
