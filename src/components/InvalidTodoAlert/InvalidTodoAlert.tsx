import { AlertDialog, AlertDialogBody, AlertDialogContent, AlertDialogFooter, AlertDialogHeader, AlertDialogOverlay, Button, Code, useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
}

const InvalidTodoAlert = ({ isOpen, onClose }: Props) => {

  const cancelRef = useRef<any>()

  return (
    <>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isCentered
        motionPreset="slideInBottom"
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize='lg' fontWeight='bold'>
              Invalid Todo
            </AlertDialogHeader>

            <AlertDialogBody>
              Try with something like:
              <Code>
                [&#123;
                task: task1,
                done: true
                &#125;]
              </Code>
            </AlertDialogBody>

            <AlertDialogFooter>
              <Button colorScheme='red' onClick={onClose} ml={3}>
                Delete
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  )
}

export default InvalidTodoAlert;
