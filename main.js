// Função para troca de telas
function changeScreen() {
  const screen1 = document.querySelector(".screen1")
  const screen2 = document.querySelector(".screen2")

  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

// Função para gerar uma mensagem aleatória
function newMessage() {
  const messages = [
    "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
    "Procure acender uma vela em vez de amaldiçoar a escuridão.",
    "Seja você a energia que você espera do outro.",
    "O mundo está cheio de pessoas que vão querer dizer quem você é mas é você quem decide.",
    "Tudo o que te incomoda, te domina.",
    "Quem reclama tem tempo pra sorrir?",
    "Saiba que se você não confronta, você está compactuando com isso.",
    "A vida perfeita não existe!",
    "Enquanto respirar, vamos errar",
    "Valide a sua dor, seja ela qual for.",
    "As vezes você só entendeu errado.",
    "Mudança vem com persistência!",
    "Faça das suas dores oportunidades.",
    "Um pensamento pode ser outro.",
    "Só cai quem tenta.",
    "Maturidade não vem com o tempo. Maturidade é uma escolha.",
    "A vontade, a persistência e o merecimento andam de mãos dadas.",
    "Os nossos pensamentos e vontades são consequências de como a gente se vê.",
    "Tudo passa.",
    "Quanto menos você esperar, lá vai estar o que você procura.",
    "Não fique esperando ter vontade de fazer algo, tenha disciplina.",
    "Não existe vitória sem sacrifício.",
    "Não existe progresso sem comprometimento.",
    "Não espere pelas condições perfeitas para fazer aquilo que você deseja fazer.",
    "O ego vai te levar longe e vai te deixar lá sozinho.",
    "Você já parou para pensar que precisou dar errado lá atrás para poder dar certo hoje?",
    "Toda reatividade empodera o problema.",
    "A vida não existe para você, ela existe a partir de você.",
    "Feito é melhor que perfeito.",
    "Porque você quarda uma crítica que recebeu quatro anos atrás e ignora um elogio que recebeu ontem?",
    "Controle o seu ego ou ele te controla.",
  ]

  const message = document.querySelector(".message")

  const randomIndex = Math.floor(Math.random() * messages.length)
  const randomMessage = messages[randomIndex]

  message.textContent = randomMessage
}

// Função Callback
const cookieButton = document.getElementById("cookie")
cookieButton.addEventListener("click", function () {
  newMessage()
})
