//Variáveis
window.onload=function(){
   
  

var nome = document.querySelector('#nome')
var labelNome = document.querySelector('#labelNome')
var validaNome = false

var usuario = document.querySelector('#usuario')
var labelUsuario = document.querySelector('#labelUsuario')
var validaUsuario = false

var senha = document.querySelector('#senha')
var labelSenha = document.querySelector('#labelSenha')
var validaSenha = false

var confirmSenha = document.querySelector('#confirmSenha')
var labelConfirmSenha = document.querySelector('#labelConfirmSenha')
var validaConfirmSenha = true

let msgError =document.querySelector('#msgError')
let msgSuccess =document.querySelector('#msgSuccess')
let btnCadastrar = document.querySelector('#cadastrar')


let btnconfim = document.querySelector('#verConfirmSenha')
let btn = document.querySelector('#verSenha')



/*var mensagemErro = document.querySelector('#mensagemErro')
var msgSuccess = document.querySelector('#msgSuccess')*/


// Visualização da senha (olhinhos)
/*btnSenha.addEventListener('click', ()=>{
  
  if(senha.getAttribute('type') == 'password'){
    senha.setAttribute('type', 'text')
    btnSenha.setAttribute('class', 'far fa-eye')
  } else {
    senha.setAttribute('type', 'password')
    btnSenha.setAttribute('class', 'far fa-eye-slash')
  }
})

btnConfirmar.addEventListener('click', ()=>{

  if(confirmarSenha.getAttribute('type') == 'password'){
    confirmarSenha.setAttribute('type', 'text')
    btnConfirmar.setAttribute('class', 'far fa-eye')
  } else {
    confirmarSenha.setAttribute('type', 'password')
    btnConfirmar.setAttribute('class', 'far fa-eye-slash')
  }
})*/




btn.addEventListener('click',()=>{
    let inputSenha = document.querySelector('#senha')

    if(inputSenha.getAttribute('type') == 'password'){
        inputSenha.setAttribute('type', 'text')
    }else{
        inputSenha.setAttribute('type', 'password')
    }
})


btnconfim.addEventListener('click', ()=>{
    let verSenha = document.querySelector('#verConfirmSenha')
    if(verSenha.getAttribute('type') == 'password'){
        verSenha.setAttribute('type', 'text')
        verSenha.setAttribute('class', 'far fa-eye')
    } else {
        verSenha.setAttribute('type', 'password')
        verSenha.setAttribute('class', 'far fa-eye-slash')
    }
})

//Validação de Cadastro
nome.addEventListener('keyup', () => {
  if (nome.value.length <= 4){
    labelNome.innerHTML = 'Nome: Insira no mínimo 5 caracteres'
    labelNome.setAttribute('style', 'color: red')
    nome.setAttribute('style', 'border-color: red')
    validaNome = false
  } else {
    labelNome.innerHTML = 'Nome'
    labelNome.setAttribute('style', 'color: navy')
    nome.setAttribute('style', 'border-color: navy')
    validaNome = true
  }
})

usuario.addEventListener('keyup', () => {
  if (usuario.value.length < 5){
    labelUsuario.innerHTML = 'Usuário: Insira no mínimo 5 caracteres'
    labelUsuario.setAttribute('style', 'color: red')
    usuario.setAttribute('style', 'border-color: red')
    validaUsuario = false
  } else {
    labelUsuario.innerHTML = 'Usuário'
    labelUsuario.setAttribute('style', 'color: navy')
    usuario.setAttribute('style', 'border-color: navy')
    validaUsuario = true
  }
})

senha.addEventListener('keyup', () => {
  if (senha.value.length < 5){
    labelSenha.innerHTML = 'Senha Insira no mínimo 5 caracteres'
    labelSenha.setAttribute('style', 'color: red')
    senha.setAttribute('style', 'border-color: red')
    validaSenha = false
  } else {
    labelSenha.innerHTML = 'Senha'
    labelSenha.setAttribute('style', 'color: navy')
    senha.setAttribute('style', 'border-color: navy')
    validaSenha = true
  }
})

confirmSenha.addEventListener('keyup', () => {
  if (senha.value != confirmSenha.value){
        labelConfirmSenha.innerHTML = ('Confirmar Senha: As senhas não conferem')
        labelConfirmSenha.setAttribute('style','color: red')
        confirmSenha.setAttribute('style','border-color: red')
        validaConfirmSenha = false
    } else {
        labelConfirmSenha.innerHTML = 'Confirmar Senha'
        labelConfirmSenha.setAttribute('style','color: navy')
        confirmSenha.setAttribute('style','border-color: navy')
        validaConfirmSenha = true
  }
})

/*Verificação das etapas*/


btnCadastrar.addEventListener('click',()=>{
    if(validaNome && validaUsuario && validaSenha && validaConfirmSenha){
        msgSuccess.setAttribute('style','display: block')
        msgSuccess.innerHTML='Usuário cadastrado!'
        msgError.setAttribute('style','display: none')
        msgError.innerHTML=''
       
    } else { 
        msgError.setAttribute('style','display: block')
        msgError.innerHTML='Preencha todos os campos corretamente!'
        msgSuccess.innerHTML=''
        msgSuccess.setAttribute('style','display: none')
      
    }

    let listaUser = JSON.parse(localStorage.getItem('listaUser') || '[]' )

        listaUser.push({
            nomeCad: nome.value,
            userCad: usuario.value,
            senhaCad: senha.value
        })

            localStorage.setItem('listaUser', JSON.stringify(listaUser))

            setTimeout(()=>{
                        window.location.href = 'http://127.0.0.1:5500/index.html'
                    },4000)

  })
}
   


