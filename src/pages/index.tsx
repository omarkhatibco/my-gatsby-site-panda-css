import * as React from 'react';
import type { PageProps } from 'gatsby';
import "@tourlane/lui/lib/index.css";
import '../style.css';
// import '../tailwind-styles.css';

import { f } from 'fusion-engine/jsx';
import { Button } from '@tourlane/fusion-you';
import { ActiveButton } from "@tourlane/lui";
import { Link } from '../components/Link/Link';

const IndexPage: React.FC<PageProps> = () => {
  return (
    <>
      <f.main bgColor="primary" color="on.primary">
        hello
      </f.main>
      <Button>Click me</Button>
      <ActiveButton>test lui button</ActiveButton>
      <h1 className="text-3xl font-bold underline">Hello world!</h1>
      <Link to="/404"> test</Link>
    </>
  );
};

export default IndexPage;
