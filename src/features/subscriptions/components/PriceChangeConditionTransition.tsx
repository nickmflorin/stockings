import { Icon } from "~/components/icons/Icon";
import { classNames, type ComponentProps } from "~/components/types";
import type { TextProps } from "~/components/typography";
import { CurrencyText } from "~/components/typography/CurrencyText";

export interface PriceChangeConditionTransitionProps extends ComponentProps {
  readonly fromPrice: number;
  readonly toPrice: number;
  readonly textProps?: Omit<TextProps<"div">, "children">;
}

export const PriceChangeConditionTransition = ({
  fromPrice,
  toPrice,
  textProps,
  ...props
}: PriceChangeConditionTransitionProps): JSX.Element => (
  <div {...props} className={classNames("flex flex-row items-center gap-2", props.className)}>
    <div className="flex flex-row items-center justify-start w-[55px]">
      <CurrencyText fontWeight="medium" fontSize="sm" {...textProps}>
        {fromPrice}
      </CurrencyText>
    </div>
    <Icon icon="arrow-right" className="text-gray-600" size="14px" />
    <div className="flex flex-row items-center justify-end w-[55px]">
      <CurrencyText fontWeight="medium" fontSize="sm" {...textProps}>
        {toPrice}
      </CurrencyText>
    </div>
  </div>
);
