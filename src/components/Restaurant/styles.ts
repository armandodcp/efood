import styled from 'styled-components'
import { cores } from '../../styles'
import { TagContainer } from '../Tag/styles'

export const Card = styled.div`
  background-color: ${cores.branca};
  position: relative;

  ${TagContainer} {
    margin-right: 8px;
  }

  @media (max-width: 640px) {
    margin-bottom: 32px;
  }
`

export const Image = styled.img`
  height: 217px;
  width: 100%;
  display: block;
  object-fit: cover;
`

export const Information = styled.div`
  position: absolute;
  top: 16px;
  right: 8px;
`

export const DescriptionContainer = styled.div`
  border: solid 1px ${cores.coral};
  border-width: 0 1px 1px 1px;
`

export const TitleContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-bottom: 8px;
`

export const Title = styled.h3`
  font-weight: bold;
  font-size: 18px;
  padding: 8px;
`

export const ReviewContainer = styled.div`
  display: flex;
  align-items: center;
  margin-right: 8px;
`

export const Review = styled.span`
  font-weight: bold;
  font-size: 18px;
  color: ${cores.coral};
  margin-right: 8px;
`

export const Star = styled.img`
  width: 16px;
  height: 16px;
`

export const Description = styled.p`
  height: 98px;
  font-size: 14px;
  line-height: 22px;
  display: block;
  padding: 8px;
  padding-top: 0;

  @media (max-width: 1023px) {
    height: 118px;
  }
`
