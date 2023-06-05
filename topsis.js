function hitungcoba() {
    // Ambil nilai matriks dari input
    let a11 = parseFloat(document.querySelector("#a11").value);
    let a12 = parseFloat(document.querySelector("#a12").value);
    let a13 = parseFloat(document.querySelector("#a13").value);
    let a14 = parseFloat(document.querySelector("#a14").value);
    
  
    let a21 = parseFloat(document.querySelector("#a21").value);
    let a22 = parseFloat(document.querySelector("#a22").value);
    let a23 = parseFloat(document.querySelector("#a23").value);
    let a24 = parseFloat(document.querySelector("#a24").value);
    
  
    let a31 = parseFloat(document.querySelector("#a31").value);
    let a32 = parseFloat(document.querySelector("#a32").value);
    let a33 = parseFloat(document.querySelector("#a33").value);
    let a34 = parseFloat(document.querySelector("#a34").value);
    
  
    let a41 = parseFloat(document.querySelector("#a41").value);
    let a42 = parseFloat(document.querySelector("#a42").value);
    let a43 = parseFloat(document.querySelector("#a43").value);
    let a44 = parseFloat(document.querySelector("#a44").value);

  
    // Ambil nilai bobot dari input
    let w1 = parseFloat(document.querySelector("#w1").value);
    let w2 = parseFloat(document.querySelector("#w2").value);
    let w3 = parseFloat(document.querySelector("#w3").value);
    let w4 = parseFloat(document.querySelector("#w4").value);
  
  // Normalisasi matriks keputusan
    var normA11 = a11 / Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31 + a41 * a41 );
    var normA12 = a12 / Math.sqrt(a12 * a12 + a22 * a22 + a32 * a32 + a42 * a42 );
    var normA13 = a13 / Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33 + a43 * a43 );
    var normA14 = a14 / Math.sqrt(a14 * a14 + a24 * a24 + a34 * a34 + a44 * a44 );
    
  
    var normA21 = a21 / Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31 + a41 * a41 );
    var normA22 = a22 / Math.sqrt(a12 * a12 + a22 * a22 + a32 * a32 + a42 * a42 );
    var normA23 = a23 / Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33 + a43 * a43 );
    var normA24 = a24 / Math.sqrt(a14 * a14 + a24 * a24 + a34 * a34 + a44 * a44 );
    
  
    var normA31 = a31 / Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31 + a41 * a41 );
    var normA32 = a32 / Math.sqrt(a12 * a12 + a22 * a22 + a32 * a32 + a42 * a42 );
    var normA33 = a33 / Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33 + a43 * a43 );
    var normA34 = a34 / Math.sqrt(a14 * a14 + a24 * a24 + a34 * a34 + a44 * a44 );
    
  
    var normA41 = a41 / Math.sqrt(a11 * a11 + a21 * a21 + a31 * a31 + a41 * a41 );
    var normA42 = a42 / Math.sqrt(a12 * a12 + a22 * a22 + a32 * a32 + a42 * a42 );
    var normA43 = a43 / Math.sqrt(a13 * a13 + a23 * a23 + a33 * a33 + a43 * a43 );
    var normA44 = a44 / Math.sqrt(a14 * a14 + a24 * a24 + a34 * a34 + a44 * a44 );
    
  
    // Matriks ternormalisasi
    var normalizedMatrix = [    
      [normA11, normA12, normA13, normA14],
      [normA21, normA22, normA23, normA24],
      [normA31, normA32, normA33, normA34],
      [normA41, normA42, normA43, normA44]];
        // Membuat matriks terbobot
    var weightedMatrix = [
      [normA11 * w1, normA12 * w2, normA13 * w3, normA14 * w4],
      [normA21 * w1, normA22 * w2, normA23 * w3, normA24 * w4],
      [normA31 * w1, normA32 * w2, normA33 * w3, normA34 * w4],
      [normA41 * w1, normA42 * w2, normA43 * w3, normA44 * w4]
    ];
  
    // Menghitung solusi ideal positif (A+)
    var idealPositive = [
      Math.min(...weightedMatrix.map((row) => row[0])),
      Math.min(...weightedMatrix.map((row) => row[1])),
      Math.min(...weightedMatrix.map((row) => row[2])),
      Math.max(...weightedMatrix.map((row) => row[3]))
    ];
  
    // Menghitung solusi ideal negatif (A-)
    var idealNegative = [
      Math.max(...weightedMatrix.map((row) => row[0])),
      Math.max(...weightedMatrix.map((row) => row[1])),
      Math.max(...weightedMatrix.map((row) => row[2])),
      Math.min(...weightedMatrix.map((row) => row[3]))
    ];
  
    // Menghitung jarak solusi ideal positif (D+)
    var positiveDistances = weightedMatrix.map((row) =>
      Math.sqrt(
        (row[0] - idealPositive[0]) ** 2 +
        (row[1] - idealPositive[1]) ** 2 +
        (row[2] - idealPositive[2]) ** 2 +
        (row[3] - idealPositive[3]) ** 2 
      )
    );
  
    // Menghitung jarak solusi ideal negatif (D-)
    var negativeDistances = weightedMatrix.map((row) =>
      Math.sqrt(
        (row[0] - idealNegative[0]) ** 2 +
        (row[1] - idealNegative[1]) ** 2 +
        (row[2] - idealNegative[2]) ** 2 +
        (row[3] - idealNegative[3]) ** 2 
      )
    );
  
    // Menghitung nilai preferensi (V)
    var preferenceValues = negativeDistances.map((negativeDistance, index) =>
      negativeDistance / (negativeDistance + positiveDistances[index])
    );
  
    // Mengurutkan alternatif berdasarkan nilai preferensi (V)
    var sortedAlternatives = preferenceValues
      .map((value, index) => [value, index + 1])
      .sort((a, b)=> b[0] - a[0])
      .map((item) => item[1]);
  
        // Menampilkan hasil perankingan
    // var result = document.getElementById('result');
    // result.innerHTML = 'Urutan perankingan: ' + sortedAlternatives.join(', ');
  
    // // Tampilkan hasil riil
  
    // let hasil1 = document.querySelector("#v1");
    // let hasil2 = document.querySelector("#v2");
    // let hasil3 = document.querySelector("#v3");
    // let hasil4 = document.querySelector("#v4");
    // let hasil5 = document.querySelector("#v5");
  
    // hasil1.innerHTML = v1.toFixed(4);
    // hasil2.innerHTML = v2.toFixed(4);
    // hasil3.innerHTML = v3.toFixed(4);
    // hasil4.innerHTML = v4.toFixed(4);
    // hasil5.innerHTML = v5.toFixed(4);
  
    var rankTableBody = document.getElementById('rankhasil');
    for (var i = 0; i < sortedAlternatives.length; i++) {
      var alternative = sortedAlternatives[i];
      var preferenceValue = preferenceValues[alternative - 1];
  
      var row = document.createElement('tr');
  
      var alternativeCell = document.createElement('td');
      alternativeCell.textContent = alternative;
      row.appendChild(alternativeCell);
  
      var preferenceValueCell = document.createElement('td');
      preferenceValueCell.textContent = preferenceValue.toFixed(4); 
      row.appendChild(preferenceValueCell);
  
      rankTableBody.appendChild(row);
    }
  
  }
  