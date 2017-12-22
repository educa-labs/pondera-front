import React from 'react';
import styled from 'styled-components';
import MediaQuery from 'react-responsive';

const Wrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 1rem;
  iframe {
    border: none;
  }
`;

const Video = () => ([
  <MediaQuery key="0" maxDeviceWidth={420}>
    <Wrapper>
      <iframe
        title="Pondera presentation"
        width="320"
        height="315"
        src="https://www.youtube.com/embed/IhtcVMFZy-I?autoplay=1&cc_load_policy=1"
      />
    </Wrapper>
  </MediaQuery>,
  <MediaQuery key="1" minDeviceWidth={1224}>
    <Wrapper>
      <iframe
        title="Pondera presentation"
        width="700"
        height="394"
        src="https://www.youtube.com/embed/IhtcVMFZy-I?autoplay=1&cc_load_policy=1"
      />
    </Wrapper>
  </MediaQuery>,
]);

export default Video;


