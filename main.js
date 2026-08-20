function novbetiMaasTarixi() {
  const bugun = new Date();
  let il = bugun.getFullYear();
  let ay = bugun.getMonth(); 
  const gun = bugun.getDate();

  if (gun > 15) {
    ay += 1;
    if (ay > 11) {
      ay = 0;
      il += 1;
    }
  }

  let maasTarixi = new Date(il, ay, 15);

  const heftaGunu = maasTarixi.getDay(); 

  if (heftaGunu === 6) {
    
    maasTarixi.setDate(maasTarixi.getDate() - 1);
  } else if (heftaGunu === 0) {
    
    maasTarixi.setDate(maasTarixi.getDate() - 2);
  }

  const g = String(maasTarixi.getDate()).padStart(2, '0');
  const a = String(maasTarixi.getMonth() + 1).padStart(2, '0');
  const i = maasTarixi.getFullYear();

  return `${g}_${a}_${i}`;
}

console.log("Novbeti maas tarixi:", novbetiMaasTarixi());