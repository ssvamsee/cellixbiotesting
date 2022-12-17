import Address from './Contacts/Address';
import SendUsEmail from './Contacts/SendUsEmail';

function Contact() {
  document.title = 'Contact - Cellix Bio';
  return (
    <>
      <h2 className='CUh2'>CONTACT US</h2>
      <Address></Address>
      <SendUsEmail></SendUsEmail>
    </>
  );
}
export default Contact;