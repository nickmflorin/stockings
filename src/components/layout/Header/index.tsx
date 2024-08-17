import Image from "next/image";
import Link from "next/link";

import { SiteDropdownMenu } from "~/features/site/components/SiteDropdownMenu";

export const Header = (): JSX.Element => (
  <>
    <div className="header__left">
      <Link href="/">
        <Image width={36} height={36} src="/contract-logo.svg" alt="Logo" />
      </Link>
    </div>
    <div className="header__right">
      <SiteDropdownMenu />
    </div>
  </>
);
