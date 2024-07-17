import LinkCard from "@/components/LinkCard";
import { dispatchProps, LinkProps } from "@/app/links/[userId]/page";
import { closestCenter, DndContext, DragEndEvent, KeyboardSensor, PointerSensor, useSensor, useSensors } from "@dnd-kit/core";
import { arrayMove, SortableContext, sortableKeyboardCoordinates, verticalListSortingStrategy } from "@dnd-kit/sortable";
import { restrictToVerticalAxis } from "@dnd-kit/modifiers";

export default function LinksList({ links, dispatch }: { links: LinkProps[]; dispatch: dispatchProps }) {
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    }),
  );

  function handleDragEnd(event: DragEndEvent) {
    const { active, over } = event;

    if (over && active.id !== over.id) {
      const oldIndex = links.findIndex((link) => link.id === active.id);
      const newIndex = links.findIndex((link) => link.id === over.id);

      // dispatch({ type: "save", payload: newLinks });
      const newlinks = arrayMove(links, oldIndex, newIndex);
      console.log("Before Reset", newlinks);
      dispatch({ type: "add_and_replace", payload: newlinks });
      console.log("After Reset", links);
    }
  }

  return (
    <DndContext sensors={sensors} onDragEnd={handleDragEnd} collisionDetection={closestCenter} modifiers={[restrictToVerticalAxis]}>
      <SortableContext items={links} strategy={verticalListSortingStrategy}>
        <div className={"space-y-6"}>
          {links.map((link, idx) => (
            <LinkCard key={link.id} idx={idx} link={link} dispatch={dispatch} />
          ))}
        </div>
      </SortableContext>
    </DndContext>
  );
}
