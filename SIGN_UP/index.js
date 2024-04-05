let name_dis = document.getElementById('name_dis');
let email_dis = document.querySelector("#email_dis");
let age_dis = document.querySelector("#age_dis");
let pwd_dis = document.querySelector("#pwd_dis");
let pwd2_dis = document.querySelector("#pwd2_dis");


// INPUT에 문자열이 들어와있으면 초록폰트로알려주기
// INPUT에 문자열이 없으면 빨강폰트로 알려주기

let chk_name,chk_email,chk_age,chk_pwd,chk_pwd2 = 0;  // let :블록 스코프를 가지며 재할당이 가능.


const check_name = () => {   // const : 블록 스코프를 가지며 재할당이 불가능
    let name_value = document.getElementById('name_value').value  // html 안에 value를 name_value 안에 저장
    
    if(name_value){
        name_dis.innerText = '멋진 이름이네요!'
        name_dis.style.color = "green"
        chk_name = 1; 
    }else{
        name_dis.innerText = '필수 입력 항목입니다!'
        name_dis.style.color = "red"
        chk_name = 0; 
    }
}

const check_email = () =>{
    let email_value = document.getElementById('email_value').value
    
    if(email_value.includes("@")){
        email_dis.innerText = '올바른 이메일 형식입니다!'
        email_dis.style.color = "green"
        chk_email = 1;
    }else{
        email_dis.innerText = '올바른 이메일 형식이 아닙니다!'
        email_dis.style.color = "red"
        chk_email = 0;
    }    

    }

const submit = () =>{

    let age_value = document.getElementById('age_value').value  //나이확인 로직
    
    console.log(age_value);
    if(!isNaN(age_value)){ //문자열쓰지않고 숫자면 트루
        if(age_value > 0){ // -음수면 트루
            if(age_value % 1 == 0){ //소수를 안쓰면 트루
                if(age_value > 19){ //19살이면 트루!
                age_dis.innerText = '올바른 나이 형식입니다!'
                age_dis.style.color = "green"
                chk_age = 1;
                }
                else{
                    age_dis.innerText = '20살부터 가능합니다!'
                    age_dis.style.color = "red"
                    chk_age = 0;
                }
            }else{
                age_dis.innerText = '나이에 소수가 들어가면 안됩니다!'
                age_dis.style.color = "red"
                chk_age = 0;
            }

        }else{
            age_dis.innerText = '나이는 양수여야합니다. !'
            age_dis.style.color = "red"
            chk_age = 0;
        }
    }
    else{
        age_dis.innerText = '숫자 형식이 아닙니다!'
        age_dis.style.color = "red"
        chk_age = 0;
    }

    //=======================================================
    //비밀번호 로직
    let pws_value = document.getElementById('pws_value').value
    let check = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[$@$!%*#?&])[A-Za-z\d$@$!%*#?&]{1,12}$/;


    if(pws_value.length >= 4 ){   //4자리 이상 
        if(pws_value.length <= 12 ){   //12자리 이하
            if(check.test(pws_value)) {   // 정규 표현식을 통과하면
                pwd_dis.innerText = '올바른 비밀번호입니다!'
                pwd_dis.style.color = "green"
                chk_pwd = 1;

            }else{
                pwd_dis.innerText = '영어, 숫자, 특수문자를 모두 조합해서 비밀번호를 작성해야 합니다!'
                pwd_dis.style.color = "red"
                chk_pwd = 0;
                console.log(pws_value);
            }    
        }else{
            pwd_dis.innerText = "12자리 이상이면 안됩니다!"
            pwd_dis.style.color = "red"
            chk_pwd = 0;
        }
    }else{
        pwd_dis.innerText = "4자리 이하면 안됩니다!"
        pwd_dis.style.color = "red"
        chk_pwd = 0;

 }

    //=======================================================
    //비밀번호 확인 로직
    let pws2_value = document.getElementById('pws2_value').value
    if(pws_value==pws2_value){
        pwd2_dis.innerText = '올바른 비밀번호입니다!'
        pwd2_dis.style.color = "green"
        chk_pwd2 = 1;
    }
    else{   
        pwd2_dis.innerText = '일치하지 않은 비밀번호입니다!'
        pwd2_dis.style.color = "red"
        chk_pwd2 = 0;
    }

 //=======================================================
    // 확인 로직
    // 나이가 소수,음수가 이니고, 19살 이상인 숫자
    // 비밀번호는 영어 숫자 특수문자 포함 4자리 이상 12자리 이하
    // 비번 확인은 비번과 동일 
  
    // 확인로직은 chk_name,chk_email,chk_age,chk_pwd,chk_pwd2 전부 1이면 alert(회원가입이 완료됐습니다)를 출력합니다.
      if( chk_name==1&&chk_email==1&&chk_age==1&&chk_pwd==1&&chk_pwd2==1){
        alert("회원가입이 완료됐습니다!");
    }





    
}   
