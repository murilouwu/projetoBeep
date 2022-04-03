window.onload = function(){
    var nome = document.querySelector('#nome');
    var name = nome.value;
    var idade = document.querySelector('#idade');
    var idd = int.Parse(idade.value);
    var bt1 = document.getElementById('#b0');
    var bt2 = document.getElementById('#b1');
    var bt3 = document.getElementById('#b2');

    bt1.addEventListener('click' ,function(){
        function fun1(){};
        navigator.notification.alert(
            'Bem vindo '+name,
            fun1,
            'Saudação',
            'ok'
        );
    });

    bt2.onclick = function(){
        var id = ver(idd);
        function ver(idd){
            if(idd>0){
                return idd;
            }else{
                idd = 500;
                return idd;
            }
        }
        if(id===500){
            navigator.vibrate(3000);
        }else{
            if(id<18){
                navigator.notification.bep(id);
            }else{
                function res(buttonIndex){
                    if(buttonIndex===1){
                        alert("se alista man, não pode perder o direito de passaporte né");
                    }else{
                        alert("pode tirar a habilitação não tenha medo");
                    }
                }
                navigator.notification.confirm(
                    name+' Você é homem ou mulher',
                    res,
                    'Genero',
                    ['Homem','Mulher']
                );
            }
        }
    };

    bt3.onclick = function(){
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