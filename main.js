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