import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table { 
        width: 100%;


    th {
        color: var(--text-body-color);
        font-weight: 400;
        padding: 1ren 2ren;
        text-align: left;
        line-height: 1.5rem;
    }

    td {
        padding: 1ren 2ren;
        border: 0;
        background: var(--shape);
        color: var(--text-body);
        border-radius: 0.25rem;
        

        &:first-Child {
        color: var(--text-title);
    }

    &.deposit {
        color: var(--green)
    }

    &.withdraw {
        color: var(--red)
    }

    }

    }

`;
