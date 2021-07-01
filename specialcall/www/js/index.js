window.plugins.CallNumber.callNumber(
    function onSuccess(result){
        console.log("Success:"+result);
      },
      function onError(result) {
        console.log("Error:"+result);
       },
       
       $scope.callNumber = function(number){
         console.log("Launching Calling Service for number "+number);
         window.plugins.CallNumber.callNumber(onSuccess, onError, number, false);
    });