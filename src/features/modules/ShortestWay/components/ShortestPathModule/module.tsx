import { Input } from "@nextui-org/react";
import { Graph } from "../GraphLibrary/Graph";
import { GraphGenerator } from "../GraphLibrary/GraphGenerator";
import { Template } from "../Template";

export class ModuleExample<T1, T2> extends Template<T1, T2> {
  protected override task() {
    return () => (
      <p>
        Найти длину кратчайшего пути из вершины "0" в вершину "5".
        <br />
        Проложите этот путь, окрасив нужные ребра в красный(255,0, 0)
        <br />
        Если не помните алгоритм, обратитесь к кнопке "Помощь"
      </p>
    );
  }

  protected override task_area() {
    return () => (
      <div className="shadow-ambient-white rounded-md p-2 space-y-2">
        <p>
          <b>Введите длину кратчайшего пути:</b>
        </p>
        <Input
          label="Ответ"
          type="number"
          size="sm"
          id="AnswerInput"
          name="AnswerName"
          variant="bordered"
        />
      </div>
    );
  }

  protected override helpMessage(): string {
    return "1) Как окрасить ребро? \nВыделите ребро, которое вы хотите покрасить, выберите цвет и нажмите кнопку раскрасить ребро.\n2)Как отменить окрашивание?\nВыберите нужное ребро и нажмите нужную кнопку\n3) Как посмотреть вес у вершины?\nВыделите нужную вершину, нажав на нее, и нажмите на кнопку. Далее в всплывающем окне вы увидите значение\nТак же справа присутствует таблица весов\n4) Как назначить вес?\n Выберите вершину, нажав на нее, и нажмите на кнопку. Далее введите значение веса в сплывающем окне и нажмите продолжить \n5)Алгоритм Дейкстры:\n 1.Инициализация: Начните с выбора стартовой вершины. Пометьте её расстояние как 0, а все остальные вершины как бесконечность.\n 2.Выбор вершины: Выберите вершину с наименьшим помеченным расстоянием. Начнем с выбранной стартовой вершины.\n 3.Обновление расстояний: Обновите расстояния до соседних вершин через текущую вершину. Если новое расстояние короче, чем старое, обновите его.\n 4.Пометка вершины: Пометьте выбранную вершину как посещенную.\n 5.Повторение: Повторяйте шаги 2-4 для всех вершин, пока не посетите все вершины или пока не достигнете целевой.\n 6.Результат: После завершения алгоритма вы получите кратчайшие расстояния от начальной вершины до всех остальных вершин в графе.";
  }

  protected override generateGraph() {
    let graph: Graph<T1, T2> = GraphGenerator.random(7, 0.5);
    return graph;
  }

  protected override isGraphModified() {
    return false;
  }

  protected override isGraphRepainted() {
    return true;
  }

  protected override isGraphNodeRenamed() {
    return false;
  }

  protected override isNodeWeight() {
    return true;
  }

  protected override isGraphReweight() {
    return false;
  }

  protected isVisualizingPolicyChangeble() {
    return true;
  }

  protected override isNodeNameVisible() {
    return true;
  }

  protected override isEdgeWeightVisible() {
    return true;
  }

  protected override isNodeWeightVisible() {
    return true;
  }

  protected isGraphAdjRepainted() {
    return false;
  }
}
