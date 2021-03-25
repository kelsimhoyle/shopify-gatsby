import styled from "@emotion/styled"
import vinyls from "../../images/vinyls.jpg";

export const MainBg = styled.div`
    width: 100vw;
    height: 300px;
    background-image: url("${vinyls}");
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    position: relative;

    h1 {
        color: white;
        padding: 5px;
        background-color: black;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }
`