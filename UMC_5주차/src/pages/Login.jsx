import React from "react";

export default function Login(){
    return (
        <div className="page"> 
            <div className="titleWrap2"  style={{ fontSize : "32px"}}>
                회원가입 페이지
                </div>
            <div className="contentWrap2"></div>
                <div className="inputTitle2">이름</div>
                <div className="inputWrap2" >
                    <input className="input2" placeholder="이름을 입력해주세요" />
                </div>
                <div className="errorMessageWrap"></div>

                <div className="inputTitle2">이메일</div>
                <div className="inputWrap2"placeholder="이름을 입력해주세요">
                    <input className="input2" />
                <div className="errorMessageWrap"placeholder="이름을 입력해주세요"></div>
                </div>

                <div className="inputTitle2">나이</div>
                <div className="inputWrap2">
                    <input className="input2"placeholder="이름을 입력해주세요" />
                </div>
                <div className="errorMessageWrap"></div>

                <div className="inputTitle2">비밀번호</div>
                <div className="inputWrap2">
                    <input className="input2" />
                <div className="errorMessageWrap"></div>    
                </div>

                <div className="inputTitle2" >비밀번호 확인</div>
                <div className="inputWrap2">
                    <input className="input2" />
                <div className="errorMessageWrap"></div>
                </div>
                <br />
                <div className="inputTitle2">제출하기</div>
                <div className="inputWrap2">
                    <input className="input2" />
                </div>
        </div>
    )
}

    