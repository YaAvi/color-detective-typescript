var cda;
(function (cda) {
    var history;
    (function (history) {
        function Reverse() {
            return function (items) {
                return items.slice().reverse();
            };
        }
        history.Reverse = Reverse;
        angular.module('cda').filter('reverse', Reverse);
    })(history = cda.history || (cda.history = {}));
})(cda || (cda = {}));
