let scheme = document.getElementById("scheme");
let btn = document.getElementById('bt').firstElementChild;
let url = '';
// let btn = document.getElementsByTagName("a")[0];
let flag1 = false, flag2 = false;
let value1,value2;


scheme.addEventListener('blur', () => {
    if (scheme.value != '') 
    {
        if(flag2==false)
        {    
            url += 'http://' + scheme.value + '.';
            flag1 = true;
            console.log(btn);
            
        }
        else
        {
            value1=scheme.value;
            url = 'http://' + value1 + '.' + value2;
            btn.setAttribute('href', url);
            flag1 = true;
        }
    }
    else
    {
        flag1 = false;
    }
})

domain.addEventListener('blur', () => {
    
    if (domain.value != '') {
        if(flag1==true)
        {
            url += domain.value;
            btn.setAttribute('href', url);
            flag2 = true;
        }
        else{
            value2=domain.value;
            flag2 = true;
        }
    }
    else
        flag2 = false;
    
})

btn.addEventListener('click', () => {
    if(flag1==true && flag2==true) {
        document.getElementById("myForm").reset();
        flag1 = flag2 = false;
        url = '';
    }
    else {
        url = '';
        btn.setAttribute('href', url);
        btn.setAttribute('target', '');
        window.alert('Please Enter valid Information.');
    }
})

