import styled from 'styled-components';


interface TagProps {
    selected: boolean | (() => boolean);
    children: React.PropsWithChildren<string>;
}


export default styled.div`
    width: fit-content;
    height: fit-content;
    padding: 5px 20px;
    background-color: ${({
        selected 
    }: TagProps) => selected ? '#6200ff' : '#e2e0fd'};
    border: 2px solid #6200ff;
    border-radius: 25px;
    color: ${({
        selected 
    }: TagProps) => selected ? '#E0EAFD' : '#6200ff'};;
    font-weight: 500;
    cursor: pointer;
`;