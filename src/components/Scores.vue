<template>
  <td>{{total}}</td>
 <td>{{pos}}</td>
 <td>{{grade}}</td>
</template>

<script>
export default {
name:'Scores',
props:[
    'total',
    'pos',
    'grade'
]
}
</script>

<style scoped>
body {
  font-family: Arial, sans-serif;
  background-color: #f5f5f5;
  margin: 0;
  padding: 0;

}

.score-card {
  max-width: 1300px;
  margin: 2.5px auto;
  background-color: #fff;
  padding: 10px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
}
.logo-container{
 text-align: center;
}
.logo{
    width: 100px;
    height: 100px;
}
.heading p{
    text-align: center;
    color:black;
    font-size:10px;
}
.sch-title{
    font-size:18px
}
.name-plate{
    font-size: 15px;
    color:black;
    font-weight: bolder;
}

h5 {
  text-align: center;
  margin-bottom: 20px;
  color: #333;
}
h6 {
  text-align: center;
  margin-bottom: 10px;
  color: #333;
}
h3 {
  text-align: center;
  margin-bottom: 8px;
  color: #333;
}

.examtable-print {
    border: 0.7px solid #000;
    border-collapse: collapse;
    width: 100%;

}
    .examtable-print td {
      border: 1px solid #000;
      color: #000;
      font-size: .74em;
      white-space: nowrap;
    }
    .examtable-print th {
      border: 0.5px solid #000;
      color:#000;
      text-align: left;
      font-size: .74em;
    }

table {
  width: 100%;
  border-collapse: collapse;
border: 0.7px solid #000;
}
table, th, td {
  border: 1px solid black;
  padding-left:2px;
  
}

/* th, td {
  padding: 10px;
  text-align: left;
  border-bottom: 1px solid #ddd;
  font-size: 12px;
  color:black;
} */

th {
  background-color: #f2f2f2;
}

tr:hover {
  background-color: #f5f5f5;
}

.summary {
  margin-top: 10px;
  padding-top: 5px;
  color:black;
  flex: 1;
   padding-right: 20px;
}

h2 {
  color: #333;
  margin-bottom: 10px;
}

p {
  margin-bottom: 5px;
}

/* Customize grades colors */
/* td:nth-child(4) {
  color: #fff;
  font-weight: bold;
}

td:nth-child(4):before {
  content: "";
  display: inline-block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  margin-right: 5px;
}

td:nth-child(4)[data-grade="A"] {
  background-color: #4caf50;
}

td:nth-child(4)[data-grade="B"] {
  background-color: #2196f3;
}

td:nth-child(4)[data-grade="C"] {
  background-color: #ff9800;
} */

/*  */



/* Apply a CSS reset to remove default padding and margin */
* {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
}
.traits-container{
    margin-top: 10px;
    display:flex;
    justify-content: space-between;
    padding:20px;
}
.pills{
    display:inline-block;
    margin: 10px 10px 0 0;
    padding:6px 12px;
    background: #eee;
    border-radius:20px;
    font-size:12px;
    letter-spacing:1px;
    font-weight:bold;
    color:black;
}
.underline{
    text-decoration: underline;
  padding: 10px;
}



.profile-container {
    border-top: 1px solid #ddd;
    display: flex;
    justify-content: space-between;
    padding: 20px;
}

.profile-info {
    flex: 1;
    padding-right: 20px; /* Add some spacing between the two columns */
}

.profile-picture {

    flex: 1;
    display: flex;
    justify-content: center; /* Center the image horizontally */
    align-items: center; /* Center the image vertically */
}

/* Optional: Add some styles to the student profile picture */
.profile-picture img {
    max-width: 100%;
    max-height: 100px;
    border-radius: 50%;
    /* box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2); */
}
</style>>

