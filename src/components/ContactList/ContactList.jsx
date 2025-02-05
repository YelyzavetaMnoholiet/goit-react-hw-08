import { useSelector } from "react-redux";
import Contact from "../Contact/Contact";

import s from "./ContactList.module.css";
import {
  selectFilteredContacts,
  selectIsLoading,
} from "../../redux/contactsSlice";

const ContactList = () => {
  const contactFilter = useSelector(selectFilteredContacts);
  const isLoading = useSelector(selectIsLoading);

  return (
    <>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <ul className={s.contactsList}>
          {Array.isArray(contactFilter) &&
            contactFilter.map((contact) => (
              <Contact key={contact.id} {...contact} />
            ))}
        </ul>
      )}
    </>
  );

  // const contacts = useSelector((state) => state.contacts.contacts.items);
  // console.log("Contacts from Redux:", contacts);
  // const filter = useSelector((state) => state.filter.name.toLowerCase());
  // const contactFilter = Array.isArray(contacts)
  //   ? contacts.filter((contact) => contact.name.toLowerCase().includes(filter))
  //   : [];
  // console.log("Filtered Contacts:", contactFilter);
  // return (
  //   <ul className={s.contactsList}>
  //     {contactFilter.map((contact) => (
  //       <Contact
  //         key={contact.id}
  //         name={contact.name}
  //         number={contact.number}
  //         id={contact.id}
  //       />
  //     ))}
  //   </ul>
  // );
};

export default ContactList;
