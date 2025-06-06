/**
 *
 * Editor is rich text editor component based on Quill.
 *
 * [Live Demo](https://www.primereact.org/editor/)
 *
 * @module editor
 *
 */
import * as React from 'react';
import { ComponentHooks } from '../componentbase/componentbase';
import { PassThroughOptions } from '../passthrough';
import { PassThroughType } from '../utils/utils';

export declare type EditorPassThroughType<T> = PassThroughType<T, EditorPassThroughMethodOptions>;

/**
 * Custom passthrough(pt) option method.
 */
export interface EditorPassThroughMethodOptions {
    props: EditorProps;
}

/**
 * Custom passthrough(pt) options.
 * @see {@link EditorProps.pt}
 */
export interface EditorPassThroughOptions {
    /**
     * Uses to pass attributes to the root's DOM element.
     */
    root?: EditorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the toolbar's DOM element.
     */
    toolbar?: EditorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Uses to pass attributes to the formats's DOM element.
     */
    formats?: EditorPassThroughType<React.HTMLAttributes<HTMLSpanElement>>;
    /**
     * Uses to pass attributes to the select's DOM element.
     */
    select?: EditorPassThroughType<React.HTMLAttributes<HTMLSelectElement>>;
    /**
     * Uses to pass attributes to the option's DOM element.
     */
    option?: EditorPassThroughType<React.HTMLAttributes<HTMLOptionElement>>;
    /**
     * Uses to pass attributes to the button's DOM element.
     */
    button?: EditorPassThroughType<React.HTMLAttributes<HTMLButtonElement>>;
    /**
     * Uses to pass attributes to the content's DOM element.
     */
    content?: EditorPassThroughType<React.HTMLAttributes<HTMLDivElement>>;
    /**
     * Used to manage all lifecycle hooks
     * @see {@link ComponentHooks}
     */
    hooks?: ComponentHooks;
}

/**
 * Custom text change event
 * @see {@link EditorProps.onTextChange}
 * @event
 */
interface EditorTextChangeEvent {
    /**
     * Current value as html.
     */
    htmlValue: string | null;
    /**
     * Current value as text.
     */
    textValue: string;
    /**
     * Representation of the change.
     */
    delta: any;
    /**
     * Source of change. Will be either "user" or "api".
     */
    source: string;
}

/**
 * Custom selection change event
 * @see {@link EditorProps.onSelectionChange}
 * @event
 */
interface EditorSelectionChangeEvent {
    /**
     * Object with index and length keys indicating where the selection exists
     */
    range: any;
    /**
     * Object with index and length keys indicating where the previous selection was.
     */
    oldRange: any;
    /**
     * Source of change. Will be either "user" or "api".
     */
    source: string;
}

/**
 * Defines valid properties in Editor component. In addition to these, all properties of HTMLDivElement can be used in this component.
 * @group Properties
 */
export interface EditorProps extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLDivElement>, HTMLDivElement>, 'ref'> {
    /**
     * Value of the content.
     */
    value?: string | undefined;
    /**
     * Placeholder text to show when editor is empty.
     */
    placeholder?: string | undefined;
    /**
     * Whether to instantiate the editor to read-only mode.
     * @defaultValue false
     */
    readOnly?: boolean | undefined;
    /**
     * Modules configuration, see [here](https://quilljs.com/docs/modules/) for available options.
     */
    modules?: any;
    /**
     * Whitelist of formats to display, see [here](https://quilljs.com/docs/formats/) for available options.
     */
    formats?: string[] | undefined;
    /**
     * The theme of editor
     */
    theme?: string | undefined;
    /**
     * Whether to show the header of editor.
     * @defaultValue false
     */
    showHeader?: boolean | undefined;
    /**
     * Style and modules of the toolbar.
     */
    headerTemplate?: React.ReactNode | undefined;
    /**
     * Callback to invoke when text of editor changes.
     * @param {EditorTextChangeEvent} event - Custom text change event
     */
    onTextChange?(event: EditorTextChangeEvent): void;
    /**
     * Callback to invoke when selected text of editor changes.
     * @param {EditorSelectionChangeEvent} event - Custom selection change event
     */
    onSelectionChange?(event: EditorSelectionChangeEvent): void;
    /**
     * Callback to invoke when the quill modules are loaded.
     * @param {*} quill - Quill instance
     */
    onLoad?(quill: any): void;
    /**
     * Used to get the child elements of the component.
     * @readonly
     */
    children?: React.ReactNode | undefined;
    /**
     * Uses to pass attributes to DOM elements inside the component.
     * @type {EditorPassThroughOptions}
     */
    pt?: EditorPassThroughOptions;
    /**
     * Used to configure passthrough(pt) options of the component.
     * @type {PassThroughOptions}
     */
    ptOptions?: PassThroughOptions;
    /**
     * When enabled, it removes component related styles in the core.
     * @defaultValue false
     */
    unstyled?: boolean;
}

/**
 * **PrimeReact - Editor**
 *
 * _Editor is rich text editor component based on Quill._
 *
 * [Live Demo](https://www.primereact.org/editor/)
 * --- ---
 * ![PrimeReact](https://primefaces.org/cdn/primereact/images/logo-100.png)
 *
 * @group Component
 */
export declare class Editor extends React.Component<EditorProps, any> {
    /**
     * Used to focus the component.
     */
    public focus(): void;
    /**
     * Used to get quill instance.
     * @return {*} Quill Instance
     */
    public getQuill(): any;
    /**
     * Used to get container element.
     * @return {HTMLDivElement | null} Container element
     */
    public getElement(): HTMLDivElement | null;
    /**
     * Used to get content element.
     * @return {HTMLDivElement | null} Content element
     */
    public getContent(): HTMLDivElement | null;
    /**
     * Used to get toolbar element.
     * @return {HTMLDivElement | null} Toolbar element
     */
    public getToolbar(): HTMLDivElement | null;
}
