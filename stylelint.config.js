const STYLELINT_RULES = {
  "at-rule-empty-line-before": [
    "always",
    {
      ignore: ["after-comment", "first-nested", "inside-block"],
      ignoreAtRules: ["use", "import", "forward", "tailwind", "apply"],
    },
  ],
  /* These two properties are required such that the colors that are imported in TS are of an
     expected form, which is a HEX color with 6 characters (not including the '#'). */
  "color-hex-length": "long",
  "color-no-invalid-hex": true,
  "comment-whitespace-inside": "always",
  /* This rule is needed to override `stylelint-config-sass-guidelines` to allow "none" as a valid
     specification of a border. */
  "declaration-property-value-disallowed-list": {
    border: [],
  },
  /* Newer versions of Stylelint and related packages/extensions seem to have an issue detecting
     whether or not the usage of a function is considered "unknown", for both sass built-in modules
     and internal modules.  If we turn off "function-no-unknown" in favor of the
     "scss/function-no-unknown" rules, it will properly treat functions from sass built-in modules
     as being "known", but not functions from internal modules.

     For now, we should turn both off - but when this problem is addressed we should turn the
     "scss/function-no-unknown" rule back on (but not "function-no-unknown"). */
  "function-no-unknown": null,
  "length-zero-no-unit": null,
  "max-nesting-depth": null,
  "no-invalid-double-slash-comments": true,
  "selector-class-pattern": null,
  "selector-max-compound-selectors": null,
  "selector-max-id": null,
  "no-descending-specificity": null,
  "selector-pseudo-class-no-unknown": [true, { ignorePseudoClasses: ["export"] }],
};

const SCSS_RULES = {
  "scss/function-no-unknown": null,
  // Variable patterns are in kebab-case, allowing underscores.
  "scss/dollar-variable-pattern": "^((_)$|(([a-z][a-z0-9]*)(-[a-z0-9]+)*$))",
  "scss/dollar-variable-empty-line-before": null,
  "scss/operator-no-newline-after": null,
  "scss/double-slash-comment-empty-line-before": [
    "always",
    { ignore: ["between-comments", "stylelint-commands", "inside-block"] },
  ],
  "scss/at-rule-no-unknown": [
    true,
    {
      ignoreAtRules: [
        "tailwind",
        "apply",
        "variants",
        "responsive",
        "screen",
        "forward",
        "use",
        "import",
      ],
    },
  ],
};

module.exports = {
  extends: ["stylelint-config-recommended-scss"],
  plugins: ["stylelint-scss"],
  cache: true,
  fix: true,
  rules: {
    ...STYLELINT_RULES,
    ...SCSS_RULES,
  },
};
