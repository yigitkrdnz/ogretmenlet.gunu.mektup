
/* =========================================
   1. ÖĞRETMEN LİSTESİ
========================================= */

const teachers = [
    "Ahmet Yılmaz"
];


/* =========================================
   2. İSİM KONTROL FONKSİYONU
========================================= */

function normalizeName(name) {
    return name
        .trim()
        .replace(/\s+/g, " ")
        .toLocaleLowerCase("tr-TR");
}

function findTeacher(name) {
    return teachers.find(function (teacher) {
        return normalizeName(teacher) === normalizeName(name);
    });
}


/* =========================================
   3. HTML ELEMENTLERİ
========================================= */

// Ana ekran
const welcome = document.getElementById("welcome");
const teacherName = document.getElementById("teacherName");
const continueButton = document.getElementById("continueButton");

// Mektup ekranı
const letterSection = document.getElementById("letterSection");
const displayTeacherName = document.getElementById("displayTeacherName");
const letterTeacherName = document.getElementById("letterTeacherName");

// Zarf ve mektup
const envelope = document.getElementById("envelope");
const openLetterButton = document.getElementById("openLetterButton");
const backButton = document.getElementById("backButton");

// Final ekranı
const finalButton = document.getElementById("finalButton");
const finalScreen = document.getElementById("finalScreen");
const finalTeacherName = document.getElementById("finalTeacherName");
const homeButton = document.getElementById("homeButton");


/* =========================================
   4. ÖĞRETMEN ADINI KONTROL ET
========================================= */

continueButton.addEventListener("click", function () {

    const enteredName = teacherName.value.trim();

    if (enteredName.length < 2) {
        alert("Lütfen Adınızı Ve Soyadınızı Girin.");
        teacherName.focus();
        return;
    }

    const matchedTeacher = findTeacher(enteredName);

    if (!matchedTeacher) {
        alert("Bu isim öğretmen listemizde bulunamadı. Lütfen adınızı ve soyadınızı kontrol edin.");
        teacherName.focus();
        return;
    }

    // Öğretmen adını ilgili alanlara yerleştir
    displayTeacherName.textContent = matchedTeacher + " Öğretmenim";
    letterTeacherName.textContent = matchedTeacher;
    finalTeacherName.textContent = matchedTeacher + " Öğretmenim";

    // Ekran geçişi
    welcome.hidden = true;
    letterSection.hidden = false;
    finalScreen.hidden = true;

    // Zarfı başlangıç durumuna getir
    envelope.classList.remove("opened");

    openLetterButton.disabled = false;
    openLetterButton.textContent = "Mektubunuzu Açın.✧";

    // Final butonunu gizle
    finalButton.hidden = true;

    window.scrollTo(0, 0);
});


/* =========================================
   5. MEKTUBU AÇ
========================================= */

openLetterButton.addEventListener("click", function () {

    envelope.classList.add("opened");

    openLetterButton.textContent = "Mektubunuz Açıldı ✦";
    openLetterButton.disabled = true;

    // Mektup açılınca final butonunu göster
    finalButton.hidden = false;

});


/* =========================================
   6. FİNAL EKRANINA GEÇ
========================================= */

finalButton.addEventListener("click", function () {

    letterSection.hidden = true;
    finalScreen.hidden = false;

    window.scrollTo(0, 0);

});


/* =========================================
   7. ANA EKRANA DÖN
========================================= */

backButton.addEventListener("click", function () {

    letterSection.hidden = true;
    welcome.hidden = false;
    finalScreen.hidden = true;

    teacherName.value = "";

    envelope.classList.remove("opened");

    openLetterButton.disabled = false;
    openLetterButton.textContent = "Mektubunuzu Açın. ✧";

    finalButton.hidden = true;

    window.scrollTo(0, 0);

});


/* =========================================
   8. YENİDEN BAŞLA
========================================= */

homeButton.addEventListener("click", function () {

    finalScreen.hidden = true;
    letterSection.hidden = true;
    welcome.hidden = false;

    teacherName.value = "";

    envelope.classList.remove("opened");

    openLetterButton.disabled = false;
    openLetterButton.textContent = "Mektubunuzu Açın. ✧";

    finalButton.hidden = true;

    window.scrollTo(0, 0);

    teacherName.focus();

});


/* =========================================
   9. ENTER TUŞU DESTEĞİ
========================================= */

teacherName.addEventListener("keydown", function (event) {

    if (event.key === "Enter") {
        continueButton.click();
    }

});
