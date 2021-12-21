import React from "react";
import {Document , StyleSheet,Page,Text,View,} from "@react-pdf/renderer";



const styles = StyleSheet.create({
    page: {
    flexDirection: "column",
    backgroundColor: "green",
 },

 title: {
    margin: 20,
    fontSize: 25,
    textAlign: 'center',
    backgroundColor: '#E4E4E4',
    textTransform: 'uppercase',
 },

 section: {
    margin: 10,
    padding: 10,
    fontSize:25,
 },
});

const myDocuments=()=>{
    return(
        <div>
    <Document>
<Page size="A4" style={styles.page}>
<View style={styles.section}>
    <Text >ENTickect welcome you to the latest show</Text>
    </View>

<View style={styles.section}>
    <Text>Download your ticket now</Text>
</View>

<View>
    <Text>Chris Brown will perform lively at Canivore Ground Dont miss out </Text>
</View>

</Page>



</Document>
</div>
    );
}

export default myDocuments
