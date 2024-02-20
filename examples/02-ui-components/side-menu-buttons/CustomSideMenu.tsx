import {
  DragHandle,
  SideMenuButton,
  SideMenuProps,
  SideMenuWrapper,
  useBlockNoteEditor,
} from "@blocknote/react";
import "@blocknote/react/style.css";
import { MdDelete } from "react-icons/md";

export function CustomSideMenu(props: SideMenuProps) {
  const editor = useBlockNoteEditor();

  return (
    <SideMenuWrapper>
      <SideMenuButton>
        <MdDelete
          size={24}
          onClick={() => editor.removeBlocks([props.block])}
        />
      </SideMenuButton>
      <DragHandle {...props} />
    </SideMenuWrapper>
  );
}