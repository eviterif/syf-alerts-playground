import styled from "styled-components";

export const AccordionHeaderWrapper = styled.div`
    padding: 0 15px;
    height: 50px;
    background-color: ${ ({isExpanded, isON}) => {
        let color = "";
        if(isExpanded && isON){
            color = "#f5fbed";
        }else if(isExpanded && !isON){
            color =  "#f2f2f2";
        }else if (isON){
            color = "#f5fbed";
        }else{
            color = "inherit";
        }
        return color;
        
    }};
    border-bottom: ${ ({isExpanded}) => isExpanded ? "1px solid lightgray" : "none" } ;
    display: flex;
    justify-content: space-between;
    .accordionHeaderLeft{
        display: flex;
        align-items: center;
        .iconsWrapper{
            display: inline-block;
            font-size: 20px;
            margin: 0 10px;
            span {
                margin-right: 10px;
            }
        }
    }
    .accordionHeaderRight{
        display: flex;
        align-items: center;
        color: #307ab0;
        font-weight: bold;
        .caretDown{
            font-size:30px;
            margin: 0 15px 0 30px;
        }
    }
    .fontAwesomeIcon{
        cursor: pointer;
    }
    
    @media screen and (max-width: 767px){
        height: auto;
        // flex-direction: column;
        padding: 5px;
        .accordionHeaderLeft {
            margin: 0;
            // width: 100%;
            // order: 2;
            max-width: 80%;
            .iconsWrapper {
                display: none;
            }
        }
        .accordionHeaderRight{
            margin:0;
            // justify-content: flex-end; 
            .caretDown{
                font-size: 20px;
                margin: 0 5px;
            }
        }
    }
    
`;