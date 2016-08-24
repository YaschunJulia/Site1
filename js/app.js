/**
 * Created by denps on 19.08.2016.
 */
'use strict';

angular
    .module('myApp', [])
    .controller('openMenu', function($scope) {

        $scope.open = false;

    })
    .controller('getData',['$scope', '$http', function($scope,$http){
		$http({method: 'GET', url: 'basicData.json'})
		.success(function(response){
			$scope.services = response.services;
			$scope.players = response.players;
			$scope.works = response.works;			
		})

	}])
	.controller('getNews', function($scope){
		$scope.blog=[
			{
				icon: "images/blog1.jpg",
				title: "Curabitur ullamcorper ultricies nisi",
				notice: "Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
			},{
				icon: "images/blog2.jpg",
				title: "Curabitur ullamcorper ultricies nisi",
				notice: "Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus,sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem."
			}
		];
	})
	.controller('formController', ['$scope', '$http',function($scope, $http){
		$scope.user = {};
		$scope.submit = function(){
			 if ($scope.feedback.$valid) {
                 $http.post('feedback.json')
                     .success(function(response){
                         if(response.status){
                             for (var key in $scope.user){
                                 $scope.user[key] ='';
                             }
                             $scope.feedback.$pristine = true;
                             $scope.feedback.$setPristine();
                             createPopup("Сообщение отправлено!", true);
                         }else{
                             createPopup("Сообщение не отправлено!", false);
                         }
                     })
                     .error(function(reason){
                         createPopup("Проблемы с соединением!", false);
                     });

			}			
		}
	}]);
	
    function createPopup(message, flag) {
        var popup = document.createElement('div');
        var pannel = document.createElement('div');
        var cross = document.createElement('div');
        var line1 = document.createElement('div');
        var line2 = document.createElement('div');

        popup.className="popup";
        pannel.className="pannel";
        cross.className="cross";
        line1.className="line1";
        line2.className="line2";

        if(!flag) {
            popup.style.backgroundColor = "#FA837F";
        }
        popup.innerHTML=message;

        document.body.appendChild(popup);
        popup.appendChild(pannel);
        pannel.appendChild(cross);
        cross.appendChild(line1);
        cross.appendChild(line2);

        alert(document.documentElement.offsetWidth- popup.offsetWidth/2);

        popup.style.top = (document.documentElement.clientHeight - popup.offsetHeight)/2 +"px";
        popup.style.left = (document.documentElement.clientWidth - popup.offsetWidth)/2 +"px";

        cross.onclick = function(){
            document.body.removeChild(popup);
        }
    }


