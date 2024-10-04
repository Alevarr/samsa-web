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
                  <ul>
                    <li>
                      <p className="font-bold">Как окрасить ребро?</p>{" "}
                      <p>
                        Выделите ребро, которое вы хотите покрасить, выберите
                        цвет и нажмите кнопку раскрасить ребро.
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Как отменить окрашивание?</p>{" "}
                      <p>Выберите нужное ребро и нажмите нужную кнопку</p>
                    </li>
                    <li>
                      <p className="font-bold">Как посмотреть вес у вершины?</p>{" "}
                      <p>
                        Выделите нужную вершину, нажав на нее, и нажмите на
                        кнопку. Далее в всплывающем окне вы увидите значение Так
                        же справа присутствует таблица весов
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Как назначить вес?</p>{" "}
                      <p>
                        Выберите вершину, нажав на нее, и нажмите на кнопку.
                        Далее введите значение веса в сплывающем окне и нажмите
                        продолжить
                      </p>
                    </li>
                    <li>
                      <p className="font-bold">Алгоритм Дейкстры:</p>
                      <ol className="pl-2 list-decimal">
                        <li>
                          <p className="font-bold">Инициализация</p>
                          <p>
                            Начните с выбора стартовой вершины. Пометьте её
                            расстояние как 0, а все остальные вершины как
                            бесконечность.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold">Выбор вершины</p>
                          <p>
                            Выберите вершину с наименьшим помеченным
                            расстоянием. Начнем с выбранной стартовой вершины.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold">Обновление расстояний</p>
                          <p>
                            Обновите расстояния до соседних вершин через текущую
                            вершину. Если новое расстояние короче, чем старое,
                            обновите его.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold">Пометка вершины</p>
                          <p>Пометьте выбранную вершину как посещенную.</p>
                        </li>
                        <li>
                          <p className="font-bold">Повторение</p>
                          <p>
                            Повторяйте шаги 2-4 для всех вершин, пока не
                            посетите все вершины или пока не достигнете целевой.
                          </p>
                        </li>
                        <li>
                          <p className="font-bold">Результат</p>
                          <p>
                            После завершения алгоритма вы получите кратчайшие
                            расстояния от начальной вершины до всех остальных
                            вершин в графе.
                          </p>
                        </li>
                      </ol>
                    </li>
                  </ul>
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
