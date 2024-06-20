import React, { HTMLAttributes } from 'react'
import styled, { css } from 'styled-components'

type TitleVariantType = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
type TitleSizeType = 'titleXL' | 'titleL' | 'titleM' | 'titleS' | 'titleXs'

interface TypographyTitleProps extends HTMLAttributes<HTMLHeadingElement> {
    variant: TitleVariantType;
    size: TitleSizeType;
}

const sizeStyles = {
    titleXL: css`font-size: 3rem; font-weight: 800; line-height: 130%`,
    titleL: css`font-size: 2rem; font-weight: 800; line-height: 130%`,
    titleM: css`font-size: 1.5rem; font-weight: 800; line-height: 130%`,
    titleS: css`font-size: 1.25rem; font-weight: 400; line-height: 130%`,
    titleXs: css`font-size: 1.125rem; font-weight: 400; line-height: 130%`,
}

const StyledTypography = styled.h1<TypographyTitleProps>`
font-family: "Baloo 2", sans-serif;
font-optical-sizing: auto; 
  margin: 0;
  ${({ size }) => sizeStyles[size]}
`

export const TypographyTitle: React.FC<TypographyTitleProps> = ({ variant, size, children, ...props }) => (
    <StyledTypography as={variant} size={size} {...props} variant={variant}>
        {children}
    </StyledTypography>
)
