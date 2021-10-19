import styled from 'styled-components';
import React from 'react'

interface Props {
  url: string;
}

const Wrapper = styled.div({})
const Iframe = styled.iframe({
  width: '670px',
  height: '445px',
  transform: 'scale(0.5)',
})

export const Web = ({ url }: Props) => {
  return (
    <Wrapper>
      <Iframe src={url} ></Iframe>
    </Wrapper>
  )
}
