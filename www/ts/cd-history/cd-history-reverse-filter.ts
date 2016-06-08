module cda.history {
	export function Reverse() {
		return function(items) {
			return items.slice().reverse();
		};
	}
	
	angular.module('cda').filter('reverse', Reverse);
}
