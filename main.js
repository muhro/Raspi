function loopp() {
setTimeout(
  function ensim() {
    let toka = document.getElementById('toka');
    toka.scrollIntoView({block: 'end', behavior: 'auto'});
  }, 10000
);



  setTimeout(
  function toin() {
    let kolmas = document.getElementById('kolmas');
    kolmas.scrollIntoView({block: 'end', behavior: 'auto'});
  }, 20000)


  setTimeout(
  function kolm() {
    let eka = document.getElementById('eka');
    eka.scrollIntoView({block: 'end', behavior: 'auto'});

  }, 30000)
  loopp();

}

