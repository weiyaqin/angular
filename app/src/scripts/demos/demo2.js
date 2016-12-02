var myApp = angular.module("myApp",[])

myApp.controller("shousuo",["$scope",function($scope){
	var xinxi = [
		{
			FirstName:"FANG",
			LastName:"vane",
			Gender:"Male",
			Salsry:"12,333.50",
			Salsr:"￥12,333.5",
			birthday:"2007-07-11",
		},
		{
			FirstName:"SARA",
			LastName:"rose",
			Gender:"Female",
			Salsry:"232,334.23",
			Salsr:"￥232,334.2",
			birthday:"1997-02-03",
		},
		{
			FirstName:"AAM",
			LastName:"hot",
			Gender:"Male",
			Salsry:"66,880.50",
			Salsr:"￥66,880.5",
			birthday:"1986-03-04",
		},
		{
			FirstName:"MARK",
			LastName:"bear",
			Gender:"Male",
			Salsry:"68,000.00",
			Salsr:"￥68,000.0",
			birthday:"1968-03-22",
		}
	]
	$scope.xinxi=xinxi;
	//模糊匹配
	$scope.serchText="";

	$scope.search=function(obj){
		if($scope.serchText != ""){
			if(obj.FirstName.toLowerCase().indexOf($scope.serchText)!= -1 //|| 
			   // obj.LastName.toLowerCase().indexOf($scope.serchText)!= -1 ||
			   // obj.Gender.toLowerCase().indexOf($scope.serchText)!= -1 ||
			   // obj.Salsry.toLowerCase().indexOf($scope.serchText)!= -1 ||
			   // obj.Salsr.toLowerCase().indexOf($scope.serchText)!= -1 ||
			   // obj.birthday.toLowerCase().indexOf($scope.serchText)!= -1 ||
			   
			){
				return true
			}else 
			{
				return false
			}
		}else 
		{
			return true
		}

	}
//排序
	$scope.col = "FirstName" ;  //默认按FirstName列排序

	$scope.desc = 0 ; //默认排序条件升序

}])