import styled from "styled-components";

export const StyledHeader = styled.nav`
    height: 85px;
    background-color: ${(props) => props.theme.colors.primary.main};
    position: relative;

    & .header-desktop {
        padding: 14px 178px;
        display: flex;
        align-items: center;
        justify-content: space-between;

        & img {
            max-height: 60px;
            width: 215px;
        }

        & a {
            font-size: 16px;
        }

        @media ${(props) => props.theme.breakpoints.laptop} {
            display: none;
        }

        @media ${(props) => props.theme.breakpoints.laptopL} {
            padding: 14px 130px;
        }
    }
`;
