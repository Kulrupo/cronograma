function verificarSenha() {
    const senha = document.getElementById("senha").value;
    const senhaCorreta = "teamo"; 

    if (senha === senhaCorreta) {
        window.location.href = "tyamo.html";
    }
    else{
        alert("Errou a senha, tenta dinovo bobo");
    }
}