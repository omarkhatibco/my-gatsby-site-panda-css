import * as React from 'react';
import type { PageProps } from 'gatsby';
import '../style.css';
import { f } from 'fusion-engine/jsx';
import { Button } from '@tourlane/fusion-you';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <f.main bgColor='primary' color='on.primary'>
        hello
      </f.main>
      <Button>Click me</Button>
    </>
  );
};

export default IndexPage;
