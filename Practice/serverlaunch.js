const http=require("node:http");
const PORT=8069;
const server=http.createServer((req,res)=>{
    const url=req.url;
    console.log(`Received request for: ${url}`);
    if(url==="/"){
        res.end("Hello World! This is a response from the server.");

    }
    else if(url==="/about"){
        res.end("This is the about page.");
    }
    else if(url==="/contact"){
        res.end("name:Shavali Badvel.\n email:shavalibadvel@example.com");
    }
    else if (url==='/fitness'){
        const fitnessData={
            name:"Shavali Badvel",
            age:25,
            height:"5'6\"",
            weight:"150 lbs",
            goals:["lose weight","build muscle","improve endurance"],
            workoutRoutine:["Monday: Cardio and Abs","Tuesday: Upper Body Strength Training","Wednesday: Rest Day","Thursday: Lower Body Strength Training","Friday: Cardio and Core","Saturday: Full Body Workout","Sunday: Rest Day"],
            dietPlan:["Breakfast: Oatmeal with fruits and nuts","Lunch: Grilled chicken salad with mixed greens and vinaigrette dressing","Dinner: Baked salmon with quinoa and steamed vegetables","Snacks: Greek yogurt with honey and berries, carrot sticks with hummus"],
            adress:{
                street:"123 Main St",
                city:"Anytown",
                state:"CA",
                zip:"12345"
            }
        };
        res.setHeader("Content-Type","application/json");
        res.end(JSON.stringify(fitnessData));
    }
    else{
        res.end("404 Not Found");
    }

});
server.listen(PORT,()=>{
    console.log(`Server is listening on port ${PORT}`);
});