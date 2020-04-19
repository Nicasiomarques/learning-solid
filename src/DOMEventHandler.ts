import IEventListener from './IEventListener'

export default class ShareButton implements IEventListener {
    addEventListenerToClass(className: string, event: string, fn: any) {
        const elements: any = document.querySelectorAll(className);
        for (const element of elements) {
            element.addEventListener(event, fn);
        }
    }
}
