class ValidaFormulario{
    constructor(){
        this.formulario = document.querySelector('.formulario');
        this.eventos();
    }

    eventos(){
        this.formulario.addEventListener('submit', e=>{
            this.hendleSubmit(e);
        });
    }

    hendleSubmit(e){
        e.preventDefault();
        const camposValidos = this.camposValidos();
        const senhasValidas = this.senhasSaoValidas();
        if(camposValidos && senhasValidas){
            alert("Formulario enviado com sucesso!");
            this.formulario.submit();
        }
    }

    senhasSaoValidas(){
        let valid = true;
        const senha = this.formulario.querySelector('.senha');
        const repetirSenha = this.formulario.querySelector('.repetir-senha');
        if(senha.value !== repetirSenha.value){
            valid = false;
            this.criaErro(senha,'Senha e repetir senha precisam ser iguais.');
            this.criaErro(repetirSenha,'Senha e repetir senha precisam ser iguais.');
        }
        if(senha.value.length < 6 || senha.value.length >12){
            valid = false;
            this.criaErro(senha,'Senha precisa estar entre 6 e 12 caracteres.');
        }
        return valid;
    }

    camposValidos(){
        let valid = true;
        for(let errorText of this.formulario.querySelectorAll('.error-text')){
            errorText.remove();
        }

        for(let campo of this.formulario.querySelectorAll('.validar')){
            const label = campo.previousElementSibling.innerText;//pega o nome do label do html EX: Nome,CPF,Senha
            if(!campo.value){//se estiver em branco
                this.criaErro(campo,`o campo "${label}" nao pode estar em branco.`);        
                valid = false;
            }

            if(campo.classList.contains('cpf')){
                if(!this.validaCPF(campo)) valid = false;

            }
            if(campo.classList.contains('usuario')){
                if(!this.validaUsuario(campo)) valid = false;

            }
        }
        return valid;
    }

    validaUsuario(campo){
        const usuario = campo.value;
        let valid = true;

        if(usuario.length <3 ||usuario.length >12){
            this.criaErro(campo,'Usuario invalido. Min. de 3 caracteres e max. de 12 caracteres');
            valid = false;
        }
        if(!usuario.match(/^[a-zA-Z0-9]+$/g)){
            this.criaErro(campo,'Usuario precisa ter apenas numeros e/ou letras');
            valid = false;
        }
        return valid;
    }

    validaCPF(campo){
        const cpf = new ValidaCPF(campo.value);

        if(!cpf.valida()){
            this.criaErro(campo,'CPF inválido.');
            return false;
        }
        return true;
    }

    criaErro(campo,msg){
        const div = document.createElement('div');
        div.innerHTML = msg;
        div.classList.add('error-text');
        campo.insertAdjacentElement('afterend',div);
    }
}
const valida = new ValidaFormulario();