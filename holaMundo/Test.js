/**
 * Created by Belfa on 20/9/16.
 */
var Test = (function () {
    function Test() {
    }
    Test.prototype.testing = function () {
        return 'Hola Mundo';
    };
    return Test;
}());
var t = new Test();
console.log(t.testing());
//# sourceMappingURL=Test.js.map