document.addEventListener("DOMContentLoaded", () => {
    
    // 1. Interação do botão de "Impacto Real"
    const btnImpacto = document.getElementById("btn-alerta");
    
    if (btnImpacto) {
        btnImpacto.addEventListener("click", () => {
            alert(
                "💡 Impacto do Agro Sustentável:\n\n" +
                "• Economia de até 40% de água com irrigação inteligente.\n" +
                "• Redução de 25% nas emissões de CO2 com o plantio direto.\n" +
                "• Preservação de matas ciliares integradas às áreas produtivas."
            );
        });
    }

    // 2. Envio do Formulário de Contato
    const form = document.getElementById("agro-form");
    
    if (form) {
        form.addEventListener("submit", (event) => {
            event.preventDefault(); // Evita o recarregamento da página
            
            // Capturando os valores digitados
            const nome = document.getElementById("nome").value;
            const email = document.getElementById("email").value;
            
            // Simulação de envio bem-sucedido
            alert(`Obrigado pelo contato, ${nome}! Nossa equipe focada em sustentabilidade responderá para