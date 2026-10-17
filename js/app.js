
/*
 * NEXUS - Dashboard Interativo
 * Projeto SENAI 2026
 *
 * Arquivo principal da aplicação.
 */

"use strict";

// Executa quando o HTML estiver carregado.
document.addEventListener("DOMContentLoaded", () => {

    console.log("NEXUS Dashboard iniciado!");

    // Exibir a data atual.
    const hoje = new Date();

    console.log(
        "Data atual:",
        hoje.toLocaleDateString("pt-BR")
    );

});
