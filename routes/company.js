const express = require("express");
const Company = require("../models/companySchema");

const router = express.Router();

// post compnay
router.post("/post", async (req, res) => {
    try {
        const {name} = req.body;

        const newCompany = new Company({
            name : name
        });

        await newCompany.save();

        res.status(200).json(newCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get all company
router.get("/", async (req, res) => {
    try {
        const allCompany = await Company.find();

        res.status(200).json(allCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});

// get individual Company
router.get("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const individualCompany = await Company.findById(id);

        res.status(200).json(individualCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});

// update company
router.put("/:id", async (req, res) => {
    try {
        const id = req.params.id;
        const {name} = req.body;

        const companyToBeUpdated = {name};

        const updatedCompany = await Company.findByIdAndUpdate(id, companyToBeUpdated, {new : true});

        res.status(200).json(updatedCompany);
    } catch (error) {
        res.status(200).json(error);
    }
});

// delete company
router.delete("/:id", async (req, res) => {
    try {
        const id = req.params.id;

        const deletedCompany = await Company.findByIdAndDelete(id);

        res.status(200).json(deletedCompany);
    } catch (error) {
        res.status(500).json(error);
    }
});



module.exports = router;