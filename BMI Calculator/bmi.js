function calc(){
    let heightcm= parseFloat(document.getElementById('height').value);
    let height=heightcm/100;
    let weight=parseFloat(document.getElementById('weight').value);
    let res=weight/(height**2);
    let result=document.getElementById('result').innerHTML=res.toFixed(2);
}