/* eslint-disable import/order */
"use client";
import { type ReactNode } from "react";

import createCache from "@emotion/cache";
import { CacheProvider, type EmotionCache } from "@emotion/react";
import { CssBaseline } from "@mui/material";

const createEmotionCache = () => createCache({ key: "mui" });

export const emotionCache = createEmotionCache();

export interface StylesProviderProps {
  readonly emotionCache?: EmotionCache;
  readonly children: ReactNode;
}

export const StylesProvider = ({ children }: StylesProviderProps) => (
  <CacheProvider value={emotionCache}>
    <CssBaseline />
    {children}
  </CacheProvider>
);

export default StylesProvider;
