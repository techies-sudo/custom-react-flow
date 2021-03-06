import React, { CSSProperties, HTMLAttributes, MouseEvent, WheelEvent } from 'react';
import { Elements, NodeTypesType, EdgeTypesType, OnLoadFunc, Node, Edge, Connection, ConnectionMode, ConnectionLineType, ConnectionLineComponent, FlowTransform, OnConnectStartFunc, OnConnectStopFunc, OnConnectEndFunc, TranslateExtent, KeyCode, PanOnScrollMode, OnEdgeUpdateFunc, NodeExtent } from '../../types';
import '../../style.css';
import '../../theme-default.css';
export interface ReactFlowProps extends Omit<HTMLAttributes<HTMLDivElement>, 'onLoad'> {
    elements: Elements;
    onElementClick?: (event: MouseEvent, element: Node | Edge) => void;
    onElementsRemove?: (elements: Elements) => void;
    onNodeDoubleClick?: (event: MouseEvent, node: Node) => void;
    onNodeMouseEnter?: (event: MouseEvent, node: Node) => void;
    onNodeMouseMove?: (event: MouseEvent, node: Node) => void;
    onNodeMouseLeave?: (event: MouseEvent, node: Node) => void;
    onNodeContextMenu?: (event: MouseEvent, node: Node) => void;
    onNodeDragStart?: (event: MouseEvent, node: Node) => void;
    onNodeDrag?: (event: MouseEvent, node: Node) => void;
    onNodeDragStop?: (event: MouseEvent, node: Node) => void;
    onConnect?: (connection: Edge | Connection) => void;
    onConnectStart?: OnConnectStartFunc;
    onConnectStop?: OnConnectStopFunc;
    onConnectEnd?: OnConnectEndFunc;
    onLoad?: OnLoadFunc;
    onMove?: (flowTransform?: FlowTransform) => void;
    onMoveStart?: (flowTransform?: FlowTransform) => void;
    onMoveEnd?: (flowTransform?: FlowTransform) => void;
    onSelectionChange?: (elements: Elements | null) => void;
    onSelectionDragStart?: (event: MouseEvent, nodes: Node[]) => void;
    onSelectionDrag?: (event: MouseEvent, nodes: Node[]) => void;
    onSelectionDragStop?: (event: MouseEvent, nodes: Node[]) => void;
    onSelectionContextMenu?: (event: MouseEvent, nodes: Node[]) => void;
    onPaneScroll?: (event?: WheelEvent) => void;
    onPaneClick?: (event: MouseEvent) => void;
    onPaneContextMenu?: (event: MouseEvent) => void;
    nodeTypes?: NodeTypesType;
    edgeTypes?: EdgeTypesType;
    connectionMode?: ConnectionMode;
    connectionLineType?: ConnectionLineType;
    connectionLineStyle?: CSSProperties;
    connectionLineComponent?: ConnectionLineComponent;
    deleteKeyCode?: KeyCode;
    selectionKeyCode?: KeyCode;
    multiSelectionKeyCode?: KeyCode;
    zoomActivationKeyCode?: KeyCode;
    snapToGrid?: boolean;
    snapGrid?: [number, number];
    onlyRenderVisibleElements?: boolean;
    nodesDraggable?: boolean;
    nodesConnectable?: boolean;
    elementsSelectable?: boolean;
    selectNodesOnDrag?: boolean;
    paneMoveable?: boolean;
    minZoom?: number;
    maxZoom?: number;
    defaultZoom?: number;
    defaultPosition?: [number, number];
    translateExtent?: TranslateExtent;
    nodeExtent?: NodeExtent;
    arrowHeadColor?: string;
    markerEndId?: string;
    zoomOnScroll?: boolean;
    zoomOnPinch?: boolean;
    panOnScroll?: boolean;
    panOnScrollSpeed?: number;
    panOnScrollMode?: PanOnScrollMode;
    zoomOnDoubleClick?: boolean;
    onEdgeUpdate?: OnEdgeUpdateFunc;
    onEdgeContextMenu?: (event: MouseEvent, edge: Edge) => void;
    onEdgeMouseEnter?: (event: MouseEvent, edge: Edge) => void;
    onEdgeMouseMove?: (event: MouseEvent, edge: Edge) => void;
    onEdgeMouseLeave?: (event: MouseEvent, edge: Edge) => void;
    onEdgeDoubleClick?: (event: MouseEvent, edge: Edge) => void;
    onEdgeUpdateStart?: (event: MouseEvent, edge: Edge) => void;
    edgeUpdaterRadius?: number;
    nodeTypesId?: string;
    edgeTypesId?: string;
}
export declare type ReactFlowRefType = HTMLDivElement;
declare const ReactFlow: React.ForwardRefExoticComponent<ReactFlowProps & React.RefAttributes<HTMLDivElement>>;
export default ReactFlow;
