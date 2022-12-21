import Address from './Contacts/Address';
import SendUsEmail from './Contacts/SendUsEmail';

function Contact() {
  document.title = 'Contact - Cellix Bio';
  return (
    <>
      <div className='DescContainerh3'><span></span>
                <span className="WWDh3">GET IN TOUCH</span><span></span>
                </div>
      {/* <Address></Address> */}
      <SendUsEmail></SendUsEmail>
    </>
  );
}
export default Contact;