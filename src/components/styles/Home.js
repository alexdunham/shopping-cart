import styled from 'styled-components';

export const Wrapper = styled.div`
    @media screen and (min-width: 800px) {
        display: flex;
    }
`;

export const Main = styled.main`
    @media screen and (min-width: 800px) {
        width: 48%;
        border-right: 2px solid black;
        padding-right: 1em;
    }
    @media screen and (min-width: 1000px) {
        width: 58%;
    }
`;

export const SideBar = styled.aside`
    @media screen and (min-width: 800px) {
        width: 48%;
        padding-left: 1em;
    }
    @media screen and (min-width: 1000px) {
        width: 38%;
    }
`;

export const Container = styled.div`
    min-height: 100vh;
    padding: 1em;
`;