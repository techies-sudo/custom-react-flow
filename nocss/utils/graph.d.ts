import { Store } from 'redux';
import { Node, Edge, Elements, Transform, XYPosition, Rect, Box, Connection, FlowExportObject, ReactFlowState } from '../types';
export declare const isEdge: (element: Node | Connection | Edge) => element is Edge<any>;
export declare const isNode: (element: Node | Connection | Edge) => element is Node<any>;
export declare const getOutgoers: (node: Node, elements: Elements<any>) => Node[];
export declare const getIncomers: (node: Node, elements: Elements<any>) => Node[];
export declare const removeElements: (elementsToRemove: Elements<any>, elements: Elements<any>) => Elements<any>;
export declare const addEdge: (edgeParams: Edge | Connection, elements: Elements<any>) => Elements<any>;
export declare const updateEdge: (oldEdge: Edge, newConnection: Connection, elements: Elements<any>) => Elements<any>;
export declare const pointToRendererPoint: ({ x, y }: XYPosition, [tx, ty, tScale]: Transform, snapToGrid: boolean, [snapX, snapY]: [number, number]) => XYPosition;
export declare const onLoadProject: (currentStore: Store<ReactFlowState>) => (position: XYPosition) => XYPosition;
export declare const parseNode: (node: Node, nodeExtent: import("../types").TranslateExtent) => Node;
export declare const parseEdge: (edge: Edge) => Edge;
export declare const rectToBox: ({ x, y, width, height }: Rect) => Box;
export declare const boxToRect: ({ x, y, x2, y2 }: Box) => Rect;
export declare const getBoundsofRects: (rect1: Rect, rect2: Rect) => Rect;
export declare const getRectOfNodes: (nodes: Node[]) => Rect;
export declare const graphPosToZoomedPos: ({ x, y }: XYPosition, [tx, ty, tScale]: Transform) => XYPosition;
export declare const getNodesInside: (nodes: Node[], rect: Rect, [tx, ty, tScale]?: Transform, partially?: boolean) => Node[];
export declare const getConnectedEdges: (nodes: Node[], edges: Edge[]) => Edge[];
export declare const onLoadGetElements: (currentStore: Store<ReactFlowState>) => () => Elements<any>;
export declare const onLoadToObject: (currentStore: Store<ReactFlowState>) => () => FlowExportObject;
export declare const getTransformForBounds: (bounds: Rect, width: number, height: number, minZoom: number, maxZoom: number, padding?: number) => Transform;
