import type { Meta, StoryObj } from "@storybook/react";
import { unstable_createRemixStub as createRemixStub } from "@remix-run/testing";

import Route from "./route";

const meta = {
  title: "routes/_index",
  component: Route,
  decorators: [
    (Story) => {
      const RemixStub = createRemixStub([
        {
          path: "/",
          loader: () => ({ technology: "Storybook" }),
          element: <Story />,
        },
      ]);
      return <RemixStub />;
    },
  ],
  parameters: {
    // More on how to position stories at: https://storybook.js.org/docs/react/configure/story-layout
    layout: "fullscreen",
  },
} satisfies Meta<typeof Route>;

export default meta;

type Story = StoryObj<typeof meta>;

export const Default: Story = {};
