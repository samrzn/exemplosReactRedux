import { createReducer } from "@reduxjs/toolkit";
import { ProductAdd } from "../action/productAction";


const ProductsList = {

    produtos: [

        {
            img: "imagens/produtos/tela-1.jpg",
            descricao: "Smart TV Monitor LED 23.6' LG, 2 HDMI, 1 USB, Wi-Fi",
            valor: "R$ 1.440,00",
            desconto: "R$ 999,90"
        },
        {
            img: "imagens/produtos/ram-1.jpg",
            descricao: "Memória Corsair Vengeance LPX 8GB, 3200MHz, DDR4",
            valor: "R$ 323,41",
            desconto: "R$ 249,90"
        },
        {
            img: "imagens/produtos/acs-2.jpg",
            descricao: "Teclado Mecânico Razer Huntsman Tournament Edition",
            valor: "R$ 1.399,00",
            desconto: "R$ 1.049,00"
        },
        {
            img: "imagens/produtos/arm-2.jpg",
            descricao: "SSD XPG S70 Blade 2TB, M.2 NVMe, PCIe Gen4x4, Leitura: 7400MB/s e Gravação: 6400MB/s, 3D NAND",
            valor: "R$ 2.461,06",
            desconto: "R$ 1.979,90"
        },
        {
            img: "imagens/produtos/arm-1.jpg",
            descricao: "SSD Kingston NV1 500GB, M.2 2280 NVMe, Leitura: 2100MB/s e Gravação: 1700MB/s - SNVS/500G",
            valor: "R$ 552,82",
            desconto: "R$ 329,90"
        },
        {
            img: "imagens/produtos/ram-2.jpg",
            descricao: "Memória RAM Kingston Fury Beast, 32GB (2x16GB), 6000MHz, DDR5, CL40 | compatibilidade Intel XMP 3.0",
            valor: "R$ 3.101,09",
            desconto: "R$ 2.449,90"
        },
        {
            img: "imagens/produtos/acs-1.jpg",
            descricao: "Mouse Gamer Logitech G403 HERO",
            valor: "R$ 179,90",
            desconto: "R$ 149,90"
        },
        {
            img: "imagens/produtos/out-1.jpg",
            descricao: "Cadeira Escritório Husky Office 700, Preto",
            valor: "R$ 2.842,05",
            desconto: "R$ 2.099,90"
        },
        {
            img: "imagens/produtos/out-2.jpg",
            descricao: "Cadeira Gamer ThunderX3 TGC12, Preto",
            valor: "R$ 1.789,42",
            desconto: "R$ 1.449,90"
        },
        {
            img: "imagens/produtos/gpu-3.jpg",
            descricao: "Placa de Vídeo XFX Speedster SWFT210 AMD Radeon RX 6600 XT, 8GB GDDR6, 16Gbps, AMD RDNA 2 Architecture",
            valor: "R$ 4.470,47",
            desconto: "R$ 2.899,90"
        },
        {
            img: "imagens/produtos/gpu-1.jpg",
            descricao: "Placa de Vídeo Zotac - NVIDIA GeForce RTX 3060 | Ti Twin Edge LHR, 8GB, 14.0 Gbps, GDDR6, DLSS, Ray Tracing",
            valor: "R$ 5.411,65",
            desconto: "R$ 3.899,90"
        },
        {
            img: "imagens/produtos/cpu-4.jpg",
            descricao: "Processador Intel Core i7-10700K Marvel's Avengers Collector's Edition Packaging, Cache 16MB, 5.1GHz, LGA1200",
            valor: "R$ 3.529,29",
            desconto: "R$ 2.449,90"
        },
        {
            img: "imagens/produtos/cpu-1.jpg",
            descricao: "Processador AMD Ryzen 5 5600G, 3.9GHz (4.4GHz Max Turbo), AM4, Vídeo Integrado, 6 Núcleos",
            valor: "R$ 2.352,82",
            desconto: "R$ 1.299,90"
        },
        {
            img: "imagens/produtos/cpu-2.jpg",
            descricao: "Processador AMD Ryzen 7 5700X, Cache 36MB, 3.4GHz (4.6GHz Max Turbo), AM4, Sem Vídeo",
            valor: "R$ 2.235,18",
            desconto: "R$ 1.849,90"
        },
        {
            img: "imagens/produtos/cpu-3.jpg",
            descricao: "Processador Intel Core i5-11400 11ª Geração, Cache 12MB, 2.6 GHz (4.4GHz Turbo), LGA1200",
            valor: "R$ 1.764,59",
            desconto: "R$ 1.099,90"
        },
        {
            img: "imagens/produtos/gpu-2.jpg",
            descricao: "Placa de Vídeo Zotac Gaming NVIDIA GeForce GTX 1650 AMP, 4GB, GDDR6",
            valor: "R$ 2.352,89",
            desconto: "R$ 1.899,90"
        }

    ]

}

export const ProductReducer = createReducer(ProductsList, (builder) => {
    builder
        .addCase(ProductAdd, (state, action) => { state.produtos.push(action.payload) })
        .addDefaultCase((state, action) => { })
});