var data=""
 _get = function() {
    request = new XMLHttpRequest;
    request.open('GET', "Brown.txt", false);
    
    request.onload = function() {
      if (request.status == 200){
        data=request.responseText;
        console.log(data)
      }
    };

    request.send();
    
  };

_get()

myArray=data.split(",")

console.log(myArray)