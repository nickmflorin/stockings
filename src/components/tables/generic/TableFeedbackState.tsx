import { ErrorView } from "~/components/errors/ErrorView";
import { EmptyMessage } from "~/components/feedback/EmptyMessage";
import { Table } from "~/components/tables/generic/Table";
import { type TableBodyProps } from "~/components/tables/generic/TableBody";
import { type TableBodyRowProps } from "~/components/tables/generic/TableBodyRow";
import { classNames } from "~/components/types";

export type TableFeedbackStateType = "error" | "empty";

export interface TableFeedbackStateRowProps extends TableBodyRowProps {
  readonly as: "tr";
  readonly stateType: TableFeedbackStateType;
  readonly errorContent?: string | JSX.Element;
  readonly errorTitle?: string;
  readonly errorMessage?: string;
  readonly emptyContent?: string | JSX.Element;
}

export interface TableFeedbackStateBodyProps extends TableBodyProps {
  readonly as?: "tbody";
  readonly stateType: TableFeedbackStateType;
  readonly errorContent?: string | JSX.Element;
  readonly errorTitle?: string;
  readonly errorMessage?: string;
  readonly emptyContent?: string | JSX.Element;
}

export type TableFeedbackStateProps = TableFeedbackStateBodyProps | TableFeedbackStateRowProps;

const TableFeedbackStates: {
  [key in TableFeedbackStateType]: (
    props: Omit<TableFeedbackStateProps, "as" | "stateType">,
  ) => JSX.Element;
} = {
  empty: ({ emptyContent }) => {
    if (emptyContent) {
      return <EmptyMessage>{emptyContent}</EmptyMessage>;
    }
    return <EmptyMessage>No data.</EmptyMessage>;
  },
  error: ({ errorMessage, errorTitle, errorContent }) => {
    if (errorContent) {
      if (typeof errorContent === "string") {
        return <ErrorView title={errorTitle ?? "Error"}>{errorContent}</ErrorView>;
      }
      return errorContent;
    }
    return (
      <ErrorView title={errorTitle ?? "Error"}>
        {errorMessage ?? "There was an error loading the table data."}
      </ErrorView>
    );
  },
};

const TableFeedbackStateInner = ({ stateType, ...props }: Omit<TableFeedbackStateProps, "as">) => {
  const Component = TableFeedbackStates[stateType];
  return (
    <Table.BodyCell colSpan={100} height="100px">
      <div className="h-full w-full flex flex-col items-center justify-center">
        <Component {...props} />
      </div>
    </Table.BodyCell>
  );
};

export const TableFeedbackState = ({
  as = "tbody",
  stateType,
  errorContent,
  errorMessage,
  errorTitle,
  emptyContent,
  ...props
}: TableFeedbackStateProps) =>
  as === "tbody" ? (
    <Table.Body {...(props as TableBodyProps)}>
      <Table.BodyRow className="tr--feedback">
        <TableFeedbackStateInner
          {...props}
          stateType={stateType}
          emptyContent={emptyContent}
          errorMessage={errorMessage}
          errorTitle={errorTitle}
          errorContent={errorContent}
        />
      </Table.BodyRow>
    </Table.Body>
  ) : (
    <Table.BodyRow
      {...(props as TableBodyRowProps)}
      className={classNames("tr--feedback", props.className)}
    >
      <TableFeedbackStateInner
        stateType={stateType}
        emptyContent={emptyContent}
        errorMessage={errorMessage}
        errorTitle={errorTitle}
        errorContent={errorContent}
      />
    </Table.BodyRow>
  );
