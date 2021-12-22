import { jsPDF } from "jspdf";
import React from "react"

const doc=new jsPDF();
doc.text(10,20 , "Welcome to ENTicket");
doc.addFont("italic")
doc.text({img})
doc.text({title})
doc.text({des})
doc.text({time})
doc.text({price})
