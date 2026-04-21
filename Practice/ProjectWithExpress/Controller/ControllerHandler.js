//controller handler for the app
function homeHandler(req, res) {
    res.status(200).send("Welcome to the Home Page");
}

function fitnessHandler(req, res) {
    const fitnessData = {
            name: "Shavali Badvel",
            age: 25,
            goals: ["lose weight", "build muscle"]
        };
    res.status(200).json(fitnessData);
}
module.exports = { homeHandler, fitnessHandler };
