function submitForm() {
    const mode = document.getElementById("mainSelect").value;
    const slot = document.getElementById("slot").value;
    const gpon = document.getElementById("gpon").value;
    const onuId = document.getElementById("onuId").value;
    const onuType = document.getElementById("onuType").value;
    const sn = document.getElementById("sn").value;
    const name = document.getElementById("name").value;
    const vlan = document.getElementById("vlan").value;
    const profile = document.getElementById("profile").value;
    const pppoe = document.getElementById("pppoe").value;

    localStorage.setItem("mode",mode);
    localStorage.setItem("slot",slot);
    localStorage.setItem("gpon", gpon);
    localStorage.setItem("onuId",onuId);
    localStorage.setItem("onuType",onuType);
    localStorage.setItem("sn", sn);
    localStorage.setItem("name", name)
    localStorage.setItem("vlan",vlan)
    localStorage.setItem("profile",profile);
    localStorage.setItem("pppoe", pppoe)

    if (mode == "home"){
        window.location.href = "home.html";
    } else if (mode == "hotspot") {
        window.location.href = "hotspot.html";
    } else {
        alert("Invalid mode");
    }
}

function checkUndefine(...input) {
    for (let i = 0; i < input.length; i++) {
        if (!input) {
            throw new Error("Input Kosong");
        }
    }
}

function displayResultHotspot() {
    const mode = localStorage.getItem("mode");
    const slot = localStorage.getItem("slot");
    const gpon = localStorage.getItem("gpon");
    const onuId = localStorage.getItem("onuId");
    const onuType = localStorage.getItem("onuType");
    const sn = localStorage.getItem("sn");
    const name = localStorage.getItem("name");
    const vlan = localStorage.getItem("vlan");

    // D = Display
    document.getElementById("modeD").innerHTML = mode;
    
    // Mengupdate semua elemen dengan class slotD, gponD, onuIdD, dan vlanD
    updateAllElements("slotD", slot);
    updateAllElements("gponD", gpon);
    updateAllElements("onuIdD", onuId);
    updateAllElements("vlanD", vlan);

    document.getElementById("onuTypeD").innerHTML = onuType;
    document.getElementById("snD").innerHTML = sn;
    document.getElementById("nameD").innerHTML = name;
}

// Fungsi untuk mengupdate semua elemen dengan class tertentu
function updateAllElements(className, value) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = value;
    }
}

function displayResultHome() {
    const mode = localStorage.getItem("mode");
    const slot = localStorage.getItem("slot");
    const gpon = localStorage.getItem("gpon");
    const onuId = localStorage.getItem("onuId");
    const onuType = localStorage.getItem("onuType");
    const sn = localStorage.getItem("sn");
    const name = localStorage.getItem("name");
    const vlan = localStorage.getItem("vlan");
    const profile = localStorage.getItem("profile");
    const pppoe = localStorage.getItem("pppoe")

    // D = Display
    document.getElementById("modeD").innerHTML = mode;
    
    // Mengupdate semua elemen dengan class slotD, gponD, onuIdD, dan vlanD
    updateAllElements("slotD", slot);
    updateAllElements("gponD", gpon);
    updateAllElements("onuIdD", onuId);
    updateAllElements("vlanD", vlan);
    updateAllElements("pppoeD", pppoe);

    document.getElementById("onuTypeD").innerHTML = onuType;
    document.getElementById("snD").innerHTML = sn;
    document.getElementById("nameD").innerHTML = name;
    document.getElementById("profileD").innerHTML = profile;
}

// Fungsi untuk mengupdate semua elemen dengan class tertentu
function updateAllElements(className, value) {
    const elements = document.getElementsByClassName(className);
    for (let i = 0; i < elements.length; i++) {
        elements[i].innerHTML = value;
    }
}