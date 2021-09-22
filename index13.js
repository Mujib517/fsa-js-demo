// object init
// system design
// my_prop_value
// myPropValue
var mobile = {
    "prop-name": 'some value',
    width: 5,
    height: 10,
    call: function () {
        console.log("calling...");
    }
};
// for in
// reflection
for (var key in mobile) {
    console.log(key, mobile[key]);
}

mobile["prop-name"]

