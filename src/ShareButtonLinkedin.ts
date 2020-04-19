import AbstractLinkShareButton from './AbstractLinkShareButton';
import IEventHandler from './IEventListener';

export default class ShareButtonLinkedin extends AbstractLinkShareButton {
    constructor(eventListener:IEventHandler, className: string, url: string) {
        super(eventListener, className, url)
    }

    createLink(): string {
        return `http://www.linkedin.com/shareArticle?url=${this.url}`
    }
}
