
let btn = document.querySelector('.button')

btn.addEventListener('click', pegarDados)



function pegarDados(){
    let form = document.querySelector('form')
    
    let pessoa = {
        nome: form.nome.value,
        email: form.email.value,
        dataNascimento: form.dataNascimento.value,
        endereco: form.endereco.value,
        plano: form.plano.value,
        sexo: form.sexo.value,
        cpf: form.cpf.value
    }
    
    sessionStorage.pessoa = JSON.stringify(pessoa)
    location.href = 'http://127.0.0.1:5500/confirmarCadastro.html'
}