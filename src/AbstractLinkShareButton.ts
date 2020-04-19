import AbstractShareButton from './AbstractShareButton';
import IEventListener from './IEventListener'

export default abstract class AbstractLinkShareButton extends AbstractShareButton {
    url: string;

    constructor(eventListener: IEventListener, className: string, url: string) {
        super(eventListener, className);
        this.url = url;
    }

    abstract createLink(): string;

    createAction(): any {
        const link = this.createLink();
        return () => window.open(link);
    }
}
