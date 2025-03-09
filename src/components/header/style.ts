import styled from "styled-components";


export const Container=styled.header`
height: 90px;
display: flex;
align-items: center;
justify-content: space-around;
background-color: #F20909;

.logo img{
    height:80px;
    width: 100px;
}
.open-mobile{
    display: none;
}
.close-mobile{
    display: none;
}

nav{
    .links{
        display: flex;
        align-items: center;
       a{
        font-weight: bold;
        color: white;
        padding: 12px 22px;
        transition: all ease .3s;
        &:hover{
            background-color:#070C39;
        }
       }
    }
}
`