var express=require("express")
var app=express();

var employeeController=function(req,resp)
{
	var empdetails=[
	
	{Empid:1,Name:"Ram",Company_Location:"India"},
	{Empid:2,Name:"Robert",Company_Location:"London"},
	{Empid:3,Name:"David",Company_Location:"Japan"},
	{Empid:4,Name:"John",Company_Location:"Russia"}
	];
	resp.send(empdetails);
};

app.get('/empdetails',employeeController);
var server=app.listen(7000,function()
{

	var host=server.address().address
	var port=server.address.port

	
});
