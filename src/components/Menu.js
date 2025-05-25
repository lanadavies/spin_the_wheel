import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  IconButton,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
  useDisclosure,
} from "@chakra-ui/react";
import { useContext, useRef } from "react";
import { SegmentsContext } from "../SegmentContext";
import { AddIcon, CloseIcon } from "@chakra-ui/icons";

const Menu = () => {
  const { segments, setSegments } = useContext(SegmentsContext);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
        Open
      </Button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Wheel Segments</DrawerHeader>

          <DrawerBody>
            <Stack spacing={2}>
              {segments.map((segment, index) => (
                <InputGroup key={index}>
                  <Input
                    key={index}
                    placeholder={`Segment ${index + 1}`}
                    value={segment.name}
                    onChange={(e) => {
                      const newSegments = [...segments];
                      newSegments[index].name = e.target.value;
                      setSegments(newSegments);
                    }}
                  />
                  {segments.length > 4 && (
                    <InputRightElement
                      children={
                        <CloseIcon
                          style={{ cursor: "pointer" }}
                          onClick={() => {
                            const newSegments = [...segments];
                            newSegments.splice(index, 1);
                            setSegments(newSegments);
                          }}
                        />
                      }
                    />
                  )}
                </InputGroup>
              ))}
            </Stack>
            <IconButton
              onClick={() => {
                const newSegments = [...segments];
                newSegments.push({ name: "New Segment", color: "#f7abcf" }); // Default color
                setSegments(newSegments);
              }}
              icon={<AddIcon />}
            />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default Menu;
