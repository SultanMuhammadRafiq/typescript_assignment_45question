var Car = /** @class */ (function () {
    function Car(model, color, isElectric) {
        this.model = model;
        this.color = color;
        this.isElectric = isElectric;
    }
    Car.prototype.drive = function () {
        var engineStarted = this.startEngine();
        // some method to drive after starting the engine
    };
    Car.prototype.startEngine = function () {
        // some method to start the engine
        return true;
    };
    return Car;
}());
