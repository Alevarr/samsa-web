const toolbarButtonsList: {title: string; id: string; isHidden?: boolean}[] = [
  { title: "Добавить вершину", id: "addNodeButton", },
  { title: "Удалить вершину", id: "deleteNodeButton", },
  { title: "Соединить вершины", id: "concatNodeButton", },
  { title: "Удалить ребро", id: "deleteEdgeButton", },
  { title: "Раскрасить вершину", id: "recolorNodeButton", },

  { title: "Раскрасить ребро", id: "recolorEdgeButton" },

  { title: "Снять окрашивание с ребра", id: "uncolorEdgeButton", },

  { title: "Выделить смежные вершины", id: "colorAdjNodeButton", isHidden: true },
  { title: "Выделить смежные рёбра", id: "colorAdjEdgeButton", isHidden: true },
  { title: "Убрать выделение", id: "uncolorNodeButton", isHidden: true },
  { title: "Переименовать вершину", id: "setNodeName", isHidden: true },
  { title: "Назначить вес дуге", id: "setEdgeWeight", isHidden: true },
  { title: "Назначить вес вершине", id: "setNodeWeight", isHidden: true },
  { title: "Просмотреть вес вершины", id: "writeNodeWeight", isHidden: true },
]

export default toolbarButtonsList