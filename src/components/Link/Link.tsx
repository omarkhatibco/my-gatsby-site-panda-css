import * as React from 'react';

import classNames from 'classnames';
import { Link as GatsbyLink, GatsbyLinkProps } from 'gatsby';

import { linkStyle } from './Link.css';

function LinkComp<TState>(props: GatsbyLinkProps<TState>, ref?: React.Ref<HTMLAnchorElement>) {
  const { className, ...restProps } = props;
  return (
    <GatsbyLink className={classNames(linkStyle, className)} activeClassName="link--active" ref={ref} {...restProps} />
  );
}

export const Link = React.forwardRef(LinkComp) as <TState>(
  props: GatsbyLinkProps<TState> & {
    ref?: React.ForwardedRef<HTMLAnchorElement>;
  }
) => ReturnType<typeof LinkComp>;
