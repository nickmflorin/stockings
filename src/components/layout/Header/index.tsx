import { SiteDropdownMenu } from "~/features/site/components/SiteDropdownMenu";

export const Header = (): JSX.Element => (
  <div className="header__right">
    <SiteDropdownMenu />
  </div>
);
