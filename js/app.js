document.getElementById('btn').addEventListener('click', hisob);


function hisob(e) {
  e.preventDefault();
  let ishlarsoni = parseFloat(document.getElementById('ishlar-soni').value);
  let som1 = parseFloat(document.getElementById('som1').value);
  const ism1 = document.getElementById('ism1');
  const birinchi = document.getElementById('bir-oylik');
  const umumiy = document.getElementById('umumiy');



  let som2 = parseFloat(document.getElementById('som2').value);
  const ism2 = document.getElementById('ism2');
  const ikkinchi = document.getElementById('bir-oylik2');


  let som3 = parseFloat(document.getElementById('som3').value);
  const ism3 = document.getElementById('ism3');
  const uchinchi = document.getElementById('bir-oylik3');

  let som4 = parseFloat(document.getElementById('som4').value);
  const ism4 = document.getElementById('ism4');
  const tortinchi = document.getElementById('bir-oylik4');

  let som5 = parseFloat(document.getElementById('som5').value);
  const ism5 = document.getElementById('ism5');
  const beshinchi = document.getElementById('bir-oylik5');

  let som6 = parseFloat(document.getElementById('som6').value);
  const ism6 = document.getElementById('ism6');
  const oltinchi = document.getElementById('bir-oylik6');



  birinchi.innerHTML = ism1.value + 'ning oyligi:  ' +
    ishlarsoni * som1 + ` so'm.`;
  ikkinchi.innerHTML = ism2.value + 'ning oyligi:  ' +
    ishlarsoni * som2 + ` so'm.`;
  uchinchi.innerHTML = ism3.value + 'ning oyligi:  ' +
    ishlarsoni * som3 + ` so'm.`;
  tortinchi.innerHTML = ism4.value + 'ning oyligi:  ' +
    ishlarsoni * som4 + ` so'm.`;
  beshinchi.innerHTML = ism5.value + 'ning oyligi:  ' +
    ishlarsoni * som5 + ` so'm.`;
  oltinchi.innerHTML = ism6.value + 'ning oyligi:  ' +
    ishlarsoni * som6 + ` so'm.`;


  umumiy.innerHTML = (ishlarsoni * som1) +
    (ishlarsoni * som2) +
    (ishlarsoni * som3) +
    (ishlarsoni * som4) +
    (ishlarsoni * som5) +
    (ishlarsoni * som6) + ` so'm`;

  target.value = "";


}