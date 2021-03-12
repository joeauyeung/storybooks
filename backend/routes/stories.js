const express = require("express");
const router =express.Router();
const { ensureAuth } = require("../middleware/auth");
const mongoose = require("mongoose");

const Story = require("../models/Story");


// @desc    Show add story page
// @route   GET /stories/add

router.get("/add", ensureAuth, (req, res) => {
    res.render("stories/add")
});

// @desc    Process add form
// @route   POST /stories
router.post("/", ensureAuth, async (req, res) => {
    try {
        req.body.user = req.user.id;
        await Story.create(req.body);
        res.redirect("/dashboard");
    } catch (error) {
        console.error(error);
        res.render("error/500");
    }
})

// @desc    Show all stories
// @route   GET /stories
router.get("/", ensureAuth, async(req, res) => {
    try {
        const stories = await Story.find({ status: "public" })
            .populate("user")
            .sort({ createdAt: "desc" })
            .lean();

        res.render("stories/index", {
            userId: req.user.id,
            stories: stories
        })

    } catch (error) {
        console.error(error);
        res.render("error/500");
    }
});

// @desc    Show single story
// @route   GET /stories/:id
router.get("/:id", ensureAuth, async (req,res) => {
    try {
        const story = await Story.findById(req.params.id).lean().populate("user");

        if (!story) {
            return res.render("error/404");
        }

        res.render("stories/show", {
            story: story
        });

    } catch (error) {
        console.error(error);
        res.render("error/404");
    }
});

// @desc    Show edit story page
// @route   GET /stories/edit/:id
router.get("/edit/:id", ensureAuth, async (req, res) => {
    try {
        const story = await Story.findOne({ _id: req.params.id }).lean();

        if (!story) {
            return res.render("error/404");
        }
    
        if (String(story.user) !== req.user.id) {
            res.redirect("/stories");
    
        } else {
            res.render("stories/edit", {
                story: story
            });
        }
    } catch (error) {
        console.error(error);
        res.render("error/500");
    }

});

// @desc    Update story
// @route   PUT /stories/:id
router.put("/:id", ensureAuth, async (req, res) => {
    try {
        let story = await Story.findById(req.params.id).lean();

    if (!story) {
        return res.render("error/404");
    }

    if (String(story.user) !== req.user.id) {
        res.redirect("/stories");
    } else {
        story = await Story.findOneAndUpdate({ _id: req.params.id }, req.body, {
            new: true,
            runValidators: true
        });
    }

    res.redirect("/stories");
    } catch (error) {
        console.log(error);
        res.render("error/500");
    }
    
})

// @desc    Delete story
// @desc    DELETE stories/:id
router.delete("/:id", ensureAuth, async (req, res) => {
    try {
        await Story.remove({ _id: req.params.id});
        res.redirect("/dashboard");
    } catch (error) {
        console.error(error);
        return res.render("error/500");
    }
});

// @desc    User stories
// @route   GET stories/user/:userid 
router.get("/user/:userId", ensureAuth, async (req, res) => {
    try {
        const stories = await Story.find({
            user: req.params.userId,
            status: "public"
        }).lean().populate("user");

        res.render("stories/index", {
            stories: stories,
            userId: req.user._id
        })
    } catch (error) {
        console.error(error);
        res.render("error/404");
    }
})


module.exports = router;