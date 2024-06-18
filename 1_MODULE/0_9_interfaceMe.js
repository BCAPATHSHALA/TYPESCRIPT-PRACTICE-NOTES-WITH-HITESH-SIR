"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
//? Create the hitesh's object type Admin
var hitesh = {
    dbId: 22,
    email: "h@h.com",
    userId: 2211,
    role: "ADMIN",
    githubToken: "github",
    startTrail: function () {
        return "trail started";
    },
    startTrail1: function () {
        return "trail started";
    },
    getCoupon: function (name, off) {
        return 10;
    },
};
//? Access the property of the hitesh's object
hitesh.email = "h@hc.com";
/*
Todo: Interface Vs Type in TS ( 2:34 Minutes )
     1. interface is always extendable ( We can extend it with keyword extends )
     1. type can extend with intersections &
     2. Adding new field to an existing interface
     2. A type cannot be changed after being created
Readmore About It: https://www.typescriptlang.org/docs/handbook/2/everyday-types.html#differences-between-type-aliases-and-interfaces
 */
