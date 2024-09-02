const { body, validationResult } = require('express-validator');

const validateRecipe = [
    body('title').isString().notEmpty(),
    body('ingredients').isArray().notEmpty(),
    (req, res, next) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next();
    },
];

module.exports = { validateRecipe };
