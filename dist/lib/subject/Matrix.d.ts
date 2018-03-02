/**
 * Matrix position
 */
export interface MatrixPosIntf {
    row: number;
    column: number;
}
/**
 * Matrix
 */
export declare class Matrix<T> {
    private _cells;
    private _maxcol;
    private _maxrow;
    private _inited;
    /**
     * Constructor
     * @param rowcount: Count of rows
     * @param colcount: Count of columns
     */
    constructor(rowcount: number, colcount: number);
    /**
     * Rows
     */
    readonly RowCount: number;
    /**
     * Columns
     */
    readonly ColumnCount: number;
    /**
     * Is inited
     */
    readonly isInited: boolean;
    /**
     * init
     * Initialize the current Matrix
     */
    init(): void;
    /**
     * Is a valid position
     * @param pos Position
     */
    isValidPosition(pos: MatrixPosIntf): boolean;
    /**
     * Get element
     * @param pos Position
     */
    getElement(pos: MatrixPosIntf): T;
    /**
     * Set element
     * @param pos Position
     */
    setElement(pos: MatrixPosIntf, elem: T): void;
    /**
     * Get slash output
     */
    getSlashOutputPos(): MatrixPosIntf[][];
    /**
     * Get backslash positions
     */
    getBackSlashOutputPos(): MatrixPosIntf[][];
}
