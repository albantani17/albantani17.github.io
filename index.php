
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=, initial-scale=1.0">
    <title>ngoding</title>
    <link rel="stylesheet" href="style.css">
    <script src="main.js"></script>
</head>
<body>
    <div class="container">
        <h3>SCRIPT GENERATOR</h3>
        <div class="container-2">
            
            <form action="functions.php" method="POST" >
                <label for="mainSelect"></label>
                <select name="olt" id="olt">
                    <option value="majasari">Majasari</option>
                    <option value="mandalawangi">Mandalawangi</option>
                    <option value="saketi">Saketi</option>
                    <option value="jiput">Jiput</option>
                    <option value="padarincang">Padarincang</option>
                </select>
                <select name="mode" id="mainSelect">
                    <option value="">--Pilih Mode--</option>
                    <option value="home">Home</option>
                    <option value="hotspot">Hotspot</option>
                </select>
                <div class="border">
                    <select name="slot" id="slot">
                        <option value="">Slot</option>
                        <option value="1">1</option>
                        <option value="2">2</option>
                    </select>
                    <input type="number" name="gpon" id="gpon" placeholder="GPON">
                    <input type="number" name="onuid" id="onuId" placeholder="ID">
                </div>
                <div class="border">
                <input type="text" name="nama" id="name" placeholder="Nama">
                    <select name="type" id="onuType">
                        <option value="">--onu type--</option>
                        <option value="ZTE">ZTE</option>
                        <option value="ZXHN-F609">ZXHN-F609</option>
                        <option value="ZTE-F670L">ZXHN-F670L</option>
                    </select>
                </div>
                <input type="text" name="sn" id="sn" placeholder="SERIAL NUMBER">
                <input type="text" name="vlan" id="vlan" placeholder="Vlan">
                <input type="text" name="pppoe" id="pppoe" placeholder="PPPoE">
                <select name="profile" id="profile">
                    <option value="">profile</option>
                    <option value="sibernet-3511">sibernet-3511</option>
                    <option value="sibernet-3500">sibernet-3500</option>
                    <option value="sibernet-3512">sibernet-3512</option>
                    <option value="PPPoE_3600">PPPoE_3600</option>
                    <option value="pppoe3603">pppoe3603</option>
                </select>
                <button type="submit">Generate</button>
            </form>
        </div>
    </div>
</body>
</html>