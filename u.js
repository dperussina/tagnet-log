

module.exports = (function () {
    var u = {
        log: function () {
            var date = new Date();
            var now = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }


            var str = now + "";
            args.forEach(function (e, i) {

                if (typeof e != 'string') {

                    str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "]";
                    try {
                        e = JSON.stringify(e, null, 4);
                    } catch (err) {

                    }

                } else {
                    if (i > 0) {
                        if (e.charAt(0) == "{") {
                            try {

                                e = JSON.stringify(JSON.parse(e), null, 4);
                                str += "[json] ";

                            } catch (err) {
                                str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "]";
                            }
                        } else {
                            str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "]";
                        }


                    }
                }

                str += "\r\n" + e + "\r\n";
            });
            console.log(str + '###(u.log)###');
            return null;
        },
        logLn: function () {
            var date = new Date();
            var now = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }


            var str = now + "";
            args.forEach(function (e, i) {

                if (typeof e != 'string') {

                    str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "]";
                    try {
                        e = JSON.stringify(e);
                    } catch (err) {

                    }

                } else {
                    if (i > 0) {
                        if (e.charAt(0) == "{") {
                            try {

                                e = JSON.stringify(JSON.parse(e));
                                str += "[json] ";

                            } catch (err) {
                                str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "]";
                            }
                        } else {
                            str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "]";
                        }


                    }
                }

                str += " " + e + " ";
            });
            console.log(str + '###(u.logLn)###');
            return null;
        },
        error: function () {
            var date = new Date();
            var now = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            var cache = [];

            var str = now + " *Exception* ";
            args.forEach(function (e, i) {

                if (typeof e != 'string') {

                    str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "] ";
                    try {
                        e = JSON.stringify(e, null, 4);
                    } catch (err) {

                    }

                } else {
                    if (i > 0) {
                        if (e.charAt(0) == "{") {
                            try {

                                e = JSON.stringify(JSON.parse(e), null, 4);
                                str += "[json] ";

                            } catch (err) {
                                str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "] ";
                            }
                        } else {
                            str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "] ";
                        }


                    }
                }

                str += "\r\n" + e + "\r\n";
            });
            console.log(str + '###(u.error)###');
            return null;
        },
        errorLn: function () {
            var date = new Date();
            var now = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            var args = [];
            for (var i = 0; i < arguments.length; i++) {
                args[i] = arguments[i];
            }
            var cache = [];

            var str = now + " *Exception* ";
            args.forEach(function (e, i) {

                if (typeof e != 'string') {

                    str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "] ";
                    try {
                        e = JSON.stringify(e);
                    } catch (err) {

                    }

                } else {
                    if (i > 0) {
                        if (e.charAt(0) == "{") {
                            try {

                                e = JSON.stringify(JSON.parse(e));
                                str += "[json] ";

                            } catch (err) {
                                str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "] ";
                            }
                        } else {
                            str += "[" + ({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() + "] ";
                        }


                    }
                }

                str += " " + e + " ";
            });
            console.log(str + '###(u.errorLn)###');
            return null;
        },
        typeLog: function (arg, name) {
            var date = new Date();
            var now = date.toLocaleDateString() + " " + date.toLocaleTimeString();
            var type = ({}).toString.call(arg).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            var str = now + " ";
            if(name){
                str+=name+" | type ["+ type +"] ###(u.typeLog)###"
            }else{
                str+="type ["+ type +"] ###(u.typeLog)###"
            }
            console.log(str);
            return type;
        },
        type: function (arg, name) {
            var type = ({}).toString.call(arg).match(/\s([a-zA-Z]+)/)[1].toLowerCase();
            return type;
        }
    };
    return u;
})();

