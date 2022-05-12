import React from 'react';
import { Navbar, HomeCard } from 'ui/components/organisms';
import { PageLayout } from 'ui/components/templates';

const HomePage = () => (
  <PageLayout
    navbar={<Navbar />}
    content={(<div className="ml-auto mt-auto mb-auto mr-auto lg:mr-7"><HomeCard /></div>)}
  />
);

export { HomePage };
