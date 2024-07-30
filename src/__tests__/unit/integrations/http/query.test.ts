import qs from "qs";
import { z } from "zod";

import {
  addQueryParamsToUrl,
  getQueryParams,
  pruneQueryParams,
  parseQueryParamsObject,
} from "~/integrations/http";

const MOCK_QUERY = {
  a: "bar",
  b: 1,
  c: true,
  d: null,
  e: undefined,
  f: "",
  g: "  ",
  h: {
    a: "bar",
    b: 1,
    c: true,
    d: null,
    e: undefined,
    f: "",
    g: "  ",
    h: ["apple", "banana", "pear"],
    i: [],
    k: ["", "  ", "blueberry"],
  },
  i: ["apple", "banana", "pear"],
  j: [],
  k: [" ", "", null],
  l: ["", "  ", "blueberry"],
};

describe("getQueryParams() properly returns", () => {
  it("properly returns query parameters on URL", () => {
    const params = getQueryParams("http://example.com?foo=bar&bar=foo");
    expect(params).toStrictEqual({
      foo: "bar",
      bar: "foo",
    });
  });
  it("properly returns query parameters on path", () => {
    const params = getQueryParams("/api?foo=bar&bar=foo");
    expect(params).toStrictEqual({
      foo: "bar",
      bar: "foo",
    });
  });
});

describe("parseQueryParamsObject() properly returns", () => {
  it("properly returns when all values are present", () => {
    const params = qs.stringify({ search: "foo", legislature: 5, sessionType: "regular" });
    const parsed = parseQueryParamsObject(params, {
      search: { schema: z.string(), defaultValue: "" },
      legislature: { schema: z.coerce.number(), defaultValue: null },
      sessionType: { schema: z.string(), defaultValue: null },
    });
    expect(parsed).toStrictEqual({
      search: "foo",
      legislature: 5,
      sessionType: "regular",
    });
  });
  it("properly returns when some values are missing and defaults are included", () => {
    const params = qs.stringify({ sessionType: "regular" });
    const parsed = parseQueryParamsObject(params, {
      search: { schema: z.string(), defaultValue: "" },
      legislature: { schema: z.coerce.number(), defaultValue: null },
      sessionType: { schema: z.string(), defaultValue: null },
    });
    expect(parsed).toStrictEqual({
      search: "",
      legislature: null,
      sessionType: "regular",
    });
  });
  it("properly returns when all values are missing and defaults are included", () => {
    const parsed = parseQueryParamsObject("", {
      search: { schema: z.string(), defaultValue: "" },
      legislature: { schema: z.coerce.number(), defaultValue: null },
      sessionType: { schema: z.string(), defaultValue: null },
    });
    expect(parsed).toStrictEqual({
      search: "",
      legislature: null,
      sessionType: null,
    });
  });
  it("properly returns when some values are missing and only some defaults are included", () => {
    const params = qs.stringify({ sessionType: "regular" });
    const parsed = parseQueryParamsObject(params, {
      search: { schema: z.string() },
      legislature: { schema: z.coerce.number() },
      sessionType: { schema: z.string(), defaultValue: null },
    });
    expect(parsed).toStrictEqual({
      search: undefined,
      legislature: undefined,
      sessionType: "regular",
    });
  });
  it("properly returns when some schemas are not defined", () => {
    const params = qs.stringify({ search: "foo", legislature: 5, sessionType: "regular" });
    const parsed = parseQueryParamsObject(params, {
      search: { schema: z.string(), defaultValue: "" },
      legislature: { defaultValue: null },
      sessionType: { schema: z.string(), defaultValue: null },
    });
    expect(parsed).toStrictEqual({
      search: "foo",
      legislature: "5",
      sessionType: "regular",
    });
  });
  it("properly returns when some schemas are not defined and value is missing", () => {
    const params = qs.stringify({ search: "foo", sessionType: "regular" });
    const parsed = parseQueryParamsObject(params, {
      search: { schema: z.string(), defaultValue: "" },
      legislature: { defaultValue: null },
      sessionType: { schema: z.string(), defaultValue: null },
    });
    expect(parsed).toStrictEqual({
      search: "foo",
      legislature: null,
      sessionType: "regular",
    });
  });
  it(
    "properly returns when some schemas are not defined, default is not provided and " +
      "the value is missing",
    () => {
      const params = qs.stringify({ search: "foo", sessionType: "regular" });
      const parsed = parseQueryParamsObject(params, {
        search: { schema: z.string(), defaultValue: "" },
        legislature: {},
        sessionType: { schema: z.string(), defaultValue: null },
      });
      expect(parsed).toStrictEqual({
        search: "foo",
        legislature: undefined,
        sessionType: "regular",
      });
    },
  );
});

describe("addQueryParamsToUrl() properly returns", () => {
  it("prooperly parses and includes query paramters", () => {
    const url = addQueryParamsToUrl("http://example.com", MOCK_QUERY);
    expect(getQueryParams(url)).toStrictEqual({
      a: "bar",
      b: "1",
      c: "true",
      d: "",
      f: "",
      g: "  ",
      h: {
        a: "bar",
        b: "1",
        c: "true",
        d: "",
        f: "",
        g: "  ",
        h: ["apple", "banana", "pear"],
        k: ["", "  ", "blueberry"],
      },
      i: ["apple", "banana", "pear"],
      k: [" ", "", ""],
      l: ["", "  ", "blueberry"],
    });
  });
  it("prooperly parses and includes pruned query paramters", () => {
    const url = addQueryParamsToUrl("http://example.com", MOCK_QUERY, { prune: true });
    expect(getQueryParams(url)).toStrictEqual({
      a: "bar",
      b: "1",
      c: "true",
      h: {
        a: "bar",
        b: "1",
        c: "true",
        h: ["apple", "banana", "pear"],
        k: ["blueberry"],
      },
      i: ["apple", "banana", "pear"],
      l: ["blueberry"],
    });
  });
});

describe("pruneQueryParams() properly returns", () => {
  it("properly returns with default pruneable values", () => {
    expect(pruneQueryParams(MOCK_QUERY)).toStrictEqual({
      a: "bar",
      b: 1,
      c: true,
      h: {
        a: "bar",
        b: 1,
        c: true,
        h: ["apple", "banana", "pear"],
        k: ["blueberry"],
      },
      i: ["apple", "banana", "pear"],
      l: ["blueberry"],
    });
  });
  it("properly returns with custom pruneable values", () => {
    expect(
      pruneQueryParams(MOCK_QUERY, { prune: [null, "empty-strings", "empty-objects"] }),
    ).toStrictEqual({
      a: "bar",
      b: 1,
      c: true,
      h: {
        a: "bar",
        b: 1,
        c: true,
        h: ["apple", "banana", "pear"],
        i: [],
        k: ["blueberry"],
      },
      i: ["apple", "banana", "pear"],
      j: [],
      k: [],
      l: ["blueberry"],
    });
  });
});
