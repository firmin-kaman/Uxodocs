// src/theme/NavbarItem/DocsVersionDropdownNavbarItem.js
import React from 'react';
import OriginalDropdown from '@theme-original/NavbarItem/DocsVersionDropdownNavbarItem';
import { useLocation } from '@docusaurus/router';

export default function DocsVersionDropdownNavbarItemWrapper(props) {
  const { docsPluginId } = props; 
  const { pathname } = useLocation();

  // Only render if the current URL path includes the product's route (docsPluginId)
  const isInSection = pathname.startsWith(`/${docsPluginId}/`);
  if (!isInSection) {
    return null;  // do not display the dropdown
  }
  return <OriginalDropdown {...props} />;
}
