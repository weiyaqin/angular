
var dfd = $.Deferred();

// $.ajax("./mock/livelist.json")
// .done(function(){
// 	console.log("done")
// })
// .fail(function(){
// 	console.log(fail)
// })

// $.when($.ajax("./mock/livelist.json"),$.ajax("./mock/login.json")
// .done(function(data1,data2){
// 	console.log("done")
// })
// .fail(function(){
// 	console.log("fail")
// })
// )

// var wite=function (dfd)
// {
// 	var task = function()
// 	{
// 		alert("hello");
// 		dfd.reject();
// 	}
// 	setTimeout(task,1000);
// 	return dfd.promise();
// }
// var b = wite(dfd);

// $.when(b)
// .done(function(){
// 	alert("ok")
// })
// .fail(function(){
// 	alert("no")
// })
// var wite = function(dfd){
// 	var task = function(){
// 		alert("hello")
// 		// dfd.resolve()
// 		// dfd.reject()		
// 	}
// 	setTimeout(task,2000)
// 	return dfd.promise()
// }
// var d = wite(dfd)
// $.when(d)
// .done(function(){
// 	alert("ok")
// })
// .fail(function(){
// 	alert("erorr")
// })