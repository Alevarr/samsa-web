import { Component, FC } from "react";
import TaskTimer from "../TaskTimer/index";
import { Graph } from "../GraphLibrary/Graph";
//import  Matrix  from '../MatrixLibrary/Matrix';
//import { MatrixController } from '../MatrixLibrary/MatrixController';
import cytoscape from "cytoscape";
import { GraphGenerator } from "../GraphLibrary/GraphGenerator";
import { GraphController } from "../GraphLibrary/GraphController";
import {
  Button,
  Table,
  TableBody,
  TableCell,
  TableColumn,
  TableHeader,
  TableRow,
} from "@nextui-org/react";
import ToolBar from "../Toolbar/ToolBar";

interface IProps {}

interface IState<T1, T2> {
  graph: Graph<T1, T2>;
  task_graph: Graph<T1, T2>;
}

export class Template<T1, T2> extends Component<IProps, IState<T1, T2>> {
  visualizing_policy = "circle";

  constructor(props: IProps) {
    super(props);

    let g: Graph<T1, T2> = this.generateGraph();
    let t_g: Graph<T1, T2> = this.generateTaskGraph();
    this.state = {
      graph: g,
      task_graph: t_g,
    };
  }

  public render() {
    const Task: any = this.task();
    const Area: any = this.task_area();

    return (
      <>
        <div id="wrap" className="flex flex-row gap-4 justify-stretch">
          <div className="flex flex-col gap-4 w-[260px]">
            <ToolBar />
            <TaskTimer timeSeconds={100} onTimerExpire={this.nextStage} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            {this.isGraphModule() && (
              <GraphController
                id={"cy1"}
                className="w-full h-full shadow-ambient-white rounded-md"
                graph={this.state.graph}
                visualization_policy={this.visualizing_policy}
                is_nodeid_visible={this.isNodeNameVisible()}
                is_weights_visible={this.isEdgeWeightVisible()}
                is_weights_node_visible={this.isNodeWeightVisible()}
                on_weights_changed={() => this.forceUpdate()}
              />
            )}
          </div>
          <div className="flex flex-col gap-4 w-[260px] shrink-0">
            <div
              id={"drtfghbjk"}
              // className={`TaskCell ${
              //   variant === 1 ? "TaskCell-full-height" : ""
              // }`}
              className="shadow-ambient-white rounded-md p-4"
            >
              <p className="font-bold">Задание</p>
              <Task />
            </div>
            <Area />
            <div className="w-full p-4 shadow-ambient-white rounded-md space-y-2">
              <p className="font-bold">Таблица всех весов:</p>
              <Table aria-label="Example static collection table">
                <TableHeader>
                  {/* <TableColumn>Name</TableColumn> */}
                  {[{ label: "Name" }, ...this.state.graph.nodes].map(
                    (node) => (
                      <TableColumn key={node.label}>{node.label}</TableColumn>
                    )
                  )}
                </TableHeader>
                <TableBody>
                  <TableRow key="1">
                    {[{ weight: "Weight" }, ...this.state.graph.nodes].map(
                      (node) => (
                        <TableCell key={node.weight} scope="row">
                          {node.weight}
                        </TableCell>
                      )
                    )}
                  </TableRow>
                </TableBody>
              </Table>
            </div>
          </div>
        </div>
        <Button id="compleateModule" color="primary" className="mt-4" fullWidth>
          Далее
        </Button>
      </>
    );
  }

  private nextStage() {
    console.log("next stage");
  }

  protected helpMessage() {
    return "1) Как окрасить ребро? \nВыделите ребро, которое вы хотите покрасить, выберите цвет и нажмите кнопку раскрасить ребро.\n2)Как отменить окрашивание?\nВыберите нужное ребро и нажмите нужную кнопку\n3) Как посмотреть вес у вершины?\nВыделите нужную вершину, нажав на нее, и нажмите на кнопку. Далее в всплывающем окне вы увидите значение\nТак же справа присутствует таблица весов\n4) Как назначить вес?\n Выберите вершину, нажав на нее, и нажмите на кнопку. Далее введите значение веса в сплывающем окне и нажмите продолжить \n5)Алгоритм Дейкстры:\n 1.Инициализация: Начните с выбора стартовой вершины. Пометьте её расстояние как 0, а все остальные вершины как бесконечность.\n 2.Выбор вершины: Выберите вершину с наименьшим помеченным расстоянием. Начнем с выбранной стартовой вершины.\n 3.Обновление расстояний: Обновите расстояния до соседних вершин через текущую вершину. Если новое расстояние короче, чем старое, обновите его.\n 4.Пометка вершины: Пометьте выбранную вершину как посещенную.\n 5.Повторение: Повторяйте шаги 2-4 для всех вершин, пока не посетите все вершины или пока не достигнете целевой.\n 6.Результат: После завершения алгоритма вы получите кратчайшие расстояния от начальной вершины до всех остальных вершин в графе.";
  }

  protected task() {
    return () => <p>Это пустой компонент задания</p>;
  }

  protected task_area() {
    return () => <p>Это пустой компонент задания</p>;
  }

  protected generateGraph() {
    let graph: Graph<T1, T2> = GraphGenerator.random(5, 0.3);
    return graph;
  }

  protected generateTaskGraph() {
    let task_graph: Graph<T1, T2> = GraphGenerator.random(5, 0.3);
    return task_graph;
  }

  protected isGraphModule() {
    return true;
  }

  protected isGraphModified() {
    return true;
  }
  protected isGraphRepainted() {
    return true;
  }
  protected isGraphAdjRepainted() {
    return true;
  }
  protected isGraphNodeRenamed() {
    return true;
  }
  protected isGraphReweight() {
    return true;
  }
  protected isNodeWeight() {
    return true;
  }
  protected isVisualizingPolicyChangeble() {
    return true;
  }

  protected isNodeNameVisible() {
    return true;
  }
  protected isNodeWeightVisible() {
    return true;
  }
  protected isEdgeWeightVisible() {
    return true;
  }

  componentDidMount() {
    let vp = document.getElementById(
      "visualization-policy"
    ) as HTMLSelectElement;
    vp?.addEventListener("change", () => {
      this.visualizing_policy = vp.value;
      this.forceUpdate();
    });
  }
}
