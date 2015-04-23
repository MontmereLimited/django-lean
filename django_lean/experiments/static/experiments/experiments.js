/**
 *   Used for split testing experiments.
 *   User participation to an experiment is available through:
 *       experiments.control("experiments_name");
 *   and
 *       experiments.test("experiments_name");
**/
experiments = function() {
    // experiment_enrollment should have the following format { experiment_name : group }
    var experiment_enrollment = {};

    return {
        record_enrollment: function(experiment_name, group) {
            experiment_enrollment[experiment_name] = group;
        },
        control: function(experiment_name) {
            if (experiment_enrollment[experiment_name]) {
                return experiment_enrollment[experiment_name] == "control";
            } else {
                if (console) {
                    console.error("Can't find experiment named " + experiment_name);
                }
                return true;
            }
        },
        test: function(experiment_name) {
            if (experiment_enrollment[experiment_name]) {
                return experiment_enrollment[experiment_name] == "test";
            } else {
                if (console) {
                    console.error("Can't find experiment named " + experiment_name);
                }
                return false;
            }
        },
        confirm_human: function() {
            /**
             * Old browser support
             */
            if (typeof XMLHttpRequest == "undefined") {
                XMLHttpRequest = function () {
                    try { return new ActiveXObject("Msxml2.XMLHTTP.6.0"); }
                        catch (e) {}
                    try { return new ActiveXObject("Msxml2.XMLHTTP.3.0"); }
                        catch (e) {}
                    try { return new ActiveXObject("Msxml2.XMLHTTP"); }
                        catch (e) {}
                    throw new Error("This browser does not support XMLHttpRequest.");
                };
            }
            /**
             * End old browser support
             */
            request = new XMLHttpRequest
            request.open('GET', '/experiments/confirm_human/', true)
            request.send()
        }
    };
}();
