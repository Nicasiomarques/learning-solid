import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventListener';

export default class ShareButtonTwitter extends AbstractLinkShareButton {
    constructor(eventListener:IEventHandler, className: string, url: string) {
        super(eventListener, className, url)
    }

    createLink(): string {
        return `http://www.facebook.com/sharer.php?u=${this.url}`
    }
}
