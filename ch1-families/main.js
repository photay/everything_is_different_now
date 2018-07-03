function createTable(tableLabel){
  document.write("<table>");
  // document.write("<col width='130'>");
  document.write("<tr>");
  document.write("<th id='table-p' rowspan='2'>"+tableLabel+"</th>")
  for (i=0; i<5; i++){
    document.write("<td>");
    document.write("<svg><circle/></svg>");
    document.write("<p id='table-p'>Something here</p>")
    document.write("</td>");
  }
  document.write("</tr>");
  document.write("<tr>");
  for (i=0; i<5; i++){
    document.write("<td>");
    document.write("<svg><circle/></svg>");
    document.write("<p id='table-p'>Something here</p>")
    document.write("</td>");
  }
  document.write("</tr>");
  document.write("</table>");
}
