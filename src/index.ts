import ShareButtonFacebook from './ShareButtonFacebook';
import ShareButtonLinkedin from './ShareButtonLinkedin';
import ShareButtonTwitter from './ShareButtonTwitter';
import ShareButtonPrint from './ShareButtunPrint';
import DOMEventHandler from './DOMEventHandler'

const link = 'http://youtube.com/nicasiomarques';

const eventHadler = new DOMEventHandler()

const shareButtonFacebook = new ShareButtonFacebook(eventHadler, '.btn-facebook', link)
shareButtonFacebook.bind();

const shareButtonLinkedin = new ShareButtonLinkedin(eventHadler, '.btn-linkedin', link)
shareButtonLinkedin.bind();

const shareButtonTwitter = new ShareButtonTwitter(eventHadler, '.btn-twitter', link);
shareButtonTwitter.bind();

const shareButtonPrint = new ShareButtonPrint(eventHadler, '.btn-print');
shareButtonPrint.bind();
