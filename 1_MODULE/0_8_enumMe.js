// Example 1: role types for an application
var AppRole;
(function (AppRole) {
    AppRole[AppRole["USER"] = 0] = "USER";
    AppRole[AppRole["ADMIN"] = 1] = "ADMIN";
})(AppRole || (AppRole = {}));
var appRole = AppRole.ADMIN;
// Example 2: seat types of train
var SeatChoice;
(function (SeatChoice) {
    SeatChoice["AISLE"] = "aisle";
    SeatChoice[SeatChoice["MIDDLE"] = 3] = "MIDDLE";
    SeatChoice[SeatChoice["WINDOW"] = 4] = "WINDOW";
    SeatChoice[SeatChoice["FOURTH"] = 5] = "FOURTH";
})(SeatChoice || (SeatChoice = {}));
var hcSeat = SeatChoice.AISLE;
