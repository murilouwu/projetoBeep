window.onload=function(){
    bt1 = document.querySelector("#b0"); 
    bt2 = document.querySelector("#b1");
    bt3 = document.querySelector("#b2");

    bt1.onclick = function(){
        var nome = document.getElementById("nome").value;
        function fun1(){};
        navigator.notification.alert(
            'Bem vindo '+nome,
            fun1,
            'Saudação',
            'ok'
        );
    };
    bt2.onclick = function(){
        var nome = document.getElementById("nome").value;
        var id = document.getElementById("idade").value;
        var idade = ver(id);
        function ver(idd){
            if(idd>0){
                return idd;
            }else{
                idd = 500;
                return idd;
            }
        }
        if(idade===500){
            navigator.vibrate(3000);
        }else{
            if(idade<18){
                navigator.notification.bep(idade);
            }else{
                function res(buttonIndex){
                    if(buttonIndex===1){
                        alert("se alista man, não pode perder o direito de passaporte né");
                    }else{
                        alert("pode tirar a habilitação não tenha medo");
                    }
                }
                navigator.notification.confirm(
                    nome+' Você é homem ou mulher',
                    res,
                    'Genero',
                    ['Homem','Mulher']
                );
            }
        }
    };
    bt2.onclick = function(){
        function exit(buttonIndex) {
            if(buttonIndex===1){
                navigator.vibrate(3000);
                navigator.app.exitApp();
            }
            else{
                return false;
            }
        }

        navigator.notification.confirm(
            'Deseja mesmo sair',
            exit,
            'Sair',
            ['Sim','Não']
        );
    };
};