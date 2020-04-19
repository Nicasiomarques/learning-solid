import IEventHandler from './IEventListener';

export default abstract class AbstractShareButton {
    url: string;
    className: string;
    eventHandler: IEventHandler;
   
    constructor(eventHandler: IEventHandler, className: string) {
        this.className = className;
        this.eventHandler = eventHandler;
    }

    abstract createAction();

    bind() {
        const action = this.createAction();
        this.eventHandler.addEventListenerToClass(
            this.className,
            'click',
            action
        );
    }
}
