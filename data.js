// fungsi tombol satu satu
function pencet(id) {
    let lampu = `lampu${id}`;
    let tombol = `tombol${id}`;
    let status = `status${id}`
    let iniLampu = document.getElementById(lampu);
    let iniTombol = document.getElementById(tombol);
    let iniStatus = document.getElementById(status);
    // tombol ruang kamar
    let tk = document.getElementById('rkamar');
    let lt1 = document.getElementById('tombol1');
    let lt6 = document.getElementById('tombolNyala6');
    // tombol ruang tamu
    let tt = document.getElementById('rtamu');
    let t1 = document.getElementById('tombol2');
    let t2 = document.getElementById('tombol3');
    let t3 = document.getElementById('tombol4');
    let t4 = document.getElementById('tombol5');
    // tombol ruang keluarga
    let tkel = document.getElementById('rkeluarga');
    let t7 = document.getElementById('tombol7');
    let t8 = document.getElementById('tombol8');
    let t9 = document.getElementById('tombol9');
    // tombol ruang dapur
    let dpr = document.getElementById('rdapur');

    // khusus lampu 6
    if (id == 6) {
        let tombolNyala = document.getElementById(`tombolNyala${id}`);
        let tombolMati = document.getElementById(`tombolMati${id}`);

        if (tombolNyala.checked) {
            iniLampu.src = 'assets/images/on.gif';
            tombolNyala.disabled = true;
            tombolMati.disabled = false;
            // tombol ruang kamar 1 dan 6 nyala
            if (lt1.checked && tombolNyala.checked) {
                tk.checked = true; 
            }
        }
        if (tombolMati.checked) {
            iniLampu.src = 'assets/images/off.gif';
            tombolMati.disabled = true;
            tombolNyala.disabled = false;
            // tombol ruang kamar gagal
            tk.checked = false;
        }
    } else {
        // khusus lampu 10
        if (id == 10) {
            let tombol10 = iniTombol.value;
            if (tombol10 == 1) {
                iniLampu.src = 'assets/images/on.gif';
                dpr.checked = true;
            } else {
                iniLampu.src = 'assets/images/off.gif';
                dpr.checked = false;
            }
        } else {
            // khusus lampu 1 2 3 4 5 7 8 9
            if (iniTombol.checked) {
                iniLampu.src = 'assets/images/on.gif';
                iniStatus.innerHTML = 'Nyala';
                // tombol ruang kamar 1 dan 6 nyala
                if (iniTombol.checked && lt6.checked) {
                    tk.checked = true;
                }
                // tombol ruang tamu 2 3 4 5 nyala
                if (t1.checked && t2.checked && t3.checked && t4.checked) {
                    tt.checked = true;
                }
                // tombol ruang keluarga 7 8 9 nyala
                if (t7.checked && t8.checked && t9.checked) {
                    tkel.checked = true;
                }
            } else {
                iniLampu.src = 'assets/images/off.gif';
                iniStatus.innerHTML = 'Mati';
                // tombol ruang kamar gagal
                if (id == 1) {
                    tk.checked = false;
                // tombol ruang tamu gagal
                } else if (id == 2 || id == 3 || id == 4 || id == 5) {
                    tt.checked = false;
                // tombol ruang keluarga gagal
                } else if (id == 7 || id == 8 || id == 9) {
                    tkel.checked = false;
                }
            }
        }
    }
}

// script tombol ruangan kamar
function pencet2() {
    // fungsi lampu 1 dan 6
    let lampuKamar1 = document.getElementById('lampu1');
    let lampuKamar2 = document.getElementById('lampu6');
    let tombolKamar = document.getElementById('rkamar');
    let tombol1 = document.getElementById('tombol1');
    let tombol2 = document.getElementById('tombolNyala6');
    let tombol3 = document.getElementById('tombolMati6');
    let iniStatus1 = document.getElementById('status1');

    if (tombolKamar.checked) {
        lampuKamar1.src = 'assets/images/on.gif';
        lampuKamar2.src = 'assets/images/on.gif';
        tombol1.checked = true;
        tombol2.checked = true;
        tombol2.disabled = true;
        tombol3.disabled = false;
        iniStatus1.innerHTML = 'Nyala';
    } else {
        lampuKamar1.src = 'assets/images/off.gif';
        lampuKamar2.src = 'assets/images/off.gif';
        tombol1.checked = false;
        tombol2.checked = false;
        tombol3.checked = true;
        tombol2.disabled = false;
        tombol3.disabled = true;
        iniStatus1.innerHTML = 'Mati';
    }
}

// script tombol ruang tamu
function pencet3() {
    // fungsi lampu 2 3 4 5
    let lampuTamu1 = document.getElementById('lampu2');
    let lampuTamu2 = document.getElementById('lampu3');
    let lampuTamu3 = document.getElementById('lampu4');
    let lampuTamu4 = document.getElementById('lampu5');
    let tombol1 = document.getElementById('tombol2');
    let tombol2 = document.getElementById('tombol3');
    let tombol3 = document.getElementById('tombol4');
    let tombol4 = document.getElementById('tombol5');
    let iniStatus1 = document.getElementById('status2');
    let iniStatus2 = document.getElementById('status3');
    let iniStatus3 = document.getElementById('status4');
    let iniStatus4 = document.getElementById('status5');
    let tombolTamu = document.getElementById('rtamu');

    if (tombolTamu.checked) {
        lampuTamu1.src = 'assets/images/on.gif';
        lampuTamu2.src = 'assets/images/on.gif';
        lampuTamu3.src = 'assets/images/on.gif';
        lampuTamu4.src = 'assets/images/on.gif';
        tombol1.checked = true;
        tombol2.checked = true;
        tombol3.checked = true;
        tombol4.checked = true;
        iniStatus1.innerHTML = 'Nyala';
        iniStatus2.innerHTML = 'Nyala';
        iniStatus3.innerHTML = 'Nyala';
        iniStatus4.innerHTML = 'Nyala';
    } else {
        lampuTamu1.src = 'assets/images/off.gif';
        lampuTamu2.src = 'assets/images/off.gif';
        lampuTamu3.src = 'assets/images/off.gif';
        lampuTamu4.src = 'assets/images/off.gif';
        tombol1.checked = false;
        tombol2.checked = false;
        tombol3.checked = false;
        tombol4.checked = false;
        iniStatus1.innerHTML = 'Mati';
        iniStatus2.innerHTML = 'Mati';
        iniStatus3.innerHTML = 'Mati';
        iniStatus4.innerHTML = 'Mati';
    }
}

// script ruang keluarga
function pencet4() {
    // fungsi lampu 7 8 9
    let lkel1 = document.getElementById('lampu7');
    let lkel2 = document.getElementById('lampu8');
    let lkel3 = document.getElementById('lampu9');
    let tmb1 = document.getElementById('tombol7');
    let tmb2 = document.getElementById('tombol8');
    let tmb3 = document.getElementById('tombol9');
    let iniStatus1 = document.getElementById('status7');
    let iniStatus2 = document.getElementById('status8');
    let iniStatus3 = document.getElementById('status9');
    let tmbKel = document.getElementById('rkeluarga');

    if (tmbKel.checked) {
        lkel1.src = 'assets/images/on.gif';
        lkel2.src = 'assets/images/on.gif';
        lkel3.src = 'assets/images/on.gif';
        tmb1.checked = true;
        tmb2.checked = true;
        tmb3.checked = true;
        iniStatus1.innerHTML = 'Nyala';
        iniStatus2.innerHTML = 'Nyala';
        iniStatus3.innerHTML = 'Nyala';
    } else {
        lkel1.src = 'assets/images/off.gif';
        lkel2.src = 'assets/images/off.gif';
        lkel3.src = 'assets/images/off.gif';
        tmb1.checked = false;
        tmb2.checked = false;
        tmb3.checked = false;
        iniStatus1.innerHTML = 'Mati';
        iniStatus2.innerHTML = 'Mati';
        iniStatus3.innerHTML = 'Mati';    
    }
}

// script ruangan dapur
function pencet5() {
    // fungsi lampu 10
    let td = document.getElementById('rdapur');
    let lampu = document.getElementById('lampu10');
    let pilih = document.getElementById('tombol10');

    if (td.checked) {
        lampu.src = 'assets/images/on.gif';
        pilih.value = 1;
    } else {
        lampu.src = 'assets/images/off.gif';
        pilih.value = 0;
    }
}