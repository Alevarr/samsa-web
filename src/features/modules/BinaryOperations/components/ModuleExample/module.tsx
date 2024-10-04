import { Graph } from "../GraphLibrary/Graph";
import { GraphGenerator } from "../GraphLibrary/GraphGenerator";
import { GraphController } from "../GraphLibrary/GraphController";
import { Template } from "../Template";
import TaskTimer from "../TaskTimer/index";
import Matrix from "../MatrixLibrary/matrix";
import { Button } from "@nextui-org/react";
import ToolBar from "../Toolbar/ToolBar";

export class ModuleExample<T1, T2> extends Template<T1, T2> {
  protected override task() {
    let operations: string[] = [
      "сеодинения графов",
      "объединения графов",
      "пересечения графов",
    ];
    let i = Math.floor(Math.random() * 3);
    let operationString = operations[i];

    return () => <p>Провести операцию {operationString}</p>;
  }

  protected task_matrix() {
    let n1_vertex = 2;
    let n2_vertex = 7;
    let task_graph: Graph<T1, T2> = GraphGenerator.random2components(
      n1_vertex,
      n2_vertex,
      0.3
    );
    let matrix_1: number[][] = Array(n1_vertex)
      .fill([])
      .map(() => Array(n1_vertex).fill(0));
    let matrix_2: number[][] = Array(n2_vertex)
      .fill([])
      .map(() => Array(n2_vertex).fill(0));
    task_graph.edges.forEach((edge) => {
      let source_id = Number(edge.source.id);
      let target_id = Number(edge.target.id);
      if (source_id < n1_vertex) {
        matrix_1[target_id][source_id] = 1;
        matrix_1[source_id][target_id] = 1;
      } else {
        matrix_2[target_id - n1_vertex][source_id - n1_vertex] = 1;
        matrix_2[source_id - n1_vertex][target_id - n1_vertex] = 1;
      }
    });
    let names_1: string[] = Array(n1_vertex)
      .fill("0")
      .map((val, i) => i + 1 + "");
    const properMatrix_1 = matrix_1.map((row) => row.map((item) => item + ""));
    let names_2: string[] = Array(n2_vertex)
      .fill("0")
      .map((val, i) => i - 1 + n1_vertex + "");
    const properMatrix_2 = matrix_2.map((row) => row.map((item) => item + ""));
    let operations: string[] = [
      "сеодинения графов",
      "объединения графов",
      "пересечения графов",
    ];
    let i = Math.floor(Math.random() * 3);
    let operationString = operations[i];
    return () => (
      <div>
        <p>Провести операцию {operationString}</p>
        <Matrix
          id="matrix1"
          data_array={properMatrix_1}
          is_mutable={false}
          disableCellClick
          col_names={names_1}
          row_names={names_1}
        />
        <p></p>
        <Matrix
          id="matrix2"
          data_array={properMatrix_2}
          is_mutable={false}
          disableCellClick
          col_names={names_2}
          row_names={names_2}
        />
      </div>
    );
  }

  public override render() {
    const variant = Math.random() < 0.5 ? 1 : 2;
    let Task: any = this.task();
    if (variant == 1) {
      Task = this.task_matrix();
    }
    return (
      <>
        <div id="wrap" className="flex flex-row gap-4 justify-stretch">
          <div className="flex flex-col gap-4 w-[260px]">
            <ToolBar />
            <TaskTimer timeSeconds={100} onTimerExpire={this.nextStage} />
          </div>
          <div className="flex flex-col gap-4 w-full">
            {this.isGraphModule() ? (
              <GraphController
                id={"cy1"}
                className="w-full h-full shadow-ambient-white rounded-md"
                graph={this.state.graph}
                visualization_policy={this.visualizing_policy}
                is_nodeid_visible={this.isNodeNameVisible()}
                is_weights_visible={this.isEdgeWeightVisible()}
              />
            ) : (
              <div
                id={"matrix"}
                className="w-full h-full shadow-ambient-white rounded-md"
              >
                {/* <MatrixController matrix={this.generateMatrix()} /> */}
              </div>
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
              <p>Задание</p>
              <Task />
            </div>
            {variant === 2 && (
              <div
                id={"drtfghbjk"}
                className="h-full shadow-ambient-white rounded-md"
              >
                <GraphController
                  id={"cy2"}
                  className="w-full h-full shadow-ambient-white rounded-md"
                  graph={this.state.task_graph}
                  visualization_policy={this.visualizing_policy}
                  is_nodeid_visible={this.isNodeNameVisible()}
                  is_weights_visible={this.isEdgeWeightVisible()}
                  ignoreToolbar
                />
              </div>
            )}
          </div>
        </div>
        <Button id="compleateModule" color="primary" className="mt-4" fullWidth>
          Далее
        </Button>
      </>
    );
  }

  protected override nextStage() {
    console.log("next stage");
  }

  protected override generateTaskGraph() {
    let task_graph: Graph<T1, T2> = GraphGenerator.random2components(2, 3, 0.3);
    return task_graph;
  }

  protected override generateGraph() {
    let graph: Graph<T1, T2> = GraphGenerator.random(0, 0.3);
    return graph;
  }

  protected override isGraphModified() {
    return true;
  }

  protected override isGraphRepainted() {
    return true;
  }

  protected override isGraphNodeRenamed() {
    return true;
  }

  protected override isGraphReweight() {
    return false;
  }

  protected isVisualizingPolicyChangeble() {
    return false;
  }

  protected override isNodeNameVisible() {
    return true;
  }

  protected override isEdgeWeightVisible() {
    return false;
  }
}
