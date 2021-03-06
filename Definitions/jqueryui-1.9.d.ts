// Type definitions for jQueryUI 1.9
// Project: http://jqueryui.com/
// Definitions by: Boris Yankov <https://github.com/borisyankov/>
// Definitions: https://github.com/borisyankov/DefinitelyTyped


/// <reference path="jquery-1.8.d.ts"/>


// Widget //////////////////////////////////////////////////

interface Widget {

    // Methods
    destroy();
    disable();
    enable();
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    refresh(): void;
    widget(): JQuery;

    // Events
    create?(event: Event, ui): void;
}


// Accordion //////////////////////////////////////////////////

interface AccordionOptions {
    active?: any; // bool or number
    animate?: any; // bool, number, string or object
    collapsible?: bool;
    disabled?: bool;
    event?: string;
    header?: any; // TODO: Selector
    heightStyle?: string;
    icons?: any;
}

interface Accordion extends Widget {
    // Methods

    // Events
    activate?(event: Event, ui): void;
    beforeActivate?(event: Event, ui): void;
    create?(event: Event, ui): void;
}


// Autocomplete //////////////////////////////////////////////////

interface AutocompleteOptions {
    appendTo?: any; //Selector;
    autoFocus?: bool;
    delay?: number;
    disabled?: bool;
    minLength?: number;
    position?: any; // TODO: JqueryPosition
    source?: any; // [], string or ()
}

interface Autocomplete extends Widget {

    // Methods
    close();
    search(value?: string);

    // Events
    change?(event: Event, ui): void;
    close?(event: Event, ui): void;
    create?(event: Event, ui): void;
    focus?(event: Event, ui): void;
    open?(event: Event, ui): void;
    response?(event: Event, ui): void;
    search?(event: Event, ui): void;
    select?(event: Event, ui): void;
}


// Button //////////////////////////////////////////////////

interface ButtonOptions {
    disabled?: bool;
    icons?: any;
    label?: string;
    text?: bool;
}

interface Button extends Widget {

    // Methods    
    refresh();

    // Events
    create?(event: Event, ui): void;
}


// Datepicker //////////////////////////////////////////////////

interface DatepickerOptions {
    altFieldType?: any; // Selecotr, jQuery or Element
    altFormat?: string;
    appendText?: string;
    autoSize?: bool;
    beforeShow?: (input: Element, inst: any) => void;
    beforeShowDay?: (date: Date) => void;
    buttonImage?: string;
    buttonImageOnly?: bool;
    buttonText?: string;
    calculateWeek?: () => any;
    changeMonth?: bool;
    changeYear?: bool;
    closeText?: string;
    constrainInput?: bool;
    currentText?: string;
    dateFormat?: string;
    dayNames?: string[];
    dayNamesMin?: string[];
    dayNamesShort?: string[];
    defaultDateType?: any; // Date, number or string
    duration?: string;
    firstDay?: number;
    gotoCurrent?: bool;
    hideIfNoPrevNext?: bool;
    isRTL?: bool;
    maxDate?: any; // Date, number or string
    minDate?: any; // Date, number or string
    monthNames?: string[];
    monthNamesShort?: string[];
    navigationAsDateFormat?: bool;
    nextText?: string;
    numberOfMonths?: any; // number or []
    onChangeMonthYear?: (year: number, month: number, inst: any) => void;
    onClose?: (dateText: string, inst: any) => void;
    onSelect?: (dateText: string, inst: any) => void;
    prevText?: string;
    selectOtherMonths?: bool;
    shortYearCutoff?: any; // number or string
    showAnim?: string;
    showButtonPanel?: bool;
    showCurrentAtPos?: number;
    showMonthAfterYear?: bool;
    showOn?: string;
    showOptions?: any; // TODO
    showOtherMonths?: bool;
    showWeek?: bool;
    stepMonths?: number;
    weekHeader?: string;
    yearRange?: string;
    yearSuffix?: string;
}

interface Datepicker extends Widget {

    // Methods
    destroy();
    dialog(date: any, onSelect?: () => void , settings?: any, pos?: any);
    getDate(): Date;
    hide(): void;
    isDisabled(): bool;
    refresh(): void;
    setDate(date: Date): void;
    show();

    // Events
}


// Dialog //////////////////////////////////////////////////

interface DialogOptions {
    autoOpen?: bool;
    buttons?: any; // object or []
    closeOnEscape?: bool;
    closeText?: string;
    dialogClass?: string;
    disabled?: bool;
    draggable?: bool;
    height?: any; // number or string
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
    modal?: bool;
    position?: any; // object, string or []
    resizable?: bool;
    show?: any; // number, string or object
    stack?: bool;
    title?: string;
    width?: number;
    zIndex?: number;
}

interface Dialog extends Widget {

    // Methods
    close(): void;
    destroy(): void;
    disable(): void;
    enable(): void;
    isOpen(): bool;
    moveToTop(): void;
    open(): void;
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    widget(): JQuery;

    // Events
    beforeClose?(event: Event, ui): void;
    close?(event: Event, ui): void;
    create?(event: Event, ui): void;
    drag?(event: Event, ui): void;
    dragStart?(event: Event, ui): void;
    dragStop?(event: Event, ui): void;
    focus?(event: Event, ui): void;
    open?(event: Event, ui): void;
    resize?(event: Event, ui): void;
    resizeStart?(event: Event, ui): void;
    resizeStop?(event: Event, ui): void;
}


// Draggable //////////////////////////////////////////////////

interface DraggableEventUIParam {
    helper: JQuery;
    position: { top: number; left: number; };
    offset: { top: number; left: number; };
}

interface DraggableEvent {
    (event: Event, ui: DraggableEventUIParam): void;
}

interface DraggableOptions {
    disabled?: bool;
    addClasses?: bool;
    appendTo?: any;
    axis?: string;
    cancel?: string;
    connectToSortable?: string;
    containment?: any;
    cursor?: string;
    cursorAt?: any;
    delay?: number;
    distance?: number;
    grid?: number[];
    handle?: any;
    helper?: any;
    iframeFix?: any;
    opacity?: number;
    refreshPositions?: bool;
    revert?: any;
    revertDuration?: number;
    scope?: string;
    scroll?: bool;
    scrollSensitivity?: number;
    scrollSpeed?: number;
    snap?: any;
    snapMode?: string;
    snapTolerance?: number;
    stack?: string;
    zIndex?: number;
}

interface Draggable extends Widget {

    // Events
    create?: DraggableEvent;
    start?: DraggableEvent;
    drag?: DraggableEvent;
    stop?: DraggableEvent;
}


// Droppable //////////////////////////////////////////////////

interface DroppableEventUIParam {
    draggable: JQuery;
    helper: JQuery;
    position: { top: number; left: number; };
    offset: { top: number; left: number; };
}

interface DroppableEvent {
    (event: Event, ui: DroppableEventUIParam): void;
}

interface DroppableOptions {
    disabled?: bool;
    accept?: any;
    activeClass?: string;
    greedy?: bool;
    hoverClass?: string;
    scope?: string;
    tolerance?: string;
}

interface Droppable extends Widget {

    // Events
    create?: DroppableEvent;
    activate?: DroppableEvent;
    deactivate?: DroppableEvent;
    over?: DroppableEvent;
    out?: DroppableEvent;
    drop?: DroppableEvent;
}

interface JQueryDatePickerDefaults {
    closeText: string;
    prevText: string;
    nextText: string;
    currentText: string;
    monthNames: string[];
    monthNamesShort: string[];
    dayNames: string[];
    dayNamesShort: string[];
    dayNamesMin: string[];
    weekHeader: string;
    dateFormat: string;
    firstDay: number;
    isRTL: bool;
    showMonthAfterYear: bool;
    yearSuffix: string;
}

interface JQueryDatePicker {
    regional: any;
    setDefaults(JQueryDatePickerDefaults);
}


// Menu //////////////////////////////////////////////////

interface MenuOptions {
    disabled?: bool;
    icons?: any;
    menus?: string;
    position?: any; // TODO
    role?: string;
}

interface Menu extends Widget {

    // Methods    
    blur(event?: Event): void;
    collapse(event?: Event): void;
    blurAll(event?: Event, all?: bool): void;
    expand(event?: Event): void;
    focus(event?: Event, item?: JQuery): void;
    isFirstItem(): bool;
    isLastItem(): bool;
    next(event?: Event): void;
    nextPage(event?: Event): void;
    previous(event?: Event): void;
    previousPage(event?: Event): void;
    select(event?: Event): void;

    // Events
    blur(event: Event, ui): void;
    create(event: Event, ui): void;
    focus(event: Event, ui): void;
    select(event: Event, ui): void;
}


// Progressbar //////////////////////////////////////////////////

interface ProgressbarOptions {
    disabled?: bool;
    //value?: number;
}

interface Progressbar extends Widget {

    // Methods    
    destroy();
    disable();
    enable();
    option(optionName: string): any;
    option(): any;
    option(optionName: string, value: any): void;
    option(options: any): void;
    value(): number;
    value(newValue: number): void;
    widget(): JQuery;

    // Events
    change(event: Event, ui): void;
    complete(event: Event, ui): void;
    create(event: Event, ui): void;
}


// Resizable //////////////////////////////////////////////////

interface ResizableOptions {
    alsoResize?: any; // Selector, JQuery or Element
    animate?: bool;
    animateDuration?: any; // number or string
    animateEasing?: string;
    aspectRatio?: any; // bool or number
    autoHide?: bool;
    cancel?: any; // TODO Selector
    containment?: any; // Selector, Element or string
    delay?: number;
    disabled?: bool;
    distance?: number;
    ghost?: bool;
    grid?: number[];
    handles?: any; // string or object
    helper?: string;
    maxHeight?: number;
    maxWidth?: number;
    minHeight?: number;
    minWidth?: number;
}

interface Resizable extends Widget {

    // Methods

    // Events
    resize(event: Event, ui): void;
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
}


// Resizable //////////////////////////////////////////////////

interface SelectableOptions {
    autoRefresh?: bool;
    cancel?: any; // TODO Selector
    delay?: number;
    disabled?: bool;
    distance?: number;
    filter?: any; // TODO Selector
    tolerance?: string;
}

interface Selectable extends Widget {

    // Methods

    // Events
    selected(event: Event, ui): void;
    selecting(event: Event, ui): void;
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
    unselected(event: Event, ui): void;
    unselecting(event: Event, ui): void;
}

// Slider //////////////////////////////////////////////////

interface SliderOptions {
    animate?: any; // bool, string or number
    disabled?: bool;
    max?: number;
    min?: number;
    orientation?: string;
    range?: any; // bool or string
    step?: number;
    // value?: number;
    // values?: number[];
}

interface Slider extends Widget {

    // Methods    
    value(): number;
    value(newValue: number): void;
    values(): number[];
    values(index: number): number;
    values(index: number, newValue: number): void;
    values(newValues: number[]): void;

    // Events
    change(event: Event, ui): void;
    create(event: Event, ui): void;
    slide(event: Event, ui): void;
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
}


// Sortable //////////////////////////////////////////////////

interface SortableOptions {
    appendTo?: any; // jQuery, Element, Selector or string
    axis?: string;
    // cancel?: any; // TODO Selector
    connectWith?: any; // TODO Selector
    containment?: any; // Element, Selector or string
    cursor?: string;
    cursorAt?: any;
    delay?: number;
    disabled?: bool;
    distance?: number;
    dropOnEmpty?: bool;
    forceHelperSize?: bool;
    forcePlaceholderSize?: bool;
    grid?: number[];
    handle?: any; // Selector or Element
    items?: any; // Selector
    opacity?: number;
    placeholder?: string;
    revert?: any; // bool or number
    scroll?: bool;
    scrollSensitivity?: number;
    scrollSpeed?: number;
    tolerance?: string;
    zIndex?: number;
}

interface Sortable extends Widget {

    // Methods
    cancel(): void;
    refreshPositions(): void;
    serialize(options: any): void; // TODO
    toArray(): string[];

    // Events
    activate(event: Event, ui): void;
    beforeStop(event: Event, ui): void;
    change(event: Event, ui): void;
    deactivate(event: Event, ui): void;
    out(event: Event, ui): void;
    over(event: Event, ui): void;
    receive(event: Event, ui): void;
    remove(event: Event, ui): void;
    sort(event: Event, ui): void;
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
    update(event: Event, ui): void;
}


// Spinner //////////////////////////////////////////////////

interface SpinnerOptions {
    culture?: string;
    disabled?: bool;
    icons?: any;
    incremental?: any; // bool or ()
    max?: any; // number or string
    min?: any; // number or string
    numberFormat?: string;
    page?: number;
    step?: any; // number or string
}

interface Spinner extends Widget {

    // Methods    
    pageDown(pages?: number): void;
    pageUp(pages?: number): void;
    stepDown(steps?: number): void;
    stepUp(steps?: number): void;
    value(): number;
    value(newValue: number): void;

    // Events
    spin(event: Event, ui): void;
    start(event: Event, ui): void;
    stop(event: Event, ui): void;
}


// Tabs //////////////////////////////////////////////////

interface TabsOptions {
    active?: any; // bool or number
    collapsible?: bool;
    disabled?: any; // bool or []
    event?: string;
    heightStyle?: string;
    hide?: any; // bool, number, string or object
    show?: any; // bool, number, string or object
}

interface Tabs extends Widget {

    // Methods    
    disable(index: any): void;
    enable(index: any): void;
    load(index: any): void;

    // Events
    activate(event: Event, ui): void;
    beforeActivate(event: Event, ui): void;
    beforeLoad(event: Event, ui): void;
    load(event: Event, ui): void;
}


// Tooltip //////////////////////////////////////////////////

interface TooltipOptions {
    content?: any; // () or string
    disabled?: bool;
    hide?: any; // bool, number, string or object
    items?: any; // TODO Selector
    position?: any; // TODO
    show?: any; // bool, number, string or object
    tooltipClass?: string;
    track?: bool;
}

interface Tooltip extends Widget {

    // Methods    
    close(event?: Event): void;
    open(event?: Event): void;

    // Events
    close(event: Event, ui): void;
    open(event: Event, ui): void;
}


////////////////////////////////////////////////////////////////////////////////////////////////////

interface JQuery {

    accordion(): JQuery;
    accordion(methodName: string): JQuery;
    accordion(options: DialogOptions): JQuery;
    accordion(optionLiteral: string, options: DialogOptions): JQuery;
    accordion(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    accordion(optionLiteral: string, optionName: string): JQuery;

    autocomplete(): JQuery;
    autocomplete(methodName: string): JQuery;
    autocomplete(options: AutocompleteOptions): JQuery;
    autocomplete(optionLiteral: string, options: AutocompleteOptions): JQuery;
    autocomplete(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    autocomplete(optionLiteral: string, optionName: string): JQuery;

    button(): JQuery;
    button(methodName: string): JQuery;
    button(options: ButtonOptions): JQuery;
    button(optionLiteral: string, options: ButtonOptions): JQuery;
    button(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    button(optionLiteral: string, optionName: string): JQuery;

    buttonset(): JQuery;
    buttonset(methodName: string): JQuery;
    buttonset(options: ButtonOptions): JQuery;
    buttonset(optionLiteral: string, options: ButtonOptions): JQuery;
    buttonset(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    buttonset(optionLiteral: string, optionName: string): JQuery;

    datepicker(): JQuery;
    datepicker(methodName: string): JQuery;
    datepicker(options: DatepickerOptions): JQuery;
    datepicker(optionLiteral: string, options: DatepickerOptions): JQuery;
    datepicker(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    datepicker(optionLiteral: string, optionName: string): JQuery;

    dialog(): JQuery;
    dialog(methodName: string): JQuery;
    dialog(options: DialogOptions): JQuery;
    dialog(optionLiteral: string, options: DialogOptions): JQuery;
    dialog(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    dialog(optionLiteral: string, optionName: string): JQuery;

    draggable(): JQuery;
    draggable(methodName: string): JQuery;
    draggable(options: DraggableOptions): JQuery;
    draggable(optionLiteral: string, options: DraggableOptions): JQuery;
    draggable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    draggable(optionLiteral: string, optionName: string): JQuery;

    droppable(): JQuery;
    droppable(methodName: string): JQuery;
    droppable(options: DroppableOptions): JQuery;
    droppable(optionLiteral: string, options: DraggableOptions): JQuery;
    droppable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    droppable(optionLiteral: string, optionName: string): JQuery;

    menu(): JQuery;
    menu(methodName: string): JQuery;
    menu(options: MenuOptions): JQuery;
    menu(optionLiteral: string, options: MenuOptions): JQuery;
    menu(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    menu(optionLiteral: string, optionName: string): JQuery;

    progressbar(): JQuery;
    progressbar(methodName: string): JQuery;
    progressbar(options: Progressbar): JQuery;
    progressbar(optionLiteral: string, options: Progressbar): JQuery;
    progressbar(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    progressbar(optionLiteral: string, optionName: string): JQuery;

    resizable(): JQuery;
    resizable(methodName: string): JQuery;
    resizable(options: ResizableOptions): JQuery;
    resizable(optionLiteral: string, options: ResizableOptions): JQuery;
    resizable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    resizable(optionLiteral: string, optionName: string): JQuery;

    selectable(): JQuery;
    selectable(methodName: string): JQuery;
    selectable(options: SelectableOptions): JQuery;
    selectable(optionLiteral: string, options: SelectableOptions): JQuery;
    selectable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    selectable(optionLiteral: string, optionName: string): JQuery;

    slider(): JQuery;
    slider(methodName: string): JQuery;
    slider(options: SliderOptions): JQuery;
    slider(optionLiteral: string, options: SliderOptions): JQuery;
    slider(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    slider(optionLiteral: string, optionName: string): JQuery;

    sortable(): JQuery;
    sortable(methodName: string): JQuery;
    sortable(options: SortableOptions): JQuery;
    sortable(optionLiteral: string, options: SortableOptions): JQuery;
    sortable(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    sortable(optionLiteral: string, optionName: string): JQuery;

    spinner(): JQuery;
    spinner(methodName: string): JQuery;
    spinner(options: SpinnerOptions): JQuery;
    spinner(optionLiteral: string, options: SpinnerOptions): JQuery;
    spinner(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    spinner(optionLiteral: string, optionName: string): JQuery;

    tabs(): JQuery;
    tabs(methodName: string): JQuery;
    tabs(options: TabsOptions): JQuery;
    tabs(optionLiteral: string, options: TabsOptions): JQuery;
    tabs(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    tabs(optionLiteral: string, optionName: string): JQuery;

    tooltip(): JQuery;
    tooltip(methodName: string): JQuery;
    tooltip(options: TooltipOptions): JQuery;
    tooltip(optionLiteral: string, options: TooltipOptions): JQuery;
    tooltip(optionLiteral: string, optionName: string, optionValue: any): JQuery;
    tooltip(optionLiteral: string, optionName: string): JQuery;
}

interface JQueryStatic {
    datepicker: JQueryDatePicker;
}