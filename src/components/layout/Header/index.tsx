import Image from "next/image";

import { SiteDropdownMenu } from "~/features/site/components/SiteDropdownMenu";

export const Header = (): JSX.Element => (
  <>
    <div className="header__left">
      <Image width={36} height={36} src="/contract-logo.svg" alt="Logo" />
    </div>
    <div className="header__right">
      <SiteDropdownMenu />
    </div>
  </>
);
