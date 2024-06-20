import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type BodyVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TitleSizeType = 'textL' | 'textM' | 'textS' | 'textXs' | 'tag' | 'buttonG' | 'buttonM'

interface TypographyBodyProps extends HTMLAttributes<HTMLHeadingElement> {
    variant: BodyVariantType;
    size: TitleSizeType;
}

const sizeStyles = {
    textL: css`font-size: 1.25rem; font-weight: 800; line-height: 130%`,
    textM: css`font-size: 1rem; font-weight: 800; line-height: 130%`,
    textS: css`font-size: 0.875rem; font-weight: 400; line-height: 130%`,
    textXs: css`font-size: 0.75rem; font-weight: 400; line-height: 130%`,
    tag: css`font-size: 0.625rem; font-weight: 400; line-height: 130%`,
    buttonG: css`font-size: 2.33rem; font-weight: 400; line-height: 160%`,
    buttonM: css`font-size: 0.75rem; font-weight: 400; line-height: 160%`,
}

const StyledTypography = styled.h1<TypographyBodyProps>`
font-family: "Roboto", sans-serif;
font-optical-sizing: auto; 
  margin: 0;
  ${({ size }) => sizeStyles[size]}
`

export const TypographyBody: React.FC<TypographyBodyProps> = ({ variant, size, children, ...props }) => (
    <StyledTypography as={variant} size={size} {...props} variant={variant}>
        {children}
    </StyledTypography>
)
