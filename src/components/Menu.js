import {
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  InputGroup,
  Select,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { colorPalette, SegmentsContext } from "../SegmentContext";
import { AddIcon, ChevronLeftIcon, CloseIcon } from "@chakra-ui/icons";
import "./Menu.css";

const Menu = () => {
  const { segments, setSegments } = useContext(SegmentsContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        // size="sm"
        id="menu-button"
        icon={<ChevronLeftIcon />}
        ref={btnRef}
        colorScheme="teal"
        onClick={onOpen}
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        size="lg"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            <h1>Wheel Segments</h1>
          </DrawerHeader>
          <DrawerBody>
            <Stack spacing={2}>
              {segments.map((segment, index) => (
                <InputGroup key={index}>
                  <Input
                    key={index}
                    placeholder={`Segment ${index + 1}`}
                    value={segment.name}
                    onChange={(e) => {
                      let newSegments = [...segments];
                      newSegments[index].name = e.target.value;
                      setSegments(newSegments);
                    }}
                  />
                  <Select
                    placeholder="Select colour"
                    value={segment.color}
                    onChange={(e) => {
                      let newSegments = [...segments];
                      newSegments[index].color = e.target.value;
                      setSegments(newSegments);
                    }}
                  >
                    {colorPalette.map((color, colorIndex) => (
                      <option key={colorIndex} value={color}>
                        {color}
                      </option>
                    ))}
                  </Select>
                  {segments.length > 4 && (
                    <IconButton
                            onClick={() => {
                              const newSegments = [...segments];
                              newSegments.splice(index, 1);
                              setSegments(newSegments);
                            }}
                      icon={<CloseIcon />}
                      />
                  )}
                </InputGroup>
              ))}
              <div>
                <IconButton
                  onClick={() => {
                    const newSegments = [...segments];
                    newSegments.push({
                      name: "New Segment",
                      color:
                        colorPalette[segments.length % colorPalette.length],
                    });
                    setSegments(newSegments);
                  }}
                  icon={<AddIcon />}
                />
              </div>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
