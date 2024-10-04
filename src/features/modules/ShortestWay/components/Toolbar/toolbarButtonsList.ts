const toolbarButtonsList: {title: string; id: string; isHidden?: boolean}[] = [
  { title: "Добавить вершину", id: "addNodeButton", isHidden: true },
  { title: "Удалить вершину", id: "deleteNodeButton", isHidden: true },
  { title: "Соединить вершины", id: "concatNodeButton", isHidden: true },
  { title: "Удалить ребро", id: "deleteEdgeButton", isHidden: true },
  { title: "Раскрасить вершину", id: "recolorNodeButton", isHidden: true },

  { title: "Раскрасить ребро", id: "recolorEdgeButton" },
  { title: "Снять окрашивание с ребра", id: "uncolorEdgeButton" },

  { title: "Выделить смежные вершины", id: "colorAdjNodeButton", isHidden: true },
  { title: "Выделить смежные рёбра", id: "colorAdjEdgeButton", isHidden: true },
  { title: "Убрать выделение", id: "uncolorNodeButton", isHidden: true },
  { title: "Переименовать вершину", id: "setNodeName", isHidden: true },
  { title: "Назначить вес дуге", id: "setEdgeWeight", isHidden: true },
  { title: "Назначить вес вершине", id: "setNodeWeight" },
  { title: "Просмотреть вес вершины", id: "writeNodeWeight" },
]

export default toolbarButtonsList