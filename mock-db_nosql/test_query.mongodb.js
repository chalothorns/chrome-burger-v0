use ("chrome-burger-db")

// First, find Jane's staff ID
var jane = db.staff.findOne({first_name: "Jane", last_name: "Doe"});

// Then, find all orders processed by her
db.orders.find({ "staff.staff_id": jane._id });
 $match: { name: "Patty's Premium Meats" 