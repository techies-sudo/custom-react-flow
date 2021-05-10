import { ElementId, ReactFlowState, Node } from "../types";
export declare function changeOnClick(state: ReactFlowState, nodeId: ElementId | null, hover?: boolean): Node[];
export declare function toggleOnDrag(state: ReactFlowState, toggle: boolean): Node[];
export declare function createAction<T extends string>(type: T): {
    type: T;
};
export declare function createAction<T extends string, P extends any>(type: T, payload: P): {
    type: T;
    payload: P;
};
