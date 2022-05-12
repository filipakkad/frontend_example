import React, { ReactNode } from 'react';
import styled from 'styled-components';
import backgroundImage from 'ui/img/background_registration.jpg';

interface PageTemplateProps {
  navbar: ReactNode;
  content: ReactNode;
}

const Content = styled.div`
  background-image:
    linear-gradient(black, black),
    url(${backgroundImage});
  -webkit-background-size: cover;
  -moz-background-size: cover;
  -o-background-size: cover;
  background-size: cover;
  background-blend-mode: saturation;
  background-attachment: fixed;
`;

const PageLayout = (props: PageTemplateProps) => {
  const { content, navbar } = props;
  return (
    // eslint-disable-next-line react/jsx-no-useless-fragment
    <div className="flex flex-column h-full">
      {navbar}
      <Content className="grid m-auto w-full h-full overflow-y-auto">
        {content}
      </Content>
    </div>
  );
};

export { PageLayout };
