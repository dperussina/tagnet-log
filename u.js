//var util = require('util');
module.exports = {

    log: function () {
        var date = new Date();
        var now =date.toLocaleDateString()+" "+ date.toLocaleTimeString();
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
        }
        var cache = [];

        var str = now + "";
        args.forEach(function (e, i) {

            if (typeof e != 'string') {

                str +="[" +({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() +"]";
                try{
                    e = JSON.stringify(e, null, 4);
                }catch(err){

                }

            }else{
                if(i > 0){
                    if(e.charAt(0) == "{"){
                        try{

                            e = JSON.stringify(JSON.parse(e), null, 4);
                            str += "[json] ";

                        }catch(err){
                            str +="[" +({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() +"]";
                        }
                    }else{
                        str +="[" +({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() +"]";
                    }


                }
            }

            str+= "\r\n" + e + "\r\n";
        });
        console.log(str+'###(u.log)###');

    },
    error: function () {
        var date = new Date();
        var now =date.toLocaleDateString()+" "+ date.toLocaleTimeString();
        var args = [];
        for (var i = 0; i < arguments.length; i++) {
            args[i] = arguments[i];
        }
        var cache = [];

        var str = now+" *Exception* ";
        args.forEach(function (e, i) {

            if (typeof e != 'string') {

                str +="[" +({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() +"] ";
                try{
                    e = JSON.stringify(e, null, 4);
                }catch(err){

                }

            }else{
                if(i > 0){
                    if(e.charAt(0) == "{"){
                        try{

                            e = JSON.stringify(JSON.parse(e), null, 4);
                            str += "[json] ";

                        }catch(err){
                            str +="[" +({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() +"] ";
                        }
                    }else{
                        str +="[" +({}).toString.call(e).match(/\s([a-zA-Z]+)/)[1].toLowerCase() +"] ";
                    }


                }
            }

            str+= "\r\n" + e + "\r\n";
        });
        console.log(str+'###(u.error)###');

    }
};