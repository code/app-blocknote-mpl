import {
  BlockNoteViewRaw,
  Components,
  ComponentsContext,
} from "@blocknote/react";
import { ComponentProps } from "react";
import { TextInput } from "./input/TextInput";
import {
  Menu,
  MenuDivider,
  MenuDropdown,
  MenuItem,
  MenuLabel,
  MenuTrigger,
} from "./menu/Menu";
import { Popover, PopoverContent, PopoverTrigger } from "./popover/Popover";
import { Toolbar } from "./toolbar/Toolbar";
import { ToolbarButton } from "./toolbar/ToolbarButton";
import { ToolbarSelect } from "./toolbar/ToolbarSelect";
import { Panel } from "./panel/Panel";
import { PanelButton } from "./panel/PanelButton";
import { PanelFileInput } from "./panel/PanelFileInput";
import { PanelTab } from "./panel/PanelTab";
import { PanelTextInput } from "./panel/PanelTextInput";
import { createComponentsContext } from "../../react/src";

export const components: Components = createComponentsContext({
  FormattingToolbar: {
    Root: Toolbar,
    Button: ToolbarButton,
    Select: ToolbarSelect,
  },
  ImagePanel: {
    Root: Panel,
    Button: PanelButton,
    FileInput: PanelFileInput,
    TabPanel: PanelTab,
    TextInput: PanelTextInput,
  },
  LinkToolbar: {
    Root: Toolbar,
    Button: ToolbarButton,
  },
  Generic: {
    Form: {
      Root: (props) => <div>{props.children}</div>,
      TextInput: TextInput,
    },
    Menu: {
      Root: Menu,
      Trigger: MenuTrigger,
      Dropdown: MenuDropdown,
      Divider: MenuDivider,
      Label: MenuLabel,
      Item: MenuItem,
    },
    Popover: {
      Root: Popover,
      Trigger: PopoverTrigger,
      Content: PopoverContent,
    },
  },
});

export const BlockNoteView = (
  props: ComponentProps<typeof BlockNoteViewRaw>
) => {
  return (
    <ComponentsContext.Provider value={components}>
      <BlockNoteViewRaw {...props} />
    </ComponentsContext.Provider>
  );
};

/*

TODO:
- allow passing in shadcn components
- fix other libs
- select items
- menu colors
- caret
- suggestion menu?
- forms
- toggle buttons
- zindex
*/