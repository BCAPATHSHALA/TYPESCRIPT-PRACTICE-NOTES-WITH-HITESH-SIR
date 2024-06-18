"use strict";
/*
! What is tuple enum?
? This is a type of array and order does metter according to the which data type is exist at the index
*/
Object.defineProperty(exports, "__esModule", { value: true });
//* Example 1: string at 0-index, number at 1-index, boolean at 2-index
var tUser;
tUser = ["hc", 131, true];
// tUser = [131, "hc", true]; // Gives the error due to type order
//* Example 2: for rgb colors
var rgb = [255, 123, 112];
var newUser = [112, "example@google.com"];
newUser[1] = "hc.com";
