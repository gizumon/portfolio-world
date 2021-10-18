import styled from 'styled-components';
import React from 'react'

const Wrapper = styled.div({})
const Iframe = styled.iframe({
  width: '670px',
  height: '445px',
  transform: 'scale(0.5)',
})

export const Content: React.FC = () => {
  return (
    <Wrapper>
      <Iframe src="https://gizumon.github.io/portfolio/"></Iframe>
    </Wrapper>
  )
}
