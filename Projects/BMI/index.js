

//  How we get values through input events
 const form = document.querySelector('form');
//  post,get values get to server so stop the default settings (action)
form.addEventListener('submit',function (e){
    e.preventDefault();
  const height = parseInt(document.querySelector('#height').value);
//   if we take it outside event it will give empty value 
  const weight = parseInt(document.querySelector('#weight').value);  
  const results = document.querySelector('#results');

  if(height === '' || height< 0 || isNaN(height)){
    results.innerHTML = `Please give a valid height ${height}`;
  }
  else if(weight === '' || weight< 0 || isNaN(weight)){
    results.innerHTML = `Please give a valid weight ${weight}`;
  }else{

    const bmi = (weight/((height*height)/10000)).toFixed(2);
    // show the result
    results.innerHTML =  `<span>${bmi}</span>`;
    if(bmi <18.6){
        results.innerHTML= "You are underweight";
    }else if(bmi >18.6 && bmi < 24.6){
        results.innerHTML= "You are in Normal range";
    }else{
        results.innerHTML= "You are Overeweight";
    }
  }
}) 