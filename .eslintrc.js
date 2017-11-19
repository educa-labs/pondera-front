module.exports = {
    "extends": "airbnb",
    "plugins": [
        "react",
        "jsx-a11y",
        "import"
    ],
    "rules": {
        "react/jsx-filename-extension": [1, { "extensions": [".js", ".jsx"] }],
        "jsx-a11y/anchor-is-valid": 0,
        "react/no-children-prop": 0,
        "jsx-a11y/no-static-element-interactions": 0,
        "jsx-a11y/click-events-have-key-events": 0,
    }
};