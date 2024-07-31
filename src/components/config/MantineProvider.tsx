import { MantineProvider as RootMantineProvider } from "@mantine/core";

export const MantineProvider = ({ children }: { children: React.ReactNode }) => (
  <RootMantineProvider>{children}</RootMantineProvider>
);

export default MantineProvider;
