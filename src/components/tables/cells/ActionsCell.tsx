import { IconButton } from "~/components/buttons";
import { type FloatingContentRenderProps } from "~/components/floating";
import { DropdownMenu } from "~/components/menus/DropdownMenu";
import { Menu } from "~/components/menus/Menu";
import { type DataTableRowAction } from "~/components/tables/types";

export interface ActionsCellProps {
  readonly actions:
    | DataTableRowAction[]
    | ((params: Pick<FloatingContentRenderProps, "setIsOpen">) => DataTableRowAction[]);
}

export const ActionsCell = ({ actions }: ActionsCellProps): JSX.Element => (
  <div className="flex flex-row items-center justify-center">
    <DropdownMenu
      placement="bottom-end"
      width={220}
      inPortal
      content={({ setIsOpen }) => (
        <Menu>
          <Menu.Content>
            {(typeof actions === "function" ? actions({ setIsOpen }) : actions).map(
              ({ content, isVisible, onClick }, i) => (
                <Menu.Item key={i} className="font-medium" isVisible={isVisible} onClick={onClick}>
                  {content}
                </Menu.Item>
              ),
            )}
          </Menu.Content>
        </Menu>
      )}
    >
      {({ ref, params, isOpen }) => (
        <IconButton.Transparent
          {...params}
          ref={ref}
          isActive={isOpen}
          element="button"
          icon="ellipsis-h"
          className="text-gray-500 hover:bg-gray-100"
          radius="full"
          activeClassName="text-blue-700 bg-gray-100"
          size="medium"
          onClick={e => {
            e.stopPropagation();
            if ("onClick" in params && typeof params.onClick === "function") {
              params.onClick?.(e);
            }
          }}
        />
      )}
    </DropdownMenu>
  </div>
);

export default ActionsCell;
