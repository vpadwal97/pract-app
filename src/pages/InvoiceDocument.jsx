import React from "react";
import { BlobProvider, Document, Page, Text, View, StyleSheet } from "@react-pdf/renderer";

// Define your PDF content
const MyDocument = () => (
  <Document>
    <Page size="A4">
      <View style={styles.section}>
        <Text>Hello, World!</Text>
      </View>

      <View style={styles.table}>
    {/* Table header */}
    <View style={styles.tableRow}>
      <View style={styles.tableCell}>
        <Text>ID</Text>
      </View>
      <View style={styles.tableCell}>
        <Text>Name</Text>
      </View>
      <View style={styles.tableCell}>
        <Text>Age</Text>
      </View>
    </View>
    {/* Table body */}
    {tableData.map((row) => (
      <View key={row.id} style={styles.tableRow}>
        <View style={styles.tableCell}>
          <Text>{row.id}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>{row.name}</Text>
        </View>
        <View style={styles.tableCell}>
          <Text>{row.age}</Text>
        </View>
      </View>
    ))}
  </View>

  
    </Page>
  </Document>
);

// Define your styles
const styles = StyleSheet.create({
  section: {
    margin: 10,
    padding: 10,
    flexGrow: 1,
  },
  
  table: { display: "table", width: "100%", borderStyle: "solid", borderWidth: 1, borderColor: "#000" },
  tableRow: { flexDirection: "row" },
  tableCell: { width: "33.33%", borderStyle: "solid", borderWidth: 1, borderColor: "#000", padding: 8 },
});


// Sample data for the table
const tableData = [
  { id: 1, name: "John Doe", age: 30 },
  { id: 2, name: "Jane Smith", age: 25 },
  { id: 3, name: "Alice Brown", age: 35 },
];

// Component to render the Document content only
const InvoiceDocument = () => (
  <BlobProvider document={<MyDocument />}>
    {({ blob, url, loading, error }) => {
      // Handle loading and error states
      if (loading) {
        return <Text>Loading...</Text>;
      }
      if (error) {
        return <Text>Error: {error.message}</Text>;
      }

      // If the blob is ready, render a link to open or download the PDF
      return (
        <a href={url} target="_blank" rel="noopener noreferrer">
          Open PDF
        </a>
      );
    }}
  </BlobProvider>
);

export default InvoiceDocument;
