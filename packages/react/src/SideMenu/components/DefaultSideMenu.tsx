import { BlockSchema, InlineContentSchema } from "@blocknote/core";

import { StyleSchema } from "@blocknote/core/src/extensions/Blocks/api/styles";
import { AddBlockButton } from "./DefaultButtons/AddBlockButton";
import { DragHandle } from "./DefaultButtons/DragHandle";
import { SideMenu } from "./SideMenu";
import { SideMenuProps } from "./SideMenuPositioner";

export const DefaultSideMenu = <
  BSchema extends BlockSchema,
  I extends InlineContentSchema,
  S extends StyleSchema
>(
  props: SideMenuProps<BSchema, I, S>
) => (
  <SideMenu>
    <AddBlockButton {...props} />
    <DragHandle {...props} />
  </SideMenu>
);
