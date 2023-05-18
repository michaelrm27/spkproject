function hitung() {
    // Ambil nilai matriks dari input
    let a11 = parseFloat(document.getElementsByName("a1k1")[0].value);
    let a12 = parseFloat(document.getElementsByName("a1k2")[0].value);
    let a13 = parseFloat(document.getElementsByName("a1k3")[0].value);
    let a14 = parseFloat(document.getElementsByName("a1k4")[0].value);
  
    let a21 = parseFloat(document.getElementsByName("a2k1")[0].value);
    let a22 = parseFloat(document.getElementsByName("a2k2")[0].value);
    let a23 = parseFloat(document.getElementsByName("a2k3")[0].value);
    let a24 = parseFloat(document.getElementsByName("a2k4")[0].value);
  
    let a31 = parseFloat(document.getElementsByName("a3k1")[0].value);
    let a32 = parseFloat(document.getElementsByName("a3k2")[0].value);
    let a33 = parseFloat(document.getElementsByName("a3k3")[0].value);
    let a34 = parseFloat(document.getElementsByName("a3k4")[0].value);
  
    // Ambil nilai bobot dari input
    let w1 = parseFloat(document.getElementsByName("k1")[0].value);
    let w2 = parseFloat(document.getElementsByName("k2")[0].value);
    let w3 = parseFloat(document.getElementsByName("k3")[0].value);
    let w4 = parseFloat(document.getElementsByName("k4")[0].value);
  
    // Hitung nilai normalisasi
    let s1 = Math.sqrt(Math.pow(a11, 2) + Math.pow(a12, 2) + Math.pow(a13, 2) + Math.pow(a14, 2));
    let s2 = Math.sqrt(Math.pow(a21, 2) + Math.pow(a22, 2) + Math.pow(a23, 2) + Math.pow(a24, 2));
    let s3 = Math.sqrt(Math.pow(a31, 2) + Math.pow(a32, 2) + Math.pow(a33, 2) + Math.pow(a34, 2));
  
    let n11 = a11 / s1;
    let n12 = a12 / s1;
    let n13 = a13 / s1;
    let n14 = a14 / s1;
  
    let n21 = a21 / s2;
    let n22 = a22 / s2;
    let n23 = a23 / s2;
    let n24 = a24 / s2;
  
    let n31 = a31 / s3;
    let n32 = a32 / s3;
    let n33 = a33 / s3;
    let n34 = a34 / s3;
  
    // Hitung nilai preferensi
    let v1 = w1 * n11 + w2 * n12 + w3 * n13 + w4 * n14;
    let v2 = w1 * n21 + w2 * n22 + w3 * n23 + w4 * n24;
    let v3 = w1 * n31 + w2 * n32 + w3 * n33 + w4 * n34;
  
    // Tampilkan hasil
    let table = document.getElementById("hasil");
    table.innerHTML = "";
    let row1 = table.insertRow();
    let cell11 = row1.insertCell();
    let cell12 = row1.insertCell();
    cell11.innerHTML = "A1";
    cell12.innerHTML = v1.toFixed(4);
    let row2 = table.insertRow();
    let cell21 = row2.insertCell();
    let cell22 = row2.insertCell();
    cell21.innerHTML = "A2";
    cell22.innerHTML = v2.toFixed(4);
    let row3 = table.insertRow();
    let cell31 = row3.insertCell();
    let cell32 = row3.insertCell();
    cell31.innerHTML = "A3";
    cell32.innerHTML = v3.toFixed(4);
  }
  