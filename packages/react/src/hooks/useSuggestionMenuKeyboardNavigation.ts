import { BlockNoteEditor } from "@blocknote/core";
import { useEffect, useState } from "react";

export function useSuggestionMenuKeyboardNavigation<T>(
  editor: BlockNoteEditor<any, any, any>,
  items: T[],
  executeItem: (item: T) => void,
  closeMenu: () => void
) {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);

  useEffect(() => {
    const handleMenuNavigationKeys = (event: KeyboardEvent) => {
      if (event.key === "ArrowUp") {
        event.preventDefault();

        if (items.length) {
          setSelectedIndex((selectedIndex - 1 + items!.length) % items!.length);
        }

        return true;
      }

      if (event.key === "ArrowDown") {
        event.preventDefault();

        if (items.length) {
          setSelectedIndex((selectedIndex + 1) % items!.length);
        }

        return true;
      }

      if (event.key === "Enter") {
        event.preventDefault();

        if (items.length) {
          executeItem(items[selectedIndex]);
        }

        return true;
      }

      if (event.key === "Escape") {
        event.preventDefault();

        closeMenu();

        return true;
      }

      return false;
    };

    editor.domElement.addEventListener(
      "keydown",
      handleMenuNavigationKeys,
      true
    );

    return () => {
      editor.domElement.removeEventListener(
        "keydown",
        handleMenuNavigationKeys,
        true
      );
    };
  }, [closeMenu, editor.domElement, executeItem, items, selectedIndex]);

  return selectedIndex;
}