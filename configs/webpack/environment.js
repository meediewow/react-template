const NODE_ENV = process.env.NODE_ENV;

const environment = {
    production: NODE_ENV === "production",
    development: NODE_ENV === "development",
    current: JSON.stringify(NODE_ENV),
};

module.exports = environment;
