import {
  Button,
  Input,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  useDisclosure,
} from "@nextui-org/react";
import toolbarButtonsList from "./toolbarButtonsList";

const ToolBar = () => {
  const { isOpen, onOpen, onOpenChange } = useDisclosure();
  return (
    <div className="shadow-ambient-white rounded-md">
      <div id={"toolButtons"} className="flex flex-col gap-2 p-2">
        <Button onPress={onOpen}>Помощь</Button>
        <Modal
          isOpen={isOpen}
          onOpenChange={onOpenChange}
          closeButton
          className="max-h-[600px]"
        >
          <ModalContent>
            {(onClose) => (
              <>
                <ModalHeader className="flex flex-col gap-1">
                  Помощь
                </ModalHeader>
                <ModalBody className="overflow-y-scroll">
                  <p>
                    {
                      "Объединением графов G1 и G2 называется граф G, такой, что G1=<V1, U1>G2=<V2, U2>G =<V, U>=G1 ⋃ G2V=V1 ⋃ V2U=U1 ⋃ U2"
                    }
                  </p>
                  <p>
                    {
                      "Соединением графов G1 и G2 называется граф\nG =<V, U> такой, что\nV =V1 ∪ V2\nU =U1 ∪ U2 ∪ (V1\\V2)x(V2\\V1)\n"
                    }
                  </p>
                  <p>
                    {
                      "Пересечением графов G1 и G2 называется граф\nG =<V, U> такой, что\nV =V1 ∩ V2\nU =U1 ∩ U2\n"
                    }
                  </p>
                  <p>{`Для добавления вершины нажмите кнопку "Добавить вершину"\n`}</p>
                  <p>
                    {
                      'Для удалить вершины выберите удаляемую вершину и нажмите кнопку "Удалить вершину"\n'
                    }
                  </p>
                  <p>
                    {
                      'Для добавления ребра выберите 2 вершины зажав "ctrl", нажмите кнопку "Добавить ребро"\n'
                    }
                  </p>
                  <p>
                    {
                      'Для удаления ребра выберите удаляемое ребро, нажмите кнопку "Удалить ребро"\n'
                    }
                  </p>
                  <p>
                    {
                      'Для изменения названия вершины используйте кнопу "Переименовать вершину"\n'
                    }
                  </p>
                  <p>
                    {
                      "Для изменения цвета вершины или ребра выберите цвет и вершину, которые хотите перекрасить, нажмите кнопку перекрасить вершину/ребро"
                    }
                  </p>
                  <p>{"Удачи!"}</p>
                </ModalBody>
                <ModalFooter>
                  <Button variant="flat" onPress={onClose}>
                    Закрыть
                  </Button>
                </ModalFooter>
              </>
            )}
          </ModalContent>
        </Modal>
        {toolbarButtonsList.map(
          (item) =>
            !item.isHidden && (
              <Button key={item.id} id={item.id}>
                {item.title}
              </Button>
            )
        )}
        <Input
          type="color"
          id="nodeColor"
          className="colorInput"
          name="nodeColor"
        />
      </div>
    </div>
  );
};

export default ToolBar;
