angular.module('myApp', [])
    .provider('AWSService', function() {
        var self = this;
        self.arn = null;

        self.setArn = function(arn) {
            if (arn) self.arn = arn;
        }

        self.$get = function($q) {
            return {}
        }
    });