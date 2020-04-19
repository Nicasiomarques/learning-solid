import AbstractShareButton from './AbstractShareButton';
import IEventListener from './IEventListener';

export default class ShareButtonPrint extends AbstractShareButton {
    constructor(eventHandler: IEventListener, className: string) {
        super(eventHandler, className)
    }

    createAction() {
        return () => window.print()
    }
}
