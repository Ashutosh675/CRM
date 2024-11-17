import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  IconButton,
  Button,
} from "@mui/material";
import { Delete, Edit } from "@mui/icons-material";
import axios from "axios";

const ContactTable = ({ contacts, refreshContacts }) => {
  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/contacts/${id}`);
      refreshContacts();
    } catch (error) {
      console.error("Error deleting contact:", error);
    }
  };

  return (
    <TableContainer>
      <Table>
        <TableHead>
          <TableRow>
            {["First Name", "Last Name", "Email", "Phone", "Company", "Job Title", "Actions"].map(
              (header) => (
                <TableCell key={header}>{header}</TableCell>
              )
            )}
          </TableRow>
        </TableHead>
        <TableBody>
          {contacts.map((contact) => (
            <TableRow key={contact.id}>
              {["firstName", "lastName", "email", "phone", "company", "jobTitle"].map((field) => (
                <TableCell key={field}>{contact[field]}</TableCell>
              ))}
              <TableCell>
                <IconButton color="primary">
                  <Edit />
                </IconButton>
                <IconButton color="secondary" onClick={() => handleDelete(contact.id)}>
                  <Delete />
                </IconButton>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ContactTable;
