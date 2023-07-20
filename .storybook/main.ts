import type { StorybookConfig } from "@storybook/react-vite";

const config: StorybookConfig = {
  async viteFinal(config, options) {
    return {
      ...config,
      define: {
        ...config.define,
        "process.env.NODE_ENV": JSON.stringify("development"),
      },
      resolve: {
        ...config.resolve,
        alias: {
          ...config.resolve?.alias,
          // This might be needed, but in testing it seems to work without it.
          // "@remix-run/react/dist/components":
          //   "@remix-run/react/dist/esm/components",
        },
      },
    };
  },
  stories: [
    "../app/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-onboarding",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/react-vite",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
};

export default config;
