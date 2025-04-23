// src/theme/NavbarItem/DocsVersionDropdownNavbarItem.js
import React from 'react';
import OriginalDropdown from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useLocation } from '@docusaurus/router';
import { useBaseUrlUtils } from '@docusaurus/useBaseUrl';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { docsPluginId } = props;
  const { pathname } = useLocation();
  const { withBaseUrl } = useBaseUrlUtils();

  const sectionPath = withBaseUrl(`/${docsPluginId}/`);
  const isInSection = pathname.startsWith(sectionPath);

  if (!isInSection) {
    return null;
  }

  return <OriginalDropdown  class="navbar__item navbar__link navbar__item--docs-version"  {...props} />;
}
