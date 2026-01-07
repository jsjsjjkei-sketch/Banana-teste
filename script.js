function entrar() {
  const senha = document.getElementById("senha").value;
  const erro = document.getElementById("erro");

  if (senha === "Juan") {
    document.getElementById("login").style.display = "none";
    document.getElementById("painel").style.display = "block";
  } else {
    erro.innerText = "❌ Senha incorreta";
  }
}