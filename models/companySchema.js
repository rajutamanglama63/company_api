const mongoose = require("mongoose");

const companySchema = new mongoose.Schema({
    name : {
        type : String,
        required : true
    },
},{
    timestamps : true
});

const Company = mongoose.model("company", companySchema);

module.exports = Company;