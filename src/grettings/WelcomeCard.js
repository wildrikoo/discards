const Greeting = require("./Base");

module.exports = class WelcomeCard extends Greeting {
    constructor() {
        super();
        this.title = "WELCOME";
        this.textMessage = "Welcome to {server}";
        this.colorTitle = "#03A9F4";
    }
};
