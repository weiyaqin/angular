//定义一个myApp的模块，没有[]表示获取
var myApp = angular.module("myApp",[]);
myApp.controller("dome1Con",["$scope",function($scope){
	var user=[
		{
			name:"weiyaqin",
			email:"weiyaqin@163.com"
		},
		{
			name:"guojunmei",
			email:"guojunmei@163.com"
		}
	]
	
	$scope.user = user

	$scope.isshow = false;

	$scope.num = 0

	$scope.add = function($event){
		this.num++
	}

	$scope.itmes = [];
	$scope.additme = function($event){
		if($event.keyCode === 13){
			this.itmes.unshift(this.itme)
			this.itme=""
			
		}
	}

	$scope.books = [
		{
			name:"javaScript权威指南",
			picle:false,
			updated:1680589718754
		},
		{
			name:"angular权威指南",
			picle:true,
			updated:1580589618754
		},
		{
			name:"gulp权威指南",
			picle:false,
			updated:1480581718754
		}
	]

	$scope.price = 199.98

}])