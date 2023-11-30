import { AppShell, Navbar, ScrollArea } from "@mantine/core";
import React from "react";
import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

import { App } from "../examples/Basic";
import { ReactInlineContent } from "../examples/ReactInlineContent";
import { ReactStyles } from "../examples/ReactStyles";
import { ReactCustomBlocks } from "../examples/ReactBlocks";
import "./style.css";
import { CustomBlocks } from "../examples/Blocks";
import { InlineContent } from "../examples/InlineContent";

window.React = React;

const editors = [
  {
    title: "Basic",
    path: "/simple",
    component: App,
  },
  {
    title: "React custom styles",
    path: "/react-styles",
    component: ReactStyles,
  },
  {
    title: "Inline content",
    path: "/inline-content",
    component: InlineContent,
  },
  {
    title: "React inline content",
    path: "/react-inline-content",
    component: ReactInlineContent,
  },
  {
    title: "Custom blocks",
    path: "/custom-blocks",
    component: CustomBlocks,
  },
  {
    title: "React custom blocks",
    path: "/react-blocks",
    component: ReactCustomBlocks,
  },
];

function Root() {
  // const linkStyles = (theme) => ({
  //   root: {
  //     // background: "red",
  //     ...theme.fn.hover({
  //       backgroundColor: "#dfdfdd",
  //     }),

  //     "&[data-active]": {
  //       backgroundColor: "rgba(0, 0, 0, 0.04)",
  //     },
  //   },
  //   // "root:hover": { background: "blue" },
  // });
  return (
    <AppShell
      padding={0}
      navbar={
        <Navbar width={{ base: 300 }} style={{ background: "#f7f7f5" }} p="xs">
          <Navbar.Section grow component={ScrollArea} mx="-xs" px="xs">
            {editors.map((editor, i) => (
              <div key={i}>
                <Link to={editor.path}>{editor.title}</Link>
              </div>
            ))}

            {/* manitne <NavLink
              styles={linkStyles}
              label="Simple"
              
              onClick={navi}
              // icon={<IconGauge size={16} stroke={1.5} />}
              // rightSection={<IconChevronRight size={12} stroke={1.5} />}
            />
            <NavLink
              styles={linkStyles}
              label="Two"
              // icon={<IconGauge size={16} stroke={1.5} />}
              // rightSection={<IconChevronRight size={12} stroke={1.5} />}
            /> */}
          </Navbar.Section>
        </Navbar>
      }
      header={<></>}
      //   header={<Header height={60} p="xs">
      //   {/* Header content */}
      // </Header>}
      styles={(theme) => ({
        main: {
          backgroundColor: "white",
          // theme.colorScheme === "dark"
          //   ? theme.colors.dark[8]
          //   : theme.colors.gray[0],
        },
      })}>
      <Outlet />
    </AppShell>
  );
}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: editors.map((editor) => ({
      path: editor.path,
      element: <editor.component />,
    })),
  },
]);

const root = createRoot(document.getElementById("root")!);
root.render(
  // TODO: StrictMode is causing duplicate mounts and conflicts with collaboration
  // <React.StrictMode>
  // <App />
  <RouterProvider router={router} />
  // </React.StrictMode>
);
