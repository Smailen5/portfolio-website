import React from "react";
import {
  Avatar,
  Button,
  ButtonGroup,
  Accordion,
  AccordionItem,
  Dropdown,
  DropdownTrigger,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";

function App() {
  const [selectedOption, setSelectedOption] = React.useState(
    new Set(["merge"]),
  );

  const descriptionsMap = {
    merge:
      "All commits from the source branch are added to the destination branch via a merge commit.",
    squash:
      "All commits from the source branch are added to the destination branch as a single commit.",
    rebase:
      "All commits from the source branch are added to the destination branch individually.",
  };

  const labelsMap = {
    merge: "Create a merge commit",
    squash: "Squash and merge",
    rebase: "Rebase and merge",
  };

  const selectedOptionValue = Array.from(selectedOption)[0];

  return (
    <>
      <h1 className="bg-red-500 text-3xl font-bold underline">Hello world!</h1>
      <div className="flex items-center gap-3">
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026024d" />
        <Avatar name="Junior" />
        <Avatar src="https://i.pravatar.cc/150?u=a042581f4e29026704d" />
        <Avatar name="Jane" />
        <Avatar src="https://i.pravatar.cc/150?u=a04258114e29026702d" />
        <Avatar name="Joe" />
      </div>
      <ButtonGroup>
        <Button color="danger">Button</Button>
        <Button color="primary">Button</Button>
        <Button color="outline" className="">
          Button
        </Button>
        <Button color="success">Button</Button>
      </ButtonGroup>

      <div className="flex items-center gap-4">
        <Button radius="full">Full</Button>
        <Button radius="lg">Large</Button>
        <Button radius="md">Medium</Button>
        <Button radius="sm">Small</Button>
        <Button radius="none">None</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button color="default">Default</Button>
        <Button color="primary">Primary</Button>
        <Button color="secondary">Secondary</Button>
        <Button color="success">Success</Button>
        <Button color="warning">Warning</Button>
        <Button color="danger">Danger</Button>
      </div>
      <div className="flex flex-wrap items-center gap-4">
        <Button color="primary" variant="solid">
          Solid
        </Button>
        <Button color="primary" variant="faded">
          Faded
        </Button>
        <Button color="primary" variant="bordered">
          Bordered
        </Button>
        <Button color="primary" variant="light">
          Light
        </Button>
        <Button color="primary" variant="flat">
          Flat
        </Button>
        <Button color="primary" variant="ghost">
          Ghost
        </Button>
        <Button color="primary" variant="shadow">
          Shadow
        </Button>
      </div>
      <Button color="primary" isLoading>
        Loading
      </Button>
      <Button
        radius="full"
        className="bg-gradient-to-tr from-pink-500 to-yellow-500 text-white shadow-lg"
      >
        Button
      </Button>
      <ButtonGroup variant="flat">
        <Button>{labelsMap[selectedOptionValue]}</Button>
        <Dropdown placement="bottom-end">
          <DropdownTrigger>
            <Button isIconOnly>
              {/* { ChevronDownIcon ? <ChevronDownIcon /> : <span>Default Icon</span> } */}
            </Button>
          </DropdownTrigger>
          <DropdownMenu
            disallowEmptySelection
            aria-label="Merge options"
            selectedKeys={selectedOption}
            selectionMode="single"
            onSelectionChange={setSelectedOption}
            className="max-w-[300px]"
          >
            <DropdownItem key="merge" description={descriptionsMap["merge"]}>
              {labelsMap["merge"]}
            </DropdownItem>
            <DropdownItem key="squash" description={descriptionsMap["squash"]}>
              {labelsMap["squash"]}
            </DropdownItem>
            <DropdownItem key="rebase" description={descriptionsMap["rebase"]}>
              {labelsMap["rebase"]}
            </DropdownItem>
          </DropdownMenu>
        </Dropdown>
      </ButtonGroup>
    </>
  );
}

export default App;
