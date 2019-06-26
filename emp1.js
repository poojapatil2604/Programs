var http=require('http');   
var emp =[
	{
		Empid:1,
		Name:"Ram",
		Company_Location:"India",
		Salary:45000
	},
	{
		Empid:2,
		Name:"Robert",
		Company_Location:"London",
		Salary:55000
	},
	{
		Empid:3,
		Name:"David",
		Company_Location:"Japan",
		Salary:65000
	},
	{
		Empid:4,
		Name:"John",
		Company_Location:"Russia",
		Salary:40000
	}


];

var empcontroller=function(req,resp)
{
	resp.writeHead(200,
	                {"Content-Type" : "text/plain"});
	                resp.end( JSON.stringify(emp));
};
var server=http.createServer(empcontroller);
server.listen(7000);
console.log("listening on port 7000");