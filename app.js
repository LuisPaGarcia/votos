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

