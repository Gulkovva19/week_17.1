


const fioNew = document.querySelector('#btn');
fioNew.addEventListener("click", function () {

    let oldfio = document.querySelector('#oldfio').value;
    let fio = oldfio.trim();
    let newfio = fio.split(" ");
    console.log(newfio);

    let fname1 = newfio[0];
    let fname2 = fname1.toLowerCase();
    let fname3 = fname2[0].toUpperCase() + fname2.slice(1);
    document.querySelector('#fname').value = fname3;

    let sname1 = newfio[1];
    let sname2 = sname1.toLowerCase();
    let sname3 = sname2[0].toUpperCase() + sname2.slice(1);
    document.querySelector('#sname').value = sname3;

    let patronymic1 = newfio[2];
    let patronymic2 = patronymic1.toLowerCase();
    let patronymic3 = patronymic2[0].toUpperCase() + patronymic2.slice(1);
    document.querySelector('#patronymic').value = patronymic3;

});








