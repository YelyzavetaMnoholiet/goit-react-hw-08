import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import "modern-normalize";

import { fetchContacts } from "./redux/contacts/operations";

import HomePage from "./pages/HomePage";
import NotFoundPage from "./pages/NotFoundPage";
import styles from "./App.module.css";
import ContactsPage from "./pages/ContactPage";

import Layout from "./components/Layout/Layout";
import LoginPage from "./pages/LoginPage";
import RegistrationPage from "./pages/RegistrationPage";
import { refreshUserThunk } from "./redux/auth/operations";
import { selectisRefreshing } from "./redux/auth/selector";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import PublicRout from "./components/PublicRout/PublicRout";

const App = () => {
  const dispatch = useDispatch();
  const isRefresh = useSelector(selectisRefreshing);
  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);
  return isRefresh ? null : (
    <div className={styles.app}>
      <Routes>
        <Route
          path="/"
          element={
            <PrivateRoute>
              <Layout />
            </PrivateRoute>
          }
        >
          <Route index element={<HomePage />} />
          <Route path="contacts" element={<ContactsPage />} />
        </Route>
        <Route
          path="/login"
          element={
            <PublicRout>
              <LoginPage />
            </PublicRout>
          }
        />
        <Route
          path="/register"
          element={
            <PublicRout>
              <RegistrationPage />
            </PublicRout>
          }
        />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </div>
  );
};

export default App;
