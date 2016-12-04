var myApp = angular.module("myApp",[])

myApp.controller("shousuo",["$scope",function($scope){
	var xinxi = [
		{
			FirstName:"FANG",
			LastName:"vane",
			Gender:"Male",
			Salsry:"12,333.50",
			Salsr:"123335",
			birthday:"2007-07-11",
		},
		{
			FirstName:"SARA",
			LastName:"rose",
			Gender:"Female",
			Salsry:"232,334.23",
			Salsr:"2323342",
			birthday:"1997-02-03",
		},
		{
			FirstName:"AAM",
			LastName:"hot",
			Gender:"Male",
			Salsry:"66,880.50",
			Salsr:"668805",
			birthday:"1986-03-04",
		},
		{
			FirstName:"MARK",
			LastName:"bear",
			Gender:"Male",
			Salsry:"68,000.00",
			Salsr:"680000",
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
	$scope.desc = true ; //默认排序条件升序
	/*按哪个字段排序*/
	$scope.setSort = function (column){
		$scope.desc = $scope.col == column ? !$scope.desc:false;
		$scope.col = column
	}
	$scope.getClass = function (column){
		if($scope.col == column){
			return $scope.desc? "up" : "down"
		}
	}

}])