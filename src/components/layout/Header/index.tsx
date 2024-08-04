import { SiteDropdownMenu } from "~/components/menus/SiteDropdownMenu";

export const Header = (): JSX.Element => (
  <div className="header__right">
    <SiteDropdownMenu />
  </div>
);
