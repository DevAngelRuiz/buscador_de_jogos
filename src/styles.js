import styled from 'styled-components'
import Background from './assets/background.jpg'

export const Container = styled.div`
background: url("${Background}");
background-size: cover;
width: 100vw;
height: 100vh;
display: flex;
flex-direction: column;
align-items: center;
gap: 40px;
padding-top: 20px;


`


export const ContainerItems = styled.div`
background: linear-gradient(157.44deg, rgba(255, 255, 255, 0.6) 0.84%, rgba(255, 255, 255, 0.6) 0.85%, rgba(255, 255, 255, 0.15) 100%);
border-radius: 61px 61px 0px 0px;
padding: 50px 36px;
display: flex;
flex-direction: column;
backdrop-filter: blur(4px);
height: 100vh;
align-items: center;


h1{
font-style: bold;
font-weight: 700;
font-size: 40px;
line-height: 40px;
text-align: center;
color: black;
margin-bottom: 80px;
}


`



export const SelectGenrer = styled.select`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: black;
border: none; 
outline: none;
padding-left: 25px;
margin-bottom: 34px;
`

export const Label = styled.p`
font-style: normal;
font-weight: bold;
font-size: 18px;
line-height: 22px;
color: black;
margin-left: 25px;

`
export const InputRam = styled.input`
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
border-radius: 14px;
width: 342px;
height: 58px;
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: black;
border: none; 
outline: none;
padding-left: 25px;
margin-bottom: 34px;
::placeholder{
    font-size: 15px;

}
`

export const Selectt = styled.select`
width: 342px;
height: 58px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
font-weight: 400;
font-size: 24px;
line-height: 28px;
color: black;
border: none; 
outline: none;
padding-left: 25px;
margin-bottom: 34px;
`
export const Button = styled.button`
width: 342px;
height: 60px;
background: rgba(0, 0, 0, 0.8);
border-radius: 14px;
border: none;
margin-top: 40px;
font-style: normal;
font-weight: 700;
font-size: 17px;
line-height: 28px;
color: #FFFFFF;
cursor: pointer;
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;

&:hover{
    opacity: 0.8;

}
&:active{
    opacity: 0.5;
}

`
export const Result = styled.div`
width: 342px;
height: 342px;
border-radius: 20px;
background: rgba(255, 255, 255, 0.25);
box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
backdrop-filter: blur(4px);
margin-top: 15px;
display: flex;  
flex-direction: column;
align-items: center;
gap: 10px;
padding-top: 15px;
padding-bottom: 15px;   
font-size: 15px;
font-weight: bold;

img{
width: 280px;
height: 200px;
border-radius: 20px;

}




`