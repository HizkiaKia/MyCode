
// Fungsi untuk memeriksa usia kucing
function checkCats(catsTuti, catsNining) {
  // Membuat salinan dari array catsTuti
  let catsTutiCopy = [...catsTuti];
  // Menghapus usia kucing pertama dan dua terakhir dari array salinan
  catsTutiCopy.splice(0, 1);
  catsTutiCopy.splice(-2);
  // Membuat array yang berisi data Tuti (yang sudah dikoreksi) dan data Nining
  let allCats = catsTutiCopy.concat(catsNining);
  // Menghitung jumlah kucing yang tersisa
  let catCount = allCats.length;
  // Untuk setiap kucing yang tersisa, menampilkan di konsol apakah itu kucing dewasa atau kucing kecil
  for (let i = 0; i < catCount; i++) {
    // Mendapatkan usia kucing saat ini
    let catAge = allCats[i];
    // Menentukan apakah kucing itu dewasa atau kecil
    let catStatus = catAge >= 3 ? "dewasa" : "kecil";
    // Menampilkan di konsol dengan format "Kucing Nomor x adalah Kucing y, dan berusia z tahun"
    console.log(`Kucing Nomor ${i + 1} adalah Kucing ${catStatus}, dan berusia ${catAge} tahun`);
  }
}

// Data uji
let data1Tuti = [3, 5, 2, 12, 7];
let data1Nining = [4, 1, 15, 8, 3];
let data2Tuti = [9, 16, 6, 8, 3];
let data2Nining = [10, 5, 6, 1, 4];

// Menjalankan fungsi untuk kedua set data uji
console.log("Hasil untuk data uji pertama:");
checkCats(data1Tuti, data1Nining);
console.log("Hasil untuk data uji kedua:");
checkCats(data2Tuti, data2Nining);
