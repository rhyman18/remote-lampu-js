// update javasacript supaya lebih terstruktur
let lampu = [
    {
        id: 1,
        lampu: "off",
        status: "Mati",
        ruang: "kamar",
    },
    {
        id: 2,
        lampu: "off",
        status: "Mati",
        ruang: "tamu",
    },
    {
        id: 3,
        lampu: "off",
        status: "Mati",
        ruang: "tamu",
    },
    {
        id: 4,
        lampu: "off",
        status: "Mati",
        ruang: "tamu",
    },
    {
        id: 5,
        lampu: "off",
        status: "Mati",
        ruang: "tamu",
    },
    {
        id: 6,
        lampu: "off",
        status: "Nyala",
        ruang: "kamar",
    },
    {
        id: 7,
        lampu: "off",
        status: "Mati",
        ruang: "keluarga",
    },
    {
        id: 8,
        lampu: "off",
        status: "Mati",
        ruang: "keluarga",
    },
    {
        id: 9,
        lampu: "off",
        status: "Mati",
        ruang: "keluarga",
    },
    {
        id: 10,
        lampu: "off",
        status: "Mati",
        ruang: "dapur",
    }
]

// gambar lampu
let pathGambar = "assets/images/";

// fungsi tombol
function pencet(e) {
    let nyala = document.getElementById(`lampu${lampu[e].id}`);
    let tombol = document.getElementById(`tombol${lampu[e].id}`);
    let status = document.getElementById(`status${lampu[e].id}`);
    let ruangan = document.getElementById(lampu[e].ruang);

    // khusus ruang kamar 2
    if (lampu[e].id === 6) {
        // tombol nyala
        let tombol6 = document.getElementById(`tombol${lampu[e].status}${lampu[e].id}`);

        if (lampu[e].lampu === "off") {
            // mengubah data menjadi nyala
            lampu[e].lampu = "on";

            // disable tombol nyala
            tombol6.disabled = true;
            lampu[e].status = "Mati";

            // cek ruangan kamar
            if (lampu[0].lampu === "on")
                ruangan.checked = true;
        } else if (lampu[e].lampu === "on") {
            // mengubah data menjadi mati
            lampu[e].lampu = "off";

            // disable tombol mati
            tombol6.disabled = true;
            lampu[e].status = "Nyala";

            // tombol ruangan
            ruangan.checked = false;
        }

        // enable tombol sebaliknya
        let tombol6Switch = document.getElementById(`tombol${lampu[e].status}${lampu[e].id}`);
        tombol6Switch.disabled = false;

        // eksekusi gambar
        nyala.src = `${pathGambar}${lampu[e].lampu}.gif`;

    } else if (lampu[e].id === 10) {
        if (parseInt(tombol.value) === 1) {
            // mengubah data menjadi nyala
            lampu[e].lampu = "on";
            ruangan.checked = true;

        } else {
            // mengubah data menjadi mati
            lampu[e].lampu = "off";
            ruangan.checked = false;
        }

        // eksekusi gambar
        nyala.src = `${pathGambar}${lampu[e].lampu}.gif`;

    } else {
        // lampu ruang kamar 1, tamu, keluarga
        if (tombol.checked) {
            // mengubah data menjadi nyala
            lampu[e].lampu = "on";
            lampu[e].status = "Nyala";

            // cek ruangan
            let kelompok = lampu.filter(x => x.ruang == lampu[e].ruang);

            if (kelompok.every(y => y.lampu == "on")) {
                ruangan.checked = true;
            }

        } else {
            // mengubah data menjadi mati
            lampu[e].lampu = "off";
            lampu[e].status = "Mati";
            ruangan.checked = false;
        }

        // eksekusi gambar
        nyala.src = `${pathGambar}${lampu[e].lampu}.gif`;

        // eksekusi label
        status.innerText = lampu[e].status;
    }
}

// fungsi ruangan
function pencet2(f) {
    // tombol ruangan
    let tombolRuangan = document.getElementById(f);

    // filter data berdasarkan ruangan
    let kelompok = lampu.filter(g => g.ruang == f);

    // kondisi ruangan aktif
    if (tombolRuangan.checked) {
        // perulangan lampu per ruangan
        for (let i = 0; i < kelompok.length; i++) {
            // variabel tiap lampu
            let nyala = document.getElementById(`lampu${kelompok[i].id}`);
            let tombol = document.getElementById(`tombol${kelompok[i].id}`);
            let status = document.getElementById(`status${kelompok[i].id}`);

            // kondisi lampu 6
            if (kelompok[i].id === 6) {
                let tombol6 = document.getElementById(`tombol${kelompok[i].status}${kelompok[i].id}`);
                kelompok[i].lampu = "on";
                kelompok[i].status = "Mati";

                // eksekusi gambar
                nyala.src = `${pathGambar}${kelompok[i].lampu}.gif`;

                // tombol nyala disabled
                tombol6.checked = true;
                tombol6.disabled = true;

                // tombol mati aktifkan
                tombol6Switch = document.getElementById(`tombol${kelompok[i].status}${kelompok[i].id}`);
                tombol6Switch.disabled = false;

            } else if (kelompok[i].id === 10) {
                kelompok[i].lampu = "on";

                // eksekusi gambar
                nyala.src = `${pathGambar}${kelompok[i].lampu}.gif`;

                // mengganti label
                tombol.value = 1;
            } else {
                kelompok[i].lampu = "on";
                kelompok[i].status = "Nyala";

                // eksekusi gambar
                nyala.src = `${pathGambar}${kelompok[i].lampu}.gif`;

                // eksekusi label
                status.innerText = kelompok[i].status;

                // eksekusi tombol
                tombol.checked = true;
            }
        }
    } else {
        // perulangan lampu per ruangan untuk mematikan
        for (let i = 0; i < kelompok.length; i++) {
            // variabel tiap lampu
            let nyala = document.getElementById(`lampu${kelompok[i].id}`);
            let tombol = document.getElementById(`tombol${kelompok[i].id}`);
            let status = document.getElementById(`status${kelompok[i].id}`);

            // kondisi lampu 6
            if (kelompok[i].id === 6) {
                let tombol6 = document.getElementById(`tombol${kelompok[i].status}${kelompok[i].id}`);
                kelompok[i].lampu = "off";
                kelompok[i].status = "Nyala";

                // eksekusi gambar
                nyala.src = `${pathGambar}${kelompok[i].lampu}.gif`;

                // tombol mati disabled
                tombol6.checked = true;
                tombol6.disabled = true;

                // tombol nyala aktifkan
                tombol6Switch = document.getElementById(`tombol${kelompok[i].status}${kelompok[i].id}`);
                tombol6Switch.disabled = false;

            } else if (kelompok[i].id === 10) {
                kelompok[i].lampu = "off";

                // eksekusi gambar
                nyala.src = `${pathGambar}${kelompok[i].lampu}.gif`;

                // mengganti label
                tombol.value = 0;
            } else {
                kelompok[i].lampu = "off";
                kelompok[i].status = "Mati";

                // eksekusi gambar
                nyala.src = `${pathGambar}${kelompok[i].lampu}.gif`;

                // eksekusi label
                status.innerText = kelompok[i].status;
                
                // eksekusi tombol
                tombol.checked = false;
            }
        }
    }
}