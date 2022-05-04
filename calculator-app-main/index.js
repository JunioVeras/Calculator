const links = document.querySelectorAll("link");

function themeChange(i){
  if(i === "0"){
      links[2].setAttribute("href", "");
  } else {
      links[2].setAttribute("href", `css/theme${i}.css`);
  }
}

function del(){
  var exp = document.calculator.ans.value;
  // document.write(exp);
  document.calculator.ans.value = exp.substring(0, exp.length-1);
}