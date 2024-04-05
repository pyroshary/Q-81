function objectProperties(obj) {
    for (var property in obj) {
        console.log("".concat(property, ": ").concat(obj[property]));
    }
}
objectProperties({ make: "TOYOTA", model: "COROLLA", year: 2021, colour: "BLUE" });
