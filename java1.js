function mostrarImagenes() {
    const contenedor = document.getElementById("contenedor");
    contenedor.innerHTML = ""; // Limpiar contenido previo

    const imagenes = [
        "https://scontent.flim16-3.fna.fbcdn.net/v/t39.30808-6/475651950_484875504663166_1378088097566686988_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=cc71e4&_nc_eui2=AeHLKbPVtT6W8NsyIRFACiYZ6MYN1424_pPoxg3Xjbj-k5x3y1euDiQNcyPSBdvGKzpByreizIr8VNRGWRrytNNq&_nc_ohc=33tJVbj9R5EQ7kNvgGh7eTn&_nc_oc=AditSho9cBaUKVmFWzQMWAV6sKbr_09Ta9PNj6qFanqQ_s7tsUzppzpnNORx_pwnuixHZdX8cHKrNuQmRO7864Q8&_nc_zt=23&_nc_ht=scontent.flim16-3.fna&_nc_gid=ApgGnO0EN8SdTj673Oaq6vK&oh=00_AYAlGjQlMTvVwyrw_9FBIRvBeIJKaWJLZNSYoBD2xsnIHQ&oe=67A819E5",
        "https://scontent.flim16-2.fna.fbcdn.net/v/t39.30808-6/472172790_463309253486458_2694054742554208002_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeED4JS_qzK6NDXZwPYUm77XcYRuI2K0WvFxhG4jYrRa8XE93B7xk20YvKuTQxJryvHnwF2Lq8tQNlpLlpowRK7I&_nc_ohc=oy1GHtecPt0Q7kNvgGhPfhO&_nc_oc=AdjYX_wsjf81f97p4I90Ezas-Hmqyne0KmsgRh8_QvsE0BOuQnuUjLpbBh-U9Qi6bpPvv9ESIDxPSBiNQqHLAyV6&_nc_zt=23&_nc_ht=scontent.flim16-2.fna&_nc_gid=ALHvyCD2boaJ1fU3Z9IEHuX&oh=00_AYB8WzPPMw3b6O8JcNozelSB8Hxj8d-AqkDNyJa3b6m5WQ&oe=67A81863",
        "https://scontent.flim16-3.fna.fbcdn.net/v/t39.30808-6/452564620_351469318003786_3949669853322319544_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=f727a1&_nc_eui2=AeEBjxlx5-5eenr4Q5zZTpQ8eQNzbWCATD15A3NtYIBMPeL4HKnTTDrxN7_qV9eTYCFTzg5bXrkW9q2l-PxRGHGr&_nc_ohc=78sX5tGJo2sQ7kNvgFtZkjD&_nc_oc=AdjqYTr82kY18s7s7RvF1JraPAXuNsqZTjyN00k3goOPG3sumZe-xHD3-oqgNtzJLpkrGJFZeph8WVOUIahi1wl6&_nc_zt=23&_nc_ht=scontent.flim16-3.fna&_nc_gid=AIlL1Mzi0WZvimJfHLZoZ0W&oh=00_AYA45pT7CYf4oYLuxix1sCnZTB-t4sYRI4MIhOFxO-RpXQ&oe=67A821BF",
        "https://scontent.flim16-3.fna.fbcdn.net/v/t39.30808-6/475329212_991131742863154_8154426421305880533_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=833d8c&_nc_eui2=AeFR3YND-FNo3Y_LX2Vl2NI9DxZ8plgJc-EPFnymWAlz4S32sBs4JWIBJJfx3IRKxfJwXWq2m_cNcmpg1IFAZV9U&_nc_ohc=iPrUtA3hSpEQ7kNvgEwgpXm&_nc_oc=AdgRmVG48bNc4djIUWq1tkAlPoxUeWY7S1cgkqiODJu9Arp171i5iVpWbONqAq2l8qawAEMqxEUAQjplLwyk8FgL&_nc_zt=23&_nc_ht=scontent.flim16-3.fna&_nc_gid=A0D5QB_sMTBGnjxAB95CgX2&oh=00_AYBenDGSG2ytG3lmjhDiwGNDKudeEgsBFDMBibbycmYO-w&oe=67A81F2B"
    ];

    imagenes.forEach((src, index) => {
        setTimeout(() => {
            const img = document.createElement("img");
            img.src = src;
            img.classList.add("imagen");
            contenedor.appendChild(img);
            
            setTimeout(() => img.classList.add("mostrar"), 50);
        }, index * 200); // Retraso entre imágenes
    });
}