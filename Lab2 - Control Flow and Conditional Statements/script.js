let userRole = "admin";
let accesLevel;

if(userRole === "admin"){
    accesLevel = "Full access granted";
}
else if(userRole === "manager"){
    accesLevel = "Limited access granted";
}
else{
    accesLevel = "No access granted";
}

console.log("Access Level: ", accesLevel);

let isLoggedIn = true;
let userMessage;

if(isLoggedIn){
    if(userRole === "admin"){
        userMessage = "Welcome, Admin!";
    }
    else{
        userMessage = "Welcome, User!";
    }
}
else{
    userMessage = "Please log in to access the system.";
}

console.log(userMessage);

let userType = "subscriber";
let userCategory;

switch(userType){
    case "admin":
        userCategory = "Administrator";
        break;
    case "manager":
        userCategory = "Manager";
        break;
    case "subscriber":
        userCategory = "Subscriber";
        break;
    default:
        userCategory = "Unknown";
}

console.log(userCategory)

let isAuthenticated = true;

let authenticationStatus = isAuthenticated ? "Authenticated" : "Not authenticated";

console.log(authenticationStatus);