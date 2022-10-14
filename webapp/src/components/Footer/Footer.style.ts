import styled from "styled-components";

export const StyledFooter = styled.footer`
    padding: 90px 178px;
    background-color: ${(props) => props.theme.colors.primary.main};
    color: ${(props) => props.theme.colors.white.main};
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 110px;
`;

export const StyledFooterSection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    & .footer-links {
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & a {
            display: block;
            color: ${(props) => props.theme.colors.white.main};
            text-decoration: none;
            font-weight: 400;
            font-size: 16px;
            line-height: 36px;

            &:hover {
                color: ${(props) => props.theme.colors.white.dark};
            }
        }
    }
`;
