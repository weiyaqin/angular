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

	$scope.price = 199.98;
	$scope.red=false;
	
	var filters = [
	{
		name:"weiyaqin",
		phone:"13621117454"
	},{
		name:"guojunmei",
		phone:"13831117454"
	},{
		name:"zhangrui",
		phone:"13621113209"
	},{
		name:"chentingting",
		phone:"13638887454"
	}]
		
	$scope.filters = filters;
	$scope.searchText= "";
	$scope.search = function (obj){
		if($scope.searchText !=""){
			if(obj.name.toLowerCase().indexOf($scope.searchText) != -1 || obj.phone.indexOf($scope.searchText) != -1)
			{
				return true;
			}else
			{
				return false;
			}
		}else
		{
			return true;
		}
	}
}])