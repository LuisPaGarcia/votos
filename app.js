/* Encrypt zone */
const fraseSecreta = "panda";

encriptar = (password)=>{
    return CryptoJS.AES.encrypt(password, fraseSecreta).toString();
}

desencriptar = (passwordEnc)=>{
    var decrypted = CryptoJS.AES.decrypt(passwordEnc, fraseSecreta);
    return decrypted.toString(CryptoJS.enc.Utf8).toString();
}
/* END Encrypt zone */



 /* Frontend code */
 $('input').focus(function(){
    var input = $(this);
    input.closest('.field-container').addClass('-focused');
    });

    $('input').blur(function(){
    var input = $(this);
    if (input.val().length === 0) {
        input.closest('.field-container').removeClass('-focused');
    }
 });

 /* ********************************** */
 /* ********* Angular Code *********** */
 /* ********************************** */
let doc = document;

const app = angular.module('app', [  ]);

/* Controlador Index */
app.controller('indexCont', function( $scope , $http ){

    $scope.email;
    $scope.contrasena;
    let path;

    $scope.login = ()=>{
        if(!$scope.email){
            swal('Oops...','Something went wrong!','error');
            return;
        }
        $scope.loginCon($scope.email, $scope.contrasena);
        console.log('Input Password: ', $scope.contrasena);
        console.log('Encrypt Password: ', encriptar($scope.contrasena));
        console.log('Desencrypt Password: ', desencriptar(encriptar($scope.contrasena)));
    };

    $scope.loginCon = (email,password)=>{
        if(path){

        }
    };

});

/* Controlador crear usuario */
app.controller('crearCont', ( $scope )=>{
    $scope.nombre = '';
    $scope.apellido = '';
    $scope.crearUsuario = ()=>{
        if(path){
          
        }
    }
});

/* Controlador recuperar contrasena */
app.controller('recuperarCont', ( $scope )=>{
    // ng-bind 
    $scope.email = '';

    // Pivote function
    $scope.recuperar = ()=>{
        $scope.recuperarCon($scope.email);
    }

    // Main Function
    $scope.recuperarCon = (email)=>{
        if(email){
           
        }
    }
});

/* Controlador crear usuario */
app.controller('mainCont', ( $scope )=>{
    $scope.experimentos = [
        {
            id: 1,
            titulo: 'Aspecto a evaluar 1',
            descripcion:'El primer experimento',
            revisado: true
        },
        {
            id: 2,
            titulo: 'Aspecto a evaluar 2',
            descripcion:'El segundo experimento',
            revisado: false
        },
        {
            id: 3,
            titulo: 'Aspecto a evaluar 3',
            descripcion:'El tercer experimento',
            revisado: false
        },
        {
            id: 4,
            titulo: 'Aspecto a evaluar 4',
            descripcion:'El cuarto experimento',
            revisado: false
        },
        {
            id: 5,
            titulo: 'Aspecto a evaluar 5',
            descripcion:'El quinto experimento',
            revisado: false
        },
    ]


});

/* Controlador crear usuario */
app.controller('expCont', ( $scope )=>{

    $scope.fun = (object)=>{
        object.forEach(function(element) {
            console.log(element.puntuacion)
        }, this);
    }


    $scope.calculateAverage = function(MyData){ 
        var sum = 0; 
        
        for(var i = 0; i < MyData.length; i++){
            sum += parseInt(MyData[i], 10); //don't forget to add the base 
        }

        var avg = sum/MyData.length;

        return avg; 
    };

    $scope.experimentos = [
        {
            id: 1,
            titulo: 'Aspecto a evaluar 1',
            descripcion:'El primer experimento',
            revisado: true,
            puntuacion:'',
            juez:''
            
        },
        {
            id: 2,
            titulo: 'Aspecto a evaluar 2',
            descripcion:'El segundo experimento',
            revisado: false,
            puntuacion:'',
            juez:''
        },
        {
            id: 3,
            titulo: 'Aspecto a evaluar 3',
            descripcion:'El tercer experimento',
            revisado: false,
            puntuacion:'',
            juez:''
        },
        {
            id: 4,
            titulo: 'Aspecto a evaluar 4',
            descripcion:'El cuarto experimento',
            revisado: false,
            puntuacion:'',
            juez:''
        },
        {
            id: 5,
            titulo: 'Aspecto a evaluar 5',
            descripcion:'El quinto experimento',
            revisado: false,
            puntuacion:'',
            juez:''
        },
    ]

    $scope.fun($scope.experimentos);

});