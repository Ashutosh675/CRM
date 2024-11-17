import React, { useState, useEffect } from "react";
import { Container, Typography, Box } from "@mui/material";
import ContactForm from "./components/ContactForm";
import ContactTable from "./components/ContactTable";
import axios from "axios";

function App() {
  const [contacts, setContacts] = useState([]);

  const fetchContacts = async () => {
    try {
      const { data } = await axios.get("http://localhost:5000/contacts");
      setContacts(data);
    } catch (error) {
      console.error("Error fetching contacts:", error);
    }
  };

  useEffect(() => {
    fetchContacts();
  }, []);

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Contact Management
      </Typography>
      <Box mb={4}>
        <ContactForm refreshContacts={fetchContacts} />
      </Box>
      <ContactTable contacts={contacts} refreshContacts={fetchContacts} />
    </Container>
  );
}

export default App;
