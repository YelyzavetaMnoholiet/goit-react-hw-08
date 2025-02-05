import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import ContactForm from "../components/ContactForm/ContactForm";
import SearchBox from "../components/SearchBox/SearchBox";
import ContactList from "../components/ContactList/ContactList";
import { selectIsError, selectIsLoading } from "../redux/contacts/selector";
import { fetchContacts } from "../redux/contacts/operations";

export default function ContactsPage() {
  const isLoading = useSelector(selectIsLoading);
  const isError = useSelector(selectIsError);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <div>
      <ContactForm />

      <SearchBox />

      {isLoading ? (
        <p>Loading...</p>
      ) : isError ? (
        <p>Error: ${isError}</p>
      ) : (
        <ContactList />
      )}
    </div>
  );
}
